import nodemailer from 'nodemailer';
import { siteConfig } from './constants';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'thegolfindia@gmail.com';

type EmailData = {
  subject: string;
  text: string;
  html: string;
};

export async function sendAdminNotification(emailData: EmailData) {
  // If SMTP credentials are not configured, log the email data instead
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('=== EMAIL NOTIFICATION (SMTP not configured) ===');
    console.log('Subject:', emailData.subject);
    console.log('To:', ADMIN_EMAIL);
    console.log('Text Content:', emailData.text);
    console.log('HTML Content:', emailData.html);
    console.log('===============================================');
    return { success: true, messageId: 'console-log' };
  }

  const msg = {
    from: process.env.FROM_EMAIL || `"${siteConfig.name}" <thegolfindia@gmail.com>`,
    to: ADMIN_EMAIL,
    subject: emailData.subject,
    text: emailData.text,
    html: emailData.html,
  };

  try {
    const info = await transporter.sendMail(msg);
    console.log('Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Helper function to format form data into HTML
export function formatFormDataToHtml(data: Record<string, any>): string {
  const rows = Object.entries(data)
    .filter(([key]) => key !== 'submitted') // Exclude the submitted flag
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
          <!-- Header -->
          <div style="background-color: #0F4C3A; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">${siteConfig.name}</h1>
            <p style="color: #D4AF37; margin: 10px 0 0 0; font-size: 16px;">New Contact Form Submission</p>
          </div>
          
          <!-- Content -->
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
                This is an automated message from the ${siteConfig.name} website.
              </p>
              <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">
                For any issues, please contact our technical team.
              </p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p style="margin: 0;">
              © ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.
            </p>
            <p style="margin: 5px 0 0 0;">
              ${siteConfig.contact.website}
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Helper function to format form data into plain text
export function formatFormDataToText(data: Record<string, any>): string {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const header = `${siteConfig.name} - New Contact Form Submission\n`;
  const separator = '='.repeat(50) + '\n';
  const timestamp = `Received on ${currentDate}\n`;
  
  const formData = Object.entries(data)
    .filter(([key]) => key !== 'submitted')
    .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
    .join('\n');

  const footer = `\nThis is an automated message from the ${siteConfig.name} website.\n`;

  return `${header}${separator}${timestamp}${separator}${formData}${separator}${footer}`;
} 