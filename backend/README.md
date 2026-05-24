# Email Service Backend Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Gmail
1. Create a `.env` file by copying `.env.example`:
   ```bash
   copy .env.example .env
   ```

2. Generate a Gmail App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer" (or your device)
   - Google will generate a 16-character password
   - Copy it to your `.env` file as `GMAIL_APP_PASSWORD`

3. Update your email in `.env`:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
   FROM_EMAIL=noreply@yoursite.com
   FROM_NAME=AllPak Packaging
   ADMIN_EMAIL=ekantvermasolanki@gmail.com
   CORS_ORIGIN=http://localhost:5173
   ```

### 3. Run the Server
```bash
npm run dev
```

You should see:
```
========================================
✅ Email Service Connected Successfully
📧 Gmail: your-email@gmail.com
========================================
🚀 Server running on http://localhost:5000
```

---

## 📧 API Endpoints

### Health Check
```bash
GET /health
```

### ⭐ Professional Contact Form (MAIN)
**The main endpoint for handling contact form submissions with professional HTML email**

```bash
POST /api/email/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 123-4567",
  "company": "ABC Corporation",
  "packagingNeeds": "We need custom packaging solutions for our fragile electronics with eco-friendly options."
}
```

**Features:**
- ✅ Professional HTML email template with dark branding
- ✅ Responsive design (mobile-friendly)
- ✅ Automatic admin notification to your Gmail inbox
- ✅ Automatic confirmation email to the user
- ✅ Full field validation
- ✅ Clean table-based layout
- ✅ One-click reply functionality

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully. A confirmation email has been sent to your inbox.",
  "data": {
    "success": true,
    "adminMessageId": "<id@gmail.com>",
    "message": "Contact form submitted successfully. Confirmation email sent to the user."
  }
}
```

**Validation Rules:**
- Full Name: 2-100 characters, required
- Email: Valid email format, required
- Phone: 7-20 characters (numbers, spaces, -, +, (, )), required
- Company: 2-100 characters, required
- Packaging Needs: 10-5000 characters, required

---

### Send Custom Email
```bash
POST /api/email/send
Content-Type: application/json

{
  "to": "recipient@example.com",
  "subject": "Test Email",
  "html": "<h1>Hello</h1><p>This is a test email.</p>"
}
```

### Send Welcome Email
```bash
POST /api/email/welcome
{
  "email": "user@example.com",
  "name": "John Doe"
}
```

### Send Contact Confirmation
```bash
POST /api/email/contact-confirmation
{
  "email": "user@example.com",
  "name": "John Doe",
  "message": "I'd like more information about your services"
}
```

### Send Notification
```bash
POST /api/email/notification
{
  "email": "user@example.com",
  "title": "Order Confirmation",
  "content": "<p>Your order #12345 has been confirmed</p>"
}
```

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── email.ts                    # Nodemailer configuration
│   ├── services/
│   │   └── emailService.ts            # Email sending logic
│   ├── routes/
│   │   ├── email.ts                   # Email controllers/handlers
│   │   └── index.ts                   # Route definitions
│   ├── middleware/
│   │   └── errorHandler.ts            # Error handling middleware
│   ├── templates/
│   │   └── contactFormTemplate.ts     # Professional HTML email template
│   ├── lib/
│   │   └── validation.ts              # Form validation
│   └── server.ts                      # Express app setup
├── package.json
├── tsconfig.json
├── .env.example                        # Environment variables template
├── README.md                           # This file
└── API_DOCUMENTATION.md                # Detailed API documentation
```

---

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload (uses tsx)
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run compiled server
- `npm run typecheck` - Check TypeScript types without emitting files

---

## 💻 Testing with Postman

### Quick Test: Contact Form
1. Open Postman
2. Create a new POST request
3. URL: `http://localhost:5000/api/email/contact`
4. Headers: `Content-Type: application/json`
5. Body (JSON):
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "+1 (555) 123-4567",
  "company": "Test Company",
  "packagingNeeds": "We need premium custom packaging solutions for our products with sustainable and eco-friendly materials"
}
```
6. Click Send

**Expected Response:**
- Admin email sent to `ekantvermasolanki@gmail.com` with professional HTML
- Confirmation email sent to user with thank you message
- JSON response with success status

---

## 📋 Environment Variables

Create a `.env` file with these variables:

```env
# Server
PORT=5000
NODE_ENV=development

