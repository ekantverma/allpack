interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  packagingNeeds: string;
}

export const generateContactFormEmail = (data: ContactFormData): string => {
  const { name, email, phone, company, packagingNeeds } = data;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f5f5f5;
        }
        
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        /* Header - Dark Branding */
        .header {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: #fff;
          padding: 40px 30px;
          text-align: center;
        }
        
        .header h1 {
          font-size: 28px;
          margin-bottom: 8px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        
        .header .tagline {
          font-size: 14px;
          opacity: 0.9;
          font-weight: 300;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        
        /* Main Content */
        .content {
          padding: 40px 30px;
        }
        
        .greeting {
          font-size: 16px;
          margin-bottom: 30px;
          color: #1a1a1a;
          line-height: 1.8;
        }
        
        .greeting strong {
          color: #2d2d2d;
        }
        
        /* Form Details Card */
        .details-card {
          background: #f9f9f9;
          border-left: 4px solid #1a1a1a;
          border-radius: 4px;
          padding: 20px;
          margin: 20px 0;
        }
        
        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 12px 0;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .detail-row:last-child {
          border-bottom: none;
        }
        
        .detail-label {
          font-weight: 600;
          color: #1a1a1a;
          min-width: 140px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .detail-value {
          color: #555;
          flex: 1;
          word-break: break-word;
          text-align: right;
          padding-left: 20px;
          font-size: 14px;
        }
        
        /* Message Section */
        .message-section {
          margin-top: 25px;
          background: #f0f0f0;
          border-radius: 6px;
          padding: 20px;
        }
        
        .message-label {
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 12px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .message-content {
          background: #fff;
          padding: 15px;
          border-radius: 4px;
          color: #555;
          line-height: 1.8;
          word-break: break-word;
          font-size: 14px;
        }
        
        /* Action Section */
        .action-section {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 2px solid #f0f0f0;
          text-align: center;
        }
        
        .action-text {
          color: #666;
          font-size: 14px;
          margin-bottom: 15px;
        }
        
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: #fff;
          padding: 12px 30px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
        }
        
        .cta-button:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }
        
        /* Footer - Dark Branding */
        .footer {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: #fff;
          text-align: center;
          padding: 25px 30px;
          font-size: 12px;
        }
        
        .footer p {
          margin: 5px 0;
          opacity: 0.8;
        }
        
        .footer .company-name {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
          letter-spacing: 0.5px;
        }
        
        .divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
          margin: 10px 0;
        }
        
        /* Responsive */
        @media (max-width: 600px) {
          .container {
            border-radius: 0;
          }
          
          .header {
            padding: 30px 20px;
          }
          
          .header h1 {
            font-size: 24px;
          }
          
          .content {
            padding: 25px 20px;
          }
          
          .detail-row {
            flex-direction: column;
            padding: 10px 0;
          }
          
          .detail-label {
            margin-bottom: 5px;
            text-align: left;
          }
          
          .detail-value {
            text-align: left;
            padding-left: 0;
          }
          
          .footer {
            padding: 20px 15px;
            font-size: 11px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header -->
        <div class="header">
          <h1>📧 New Contact Form Submission</h1>
          <p class="tagline">AllPak Packaging</p>
        </div>
        
        <!-- Main Content -->
        <div class="content">
          <div class="greeting">
            <p>Hello,</p>
            <p>You have received a new contact form submission from your website. Here are the details:</p>
          </div>
          
          <!-- Details Card -->
          <div class="details-card">
            <div class="detail-row">
              <span class="detail-label">Full Name</span>
              <span class="detail-value">${escapeHtml(name)}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Email Address</span>
              <span class="detail-value">
                <a href="mailto:${escapeHtml(email)}" style="color: #1a1a1a; text-decoration: none; font-weight: 500;">
                  ${escapeHtml(email)}
                </a>
              </span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Phone Number</span>
              <span class="detail-value">
                <a href="tel:${escapeHtml(phone)}" style="color: #1a1a1a; text-decoration: none; font-weight: 500;">
                  ${escapeHtml(phone)}
                </a>
              </span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Company Name</span>
              <span class="detail-value">${escapeHtml(company)}</span>
            </div>
          </div>
          
          <!-- Message Section -->
          <div class="message-section">
            <div class="message-label">📋 Packaging Requirements</div>
            <div class="message-content">
              ${escapeHtml(packagingNeeds).replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <!-- Action Section -->
          <div class="action-section">
            <p class="action-text">Ready to respond? Click the button below to reply directly:</p>
            <a href="mailto:${escapeHtml(email)}?subject=Re:%20Your%20Contact%20Form%20Submission" class="cta-button">
              Reply to ${escapeHtml(name.split(' ')[0])}
            </a>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <div class="company-name">Allpak Packaging</div>
          <p>Professional Packaging Solutions</p>
          <div class="divider"></div>
          <p>This email was sent to you because someone filled out your contact form.</p>
          <p style="margin-top: 8px; opacity: 0.7;">© ${new Date().getFullYear()} AllPak Packaging. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Helper function to escape HTML special characters
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
