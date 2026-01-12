import nodemailer from 'nodemailer';

// Enhanced email sender that supports multiple email services
export async function sendEmail(subject: string, htmlContent: string, textContent: string) {
  const adminEmail = process.env.ADMIN_EMAIL || 'info@thegolfindia.com';
  
  // Get environment variables (server-side only - never use NEXT_PUBLIC_ for sensitive data)
  // In Vercel, add these in Project Settings > Environment Variables
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = process.env.SMTP_PORT || '587';
  const smtpSecure = process.env.SMTP_SECURE === 'true';
  
  // Try multiple email service configurations
  const emailConfigs = [
    // Gmail configuration (preferred)
    {
      name: 'Gmail',
      user: gmailUser,
      pass: gmailPass,
      config: {
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      }
    },
    // Custom SMTP configuration
    {
      name: 'Custom SMTP',
      user: smtpUser,
      pass: smtpPass,
      config: {
        host: smtpHost,
        port: parseInt(smtpPort),
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      }
    }
  ];

  // Find the first available configuration
  const activeConfig = emailConfigs.find(config => config.user && config.pass);

  if (!activeConfig) {
    console.error('=== EMAIL CONFIGURATION ERROR ===');
    console.error('No email credentials found in environment variables.');
    console.error('');
    console.error('For LOCAL development (.env.local):');
    console.error('  GMAIL_USER=your-email@gmail.com');
    console.error('  GMAIL_APP_PASSWORD=your-app-password');
    console.error('  ADMIN_EMAIL=info@thegolfindia.com');
    console.error('');
    console.error('For VERCEL deployment:');
    console.error('  1. Go to Vercel Dashboard > Your Project > Settings > Environment Variables');
    console.error('  2. Add GMAIL_USER, GMAIL_APP_PASSWORD, and ADMIN_EMAIL');
    console.error('  3. Make sure to select the correct environment (Production, Preview, Development)');
    console.error('  4. Redeploy your application after adding variables');
    console.error('');
    console.error('Alternative: Use SMTP_USER, SMTP_PASS, SMTP_HOST, SMTP_PORT for custom SMTP');
    console.error('');
    console.error('Email details that would have been sent:');
    console.error('Subject:', subject);
    console.error('To:', adminEmail);
    console.error('Text Content:', textContent.substring(0, 200) + '...');
    console.error('===========================================================');
    return { 
      success: false, 
      error: 'Email service not configured. Check server logs for setup instructions.',
      messageId: null 
    };
  }

  try {
    // Create transporter with the active configuration
    const transporter = nodemailer.createTransport(activeConfig.config);

    // Verify connection configuration
    await transporter.verify();
    console.log(`Email service (${activeConfig.name}) connection verified successfully`);

    // Email options
    const mailOptions = {
      from: `"The Golf India" <${activeConfig.user}>`,
      to: adminEmail,
      subject: subject,
      text: textContent,
      html: htmlContent,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully via ${activeConfig.name}:`, info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`Error sending email via ${activeConfig.name}:`, error);
    
    // Log the email content for debugging
    console.log('=== EMAIL CONTENT (Sending failed) ===');
    console.log('Service:', activeConfig.name);
    console.log('Subject:', subject);
    console.log('To:', adminEmail);
    console.log('Text Content:', textContent);
    console.log('HTML Content:', htmlContent);
    console.log('Error:', error instanceof Error ? error.message : String(error));
    console.log('=====================================');
    
    return { success: false, error: error instanceof Error ? error.message : String(error) };
  }
}

// Helper function to create email content
export function createEmailContent(formType: string, data: Record<string, any>) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

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

  const htmlContent = `
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
            <p style="color: #D4AF37; margin: 10px 0 0 0; font-size: 16px;">New ${formType}</p>
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

  const textContent = `The Golf India - New ${formType}

==================================================
Received on ${currentDate}
==================================================

${Object.entries(data)
  .filter(([key]) => key !== 'submitted')
  .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
  .join('\n')}

==================================================

This is an automated message from The Golf India website.`;

  return { htmlContent, textContent };
}