# Gmail Credentials (App Password)
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx

# Email Configuration
FROM_EMAIL=noreply@yoursite.com
FROM_NAME=AllPak Packaging

# Admin Email for Contact Forms
ADMIN_EMAIL=ekantvermasolanki@gmail.com

# Frontend URL (CORS)
CORS_ORIGIN=http://localhost:5173
```

---

## 🎨 Email Template Features

The contact form email includes:
- **Dark Header** with AllPak Packaging branding
- **Formatted Details** in a clean, professional table layout
- **Packaging Requirements** in a highlighted message section
- **Call-to-Action** button for quick reply
- **Dark Footer** with company information and timestamp
- **Fully Responsive** design that looks great on mobile and desktop
- **HTML Security** with proper escaping for all user inputs

---

## 🔒 Security Features

- ✅ Input validation on all fields
- ✅ HTML entity escaping to prevent XSS attacks
- ✅ CORS configured for frontend origin
- ✅ Environment variables for sensitive data
- ✅ TypeScript for type safety
- ✅ Error handling middleware

---

## 🚨 Troubleshooting

### "Gmail credentials not configured"
- Ensure `.env` file exists in the `backend` directory
- Check that `GMAIL_USER` and `GMAIL_APP_PASSWORD` are set correctly

### "Invalid login credentials"
- Make sure you're using an **App Password**, not your Google account password
- Verify the password is copied correctly (watch for spaces)
- Enable 2-Factor Authentication on your Google account first
- Generate a new App Password: https://myaccount.google.com/apppasswords

### "Less secure app access" error
- You must use an App Password from https://myaccount.google.com/apppasswords
- Regular account passwords no longer work with nodemailer

### "CORS error" from frontend
- Update `CORS_ORIGIN` in `.env` to match your frontend URL
- Restart the server after changing environment variables
- Example: `CORS_ORIGIN=http://localhost:5173` for Vite frontend

### Email not appearing in inbox
- Check spam/junk folder
- Verify email address is correct in request body
- Check server logs for errors
- Ensure `FROM_EMAIL` is a valid email format

---

## 📚 Frontend Integration Example

### React with TypeScript
```typescript
import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  packagingNeeds: string;
}

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any[]>([]);

  const handleSubmit = async (formData: ContactFormData) => {
    setLoading(true);
    setErrors([]);

    try {
      const response = await fetch('http://localhost:5000/api/email/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert('✅ Contact form submitted successfully!');
        // Reset form here
      } else {
        setErrors(result.errors || []);
        console.error('Submission errors:', result.errors);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors([{ message: 'Network error. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Your form JSX here */}
      {errors.map((error) => (
        <div key={error.field} style={{ color: 'red' }}>
          {error.field}: {error.message}
        </div>
      ))}
    </div>
  );
};
```

---

## 📖 Full API Documentation

For detailed API documentation including all endpoints, error codes, and examples:

See [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)

---

## 🎯 Next Steps

1. ✅ Backend setup complete
2. 🔗 Connect frontend to `/api/email/contact` endpoint
3. 🎨 Test the professional email template
4. 📊 Monitor email delivery and responses
5. 🔐 Add rate limiting for production
6. 📝 Implement email logging/history
7. 🚀 Deploy to production server

---

## 📝 Notes

- All timestamps in emails use the server's local timezone
- Admin emails are sent to the address specified in `ADMIN_EMAIL` env var
- User confirmation emails are sent to the email in the form
- The HTML email template is fully responsive and works on all devices
- All user inputs are validated and sanitized

---

## 📞 Support

For issues or questions:
1. Check the [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)
2. Review error messages in the response
3. Check server logs in the terminal
4. Verify `.env` configuration

---

**Last Updated:** May 22, 2026  
**Version:** 1.0.0  
**Status:** ✅ Ready for Production
