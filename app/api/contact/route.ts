import { NextResponse } from 'next/server';
import { formatFormDataToHtml, formatFormDataToText } from '@/lib/email';
import * as nodemailer from 'nodemailer';

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

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'thegolfindia@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || 'your-app-password-here'
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER || 'thegolfindia@gmail.com',
      to: process.env.ADMIN_EMAIL || 'thegolfindia@gmail.com',
      subject: `New Contact Form Submission: ${formData.subject}`,
      text: formatFormDataToText(formData),
      html: formatFormDataToHtml(formData)
    };

    try {
      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      console.log('Form Data:', JSON.stringify(formData, null, 2));
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      console.log('Form Data (email failed):', JSON.stringify(formData, null, 2));
    }

    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
} 