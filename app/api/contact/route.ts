import { NextResponse } from 'next/server';
import { sendEmail, createEmailContent } from '@/lib/email-sender';

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const formData = await request.json();
    console.log('Received contact form data:', formData);

    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        console.log(`Missing required field: ${field}`);
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare email data
    const emailData = {
      "Full Name": formData.name,
      "Email": formData.email,
      "Phone": formData.phone || "Not provided",
      "Subject": formData.subject,
      "Message": formData.message,
    };

    // Create email content
    const { htmlContent, textContent } = createEmailContent("Contact Form Submission", emailData);

    // Send email
    const emailResult = await sendEmail(
      `New Contact Form Submission: ${formData.subject}`,
      htmlContent,
      textContent
    );

    if (emailResult.success) {
      console.log('Contact form email sent successfully:', emailResult.messageId);
    } else {
      console.error('Email sending failed:', emailResult.error);
    }

    // Log the contact form for debugging
    console.log('Contact form processed successfully:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form submission' },
      { status: 500 }
    );
  }
} 