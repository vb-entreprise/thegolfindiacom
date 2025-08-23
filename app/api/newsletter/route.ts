import { NextResponse } from 'next/server';
import { sendEmail, createEmailContent } from '@/lib/email-sender';

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const formData = await request.json();
    console.log('Received newsletter subscription:', formData);

    // Validate required fields
    if (!formData.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
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
      "Email": formData.email,
    };

    // Create email content
    const { htmlContent, textContent } = createEmailContent("Newsletter Subscription", emailData);

    // Send email
    const emailResult = await sendEmail(
      `New Newsletter Subscription - ${formData.email}`,
      htmlContent,
      textContent
    );

    if (emailResult.success) {
      console.log('Newsletter subscription email sent successfully:', emailResult.messageId);
    } else {
      console.error('Email sending failed:', emailResult.error);
    }

    // Log the subscription for debugging
    console.log('Newsletter subscription processed successfully:', {
      email: formData.email,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Newsletter subscription successful' 
    });
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
} 