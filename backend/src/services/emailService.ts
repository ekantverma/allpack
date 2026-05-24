import { transporter, emailConfig } from '../config/email.js';
import { generateContactFormEmail } from '../templates/contactFormTemplate.js';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  packagingNeeds: string;
}

export const emailService = {
  async sendEmail({ to, subject, html, text }: EmailOptions) {
    try {
      const info = await transporter.sendMail({
        from: `"${emailConfig.fromName}" <${emailConfig.fromEmail}>`,
        to,
        subject,
        text: text || html.replace(/<[^>]*>/g, ''), // Strip HTML if no text provided
        html,
      });

      console.log('Email sent successfully. Message ID:', info.messageId);
      return {
        success: true,
        messageId: info.messageId,
      };
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  },

  async sendWelcomeEmail(email: string, name: string) {
    const html = `
      <h1>Welcome!</h1>
      <p>Hi ${name},</p>
      <p>Thanks for joining us. We're excited to have you on board!</p>
      <br />
      <p>Best regards,<br />The Team</p>
    `;

    return this.sendEmail({
      to: email,
      subject: 'Welcome to Our Service',
      html,
    });
  },

  async sendContactConfirmation(email: string, name: string, message: string) {
    const html = `
      <h2>Thank You for Contacting Us</h2>
      <p>Hi ${name},</p>
      <p>We received your message:</p>
      <p><em>"${message}"</em></p>
      <p>Our team will get back to you soon.</p>
      <br />
      <p>Best regards,<br />Support Team</p>
    `;

    return this.sendEmail({
      to: email,
      subject: 'We Received Your Message',
      html,
    });
  },

  async sendNotification(email: string, title: string, content: string) {
    const html = `
      <h2>${title}</h2>
      <div>${content}</div>
      <br />
      <p>Best regards,<br />The Team</p>
    `;

    return this.sendEmail({
      to: email,
      subject: title,
      html,
    });
  },

  async sendContactFormEmail(formData: ContactFormData, adminEmail: string) {
    const html = generateContactFormEmail(formData);

    // Send to admin
    const adminResult = await this.sendEmail({
      to: adminEmail,
      subject: `🎯 New Contact Form Submission from ${formData.name}`,
      html,
    });

    // Optional: Send auto-reply confirmation to the user
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
          .container { max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px; }
          .content { background: white; padding: 30px; border-radius: 8px; }
          .header { color: #1a1a1a; border-bottom: 3px solid #1a1a1a; padding-bottom: 20px; margin-bottom: 20px; }
          .message { color: #555; line-height: 1.6; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #999; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="content">
            <div class="header">
              <h1>Thank You for Contacting Us!</h1>
            </div>
            <div class="message">
              <p>Hello ${formData.name},</p>
              <p>We have received your contact form submission and appreciate your interest in AllPak Packaging.</p>
              <p>Our team will review your packaging requirements and get back to you as soon as possible.</p>
              <p><strong>What you submitted:</strong></p>
              <ul>
                <li><strong>Company:</strong> ${formData.company}</li>
                <li><strong>Phone:</strong> ${formData.phone}</li>
              </ul>
              <p>If you have any urgent questions, feel free to reply to this email.</p>
              <br />
              <p>Best regards,<br /><strong>AllPak Packaging Team</strong></p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} AllPak Packaging. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    await this.sendEmail({
      to: formData.email,
      subject: '✅ We Received Your Contact Form - AllPak Packaging',
      html: confirmationHtml,
    });

    return {
      success: true,
      adminMessageId: adminResult.messageId,
      message: 'Contact form submitted successfully. Confirmation email sent to the user.',
    };
  },
};
