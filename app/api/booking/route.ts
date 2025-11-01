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

    // Log the booking for debugging
    console.log('Booking processed:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      numberOfPeople: formData.numberOfPeople,
      startDate: formData.startDate,
      endDate: formData.endDate,
      emailSent: emailResult.success,
      timestamp: new Date().toISOString()
    });

    if (emailResult.success) {
      console.log('Booking email sent successfully:', emailResult.messageId);
      return NextResponse.json({ 
        success: true, 
        message: 'Booking request submitted successfully. We will contact you shortly!' 
      });
    } else {
      console.error('Email sending failed:', emailResult.error);
      // Still return success to user, but log the error for admin
      // The booking data is still logged to console for manual processing
      return NextResponse.json({ 
        success: true, 
        message: 'Booking request received. We will contact you shortly!',
        warning: 'Email notification may have failed. Please check server logs.'
      }, { status: 200 });
    }
  } catch (error) {
    console.error('Error processing booking form:', error);
    return NextResponse.json(
      { error: 'Failed to process booking submission' },
      { status: 500 }
    );
  }
} 