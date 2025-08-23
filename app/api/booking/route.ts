import { NextResponse } from 'next/server';

// Simple email formatting functions that don't require external dependencies
function formatFormDataToText(data: Record<string, any>): string {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const header = `The Golf India - New Booking Request\n`;
  const separator = '='.repeat(50) + '\n';
  const timestamp = `Received on ${currentDate}\n`;
  
  const formData = Object.entries(data)
    .filter(([key]) => key !== 'submitted')
    .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
    .join('\n');

  const footer = `\nThis is an automated message from The Golf India website.\n`;

  return `${header}${separator}${timestamp}${separator}${formData}${separator}${footer}`;
}

function formatFormDataToHtml(data: Record<string, any>): string {
  const rows = Object.entries(data)
    .filter(([key]) => key !== 'submitted')
    .map(([key, value]) => `
      <tr>
        <td style="padding: 12px 24px; border-bottom: 1px solid #eee; font-weight: 600; color: #0F4C3A; width: 140px;">
          ${key.charAt(0).toUpperCase() + key.slice(1)}
        </td>
        <td style="padding: 12px 24px; border-bottom: 1px solid #eee;">
          ${value}
        </td>
      </tr>
    `)
    .join('');

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 0; margin: 0; background-color: #f9fafb;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #0F4C3A; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">The Golf India</h1>
            <p style="color: #D4AF37; margin: 10px 0 0 0; font-size: 16px;">New Booking Request</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 20px; color: #666;">
              Received on ${currentDate}
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tbody>
                ${rows}
              </tbody>
            </table>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                This is an automated message from The Golf India website.
              </p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p style="margin: 0;">
              © ${new Date().getFullYear()} The Golf India. All rights reserved.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Simple email logging function
async function logBookingEmail(emailData: any) {
  console.log('=== BOOKING EMAIL LOG ===');
  console.log('Subject:', emailData.subject);
  console.log('Text Content:', emailData.text);
  console.log('HTML Content:', emailData.html);
  console.log('========================');
  
  // In production, you might want to store this in a database or send to a logging service
  return { success: true, messageId: 'logged' };
}

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

    // Log the booking email
    try {
      await logBookingEmail(emailData);
      console.log('Booking logged successfully');
    } catch (emailError) {
      console.error('Email logging error:', emailError);
      // Continue processing even if email logging fails
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