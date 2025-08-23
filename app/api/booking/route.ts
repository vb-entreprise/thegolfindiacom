import { NextResponse } from 'next/server';
import { sendEmail, createEmailContent } from '@/lib/email-sender';

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const formData = await request.json();
    console.log('Received booking data:', formData);

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'numberOfPeople', 'startDate', 'endDate'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        console.log(`Missing required field: ${field}`);
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Additional validation
    if (formData.numberOfPeople && parseInt(formData.numberOfPeople) < 1) {
      return NextResponse.json(
        { error: 'Number of people must be at least 1' },
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
      "Full Name": formData.name,
      "Email": formData.email,
      "Phone": formData.phone,
      "Number of People": formData.numberOfPeople,
      "Start Date": formData.startDate,
      "End Date": formData.endDate,
      "Special Requirements": formData.specialRequirements || "None",
    };

    // Create email content
    const { htmlContent, textContent } = createEmailContent("Booking Request", emailData);

    // Send email
    const emailResult = await sendEmail(
      `New Golf Tour Booking Request from ${formData.name}`,
      htmlContent,
      textContent
    );

    if (emailResult.success) {
      console.log('Booking email sent successfully:', emailResult.messageId);
    } else {
      console.error('Email sending failed:', emailResult.error);
    }

    // Log the booking for debugging
    console.log('Booking processed successfully:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      numberOfPeople: formData.numberOfPeople,
      startDate: formData.startDate,
      endDate: formData.endDate,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Booking request submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing booking form:', error);
    return NextResponse.json(
      { error: 'Failed to process booking submission' },
      { status: 500 }
    );
  }
} 