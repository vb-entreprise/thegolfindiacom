import { NextResponse } from 'next/server';
import { sendAdminNotification, formatFormDataToHtml, formatFormDataToText } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const emailData = {
      subject: `New Newsletter Subscription`,
      text: `New subscriber: ${formData.email}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2 style="color: #0F4C3A;">New Newsletter Subscription</h2>
          <p>A new user has subscribed to the newsletter:</p>
          <p style="font-weight: bold;">${formData.email}</p>
          <p style="margin-top: 20px; color: #666;">
            This is an automated message from The Golf India website.
          </p>
        </div>
      `,
    };

    await sendAdminNotification(emailData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
} 