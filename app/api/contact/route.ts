import { NextResponse } from 'next/server';
import { sendAdminNotification, formatFormDataToHtml, formatFormDataToText } from '@/lib/email';

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const formData = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    const emailData = {
      subject: `New Contact Form Submission: ${formData.subject}`,
      text: formatFormDataToText(formData),
      html: formatFormDataToHtml(formData),
    };

    await sendAdminNotification(emailData);

    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
} 