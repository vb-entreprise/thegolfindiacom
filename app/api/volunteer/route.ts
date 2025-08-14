import { NextResponse } from 'next/server';
import { sendAdminNotification, formatFormDataToHtml, formatFormDataToText } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const emailData = {
      subject: `New Volunteer Application: ${formData.name} - ${formData.interests}`,
      text: formatFormDataToText(formData),
      html: formatFormDataToHtml(formData),
    };

    await sendAdminNotification(emailData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing volunteer form:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
} 