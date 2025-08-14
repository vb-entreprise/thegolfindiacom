import { NextResponse } from 'next/server';
import { sendAdminNotification, formatFormDataToHtml, formatFormDataToText } from '@/lib/email';

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const formData = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'numberOfPeople', 'startDate', 'endDate'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    const emailData = {
      subject: `New Golf Tour Booking Request from ${formData.name}`,
      text: formatFormDataToText({
        "Full Name": formData.name,
        "Email": formData.email,
        "Phone": formData.phone,
        "Number of People": formData.numberOfPeople,
        "Start Date": formData.startDate,
        "End Date": formData.endDate,
        "Special Requirements": formData.specialRequirements || "None",
      }),
      html: formatFormDataToHtml({
        "Full Name": formData.name,
        "Email": formData.email,
        "Phone": formData.phone,
        "Number of People": formData.numberOfPeople,
        "Start Date": formData.startDate,
        "End Date": formData.endDate,
        "Special Requirements": formData.specialRequirements || "None",
      }),
    };

    await sendAdminNotification(emailData);

    return NextResponse.json({ success: true, message: 'Booking request submitted successfully' });
  } catch (error) {
    console.error('Error processing booking form:', error);
    return NextResponse.json(
      { error: 'Failed to process booking submission' },
      { status: 500 }
    );
  }
} 