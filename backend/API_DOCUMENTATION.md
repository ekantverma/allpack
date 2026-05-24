# Email API Documentation

## Base URL
```
http://localhost:5000/api/email
```

---

## Endpoints

### 1. Health Check
**Endpoint:** `GET /health`

**Description:** Check if the server is running

**Response (200):**
```json
{
  "success": true,
  "status": "Server is running",
  "timestamp": "2026-05-22T10:30:00.000Z"
}
```

---

### 2. Send Custom Email
**Endpoint:** `POST /api/email/send`

**Description:** Send a custom email with your own HTML

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "to": "recipient@example.com",
  "subject": "Test Email",
  "html": "<h1>Hello</h1><p>This is a test email.</p>"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Test email sent successfully",
  "data": {
    "success": true,
    "messageId": "<some-id@gmail.com>"
  }
}
```

**Error (400):**
```json
{
  "success": false,
  "message": "Required fields: to, subject, html"
}
```

---

### 3. Send Welcome Email
**Endpoint:** `POST /api/email/welcome`

**Description:** Send a welcome email to a new user

**Request Body:**
```json
{
  "email": "user@example.com",
  "name": "John Doe"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Welcome email sent successfully",
  "data": {
    "success": true,
    "messageId": "<some-id@gmail.com>"
  }
}
```

---

### 4. Send Contact Confirmation
**Endpoint:** `POST /api/email/contact-confirmation`

**Description:** Send a contact confirmation email

**Request Body:**
```json
{
  "email": "user@example.com",
  "name": "Jane Smith",
  "message": "I'd like more information about your services"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Contact confirmation email sent",
  "data": {
    "success": true,
    "messageId": "<some-id@gmail.com>"
  }
}
```

---

### 5. Send Notification Email
**Endpoint:** `POST /api/email/notification`

**Description:** Send a generic notification email

**Request Body:**
```json
{
  "email": "user@example.com",
  "title": "Order Shipped!",
  "content": "<p>Your order has been shipped.</p>"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Notification email sent successfully",
  "data": {
    "success": true,
    "messageId": "<some-id@gmail.com>"
  }
}
```

---

### 6. Contact Form Submission ⭐ (Main Endpoint)
**Endpoint:** `POST /api/email/contact`

**Description:** Handle professional contact form submissions with automatic HTML email generation and sending to admin email, plus auto-reply to the user.

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 123-4567",
  "company": "ABC Corporation",
  "packagingNeeds": "We need custom packaging solutions for our fragile electronics. Looking for eco-friendly options with premium presentation."
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Contact form submitted successfully. A confirmation email has been sent to your inbox.",
  "data": {
    "success": true,
    "adminMessageId": "<some-id@gmail.com>",
    "message": "Contact form submitted successfully. Confirmation email sent to the user."
  }
}
```

**Validation Error (400):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    },
    {
      "field": "packagingNeeds",
      "message": "Please provide at least 10 characters describing your packaging needs"
    }
  ]
}
```

**Field Validation Rules:**

| Field | Min Length | Max Length | Required | Rules |
|-------|-----------|-----------|----------|-------|
| name | 2 | 100 | Yes | String |
| email | - | - | Yes | Valid email format |
| phone | 7 | 20 | Yes | Numbers, spaces, dashes, +, (, ) |
| company | 2 | 100 | Yes | String |
| packagingNeeds | 10 | 5000 | Yes | String |

---

## Email Features

### Admin Notification Email
When a contact form is submitted, the admin receives a professional HTML email containing:
- Formatted header with AllPak Packaging branding
- All form fields in a clean table layout
- The packaging requirements in a highlighted section
- One-click reply button
- Dark themed footer with company information
- Fully responsive design (mobile-friendly)

### User Confirmation Email
The user automatically receives a confirmation email:
- Thank you message
- Summary of their submission
- Assurance that the team will review their request
- Professional AllPak Packaging branding

---

## Error Handling

### Common Error Responses

**Invalid Email Format (400):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

**Missing Required Fields (400):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "name",
      "message": "Full name is required and must be a string"
    }
  ]
}
```

**Email Service Error (500):**
```json
{
  "success": false,
  "error": "Internal server error"
}
```

---

## Testing with Postman

### Setup Collection
1. Open Postman
2. Create a new collection: "AllPak Email API"
3. Add requests for each endpoint below

### Test Request: Contact Form
```
POST http://localhost:5000/api/email/contact

Headers:
Content-Type: application/json

Body (raw JSON):
{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "+1 (555) 123-4567",
  "company": "Test Company",
  "packagingNeeds": "We need premium custom packaging solutions for our products with sustainable materials"
}
```

---

## Environment Variables

Ensure your `.env` file contains:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
FROM_EMAIL=noreply@yoursite.com
FROM_NAME=AllPak Packaging
ADMIN_EMAIL=ekantvermasolanki@gmail.com
CORS_ORIGIN=http://localhost:5173
```

---

## Example Frontend Integration

### React/TypeScript Example
```typescript
const submitContactForm = async (formData: {
  name: string;
  email: string;
  phone: string;
  company: string;
  packagingNeeds: string;
}) => {
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
      console.log('✅ Contact form submitted successfully');
      alert('Thank you! We will be in touch soon.');
    } else {
      console.error('❌ Submission failed:', result.errors);
      // Display validation errors to user
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

---

## Response Status Codes

| Status | Meaning |
|--------|---------|
| 200 | Success |
| 400 | Bad request (validation error) |
| 500 | Server error |

---

## Rate Limiting Recommendations

For production, consider implementing rate limiting:
- 10 contact form submissions per IP per hour
- Use `express-rate-limit` package
- Prevent spam and abuse

---

## Support & Troubleshooting

**Email not sending?**
- Check `.env` file for correct Gmail credentials
- Verify Gmail App Password (not regular password)
- Ensure 2FA is enabled on Google account
- Check email service logs in console

**Validation errors?**
- Review field validation rules in the table above
- Ensure all required fields are provided
- Check field length constraints

**CORS errors?**
- Update `CORS_ORIGIN` in `.env` to match your frontend URL
- Restart the server after changing environment variables

---

Last Updated: May 22, 2026
API Version: 1.0.0
