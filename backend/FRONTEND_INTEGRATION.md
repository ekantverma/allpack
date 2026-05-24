# Frontend Integration Guide - Contact Form Email System

This guide explains how to integrate the AllPak Packaging contact form with the backend email service.

---

## 📋 Overview

Your frontend contact form should send data to the backend endpoint:
```
POST http://localhost:5000/api/email/contact
```

The backend will:
1. Validate all form fields
2. Generate a professional HTML email
3. Send to your admin email (ekantvermasolanki@gmail.com)
4. Send a confirmation email to the user

---

## 🚀 Quick Integration (React + TypeScript)

### Step 1: Create a Contact Service

Create a file: `src/services/contactService.ts`

```typescript
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  packagingNeeds: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: any;
  errors?: Array<{ field: string; message: string }>;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const submitContactForm = async (
  formData: ContactFormData
): Promise<ContactResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/email/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || 'Failed to submit form',
        errors: data.errors,
      };
    }

    return {
      success: true,
      message: data.message,
      data: data.data,
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection.',
    };
  }
};
```

### Step 2: Create a Contact Form Component

Create a file: `src/components/ContactForm.tsx`

```typescript
import { useState } from 'react';
import { submitContactForm, ContactFormData } from '../services/contactService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface FormErrors {
  [key: string]: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    packagingNeeds: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSubmitError('');

    const response = await submitContactForm(formData);

    if (response.success) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        packagingNeeds: '',
      });
      // Reset form after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      if (response.errors) {
        // Convert array of errors to object format
        const errorObj: FormErrors = {};
        response.errors.forEach((err) => {
          errorObj[err.field] = err.message;
        });
        setErrors(errorObj);
      } else {
        setSubmitError(response.message);
      }
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6">
        <h3 className="mb-2 text-xl font-semibold text-green-900">
          ✅ Thank You!
        </h3>
        <p className="text-green-800">
          Your contact form has been submitted successfully. We'll review your
          packaging requirements and get back to you soon.
        </p>
        <p className="mt-2 text-sm text-green-700">
          A confirmation email has been sent to <strong>{formData.email}</strong>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitError && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-red-800">{submitError}</p>
        </div>
      )}

      {/* Full Name */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Full Name *
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          disabled={loading}
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email Address *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          disabled={loading}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone Number *
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
          disabled={loading}
          className={errors.phone ? 'border-red-500' : ''}
        />
        {errors.phone && (
          <p className="text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      {/* Company */}
      <div className="space-y-2">
        <label htmlFor="company" className="block text-sm font-medium">
          Company Name *
        </label>
        <Input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder="ABC Corporation"
          disabled={loading}
          className={errors.company ? 'border-red-500' : ''}
        />
        {errors.company && (
          <p className="text-sm text-red-600">{errors.company}</p>
        )}
      </div>

      {/* Packaging Needs */}
      <div className="space-y-2">
        <label htmlFor="packagingNeeds" className="block text-sm font-medium">
          Tell Us About Your Packaging Needs *
        </label>
        <Textarea
          id="packagingNeeds"
          name="packagingNeeds"
          value={formData.packagingNeeds}
          onChange={handleChange}
          placeholder="Describe your packaging requirements, product type, quantity, materials, etc..."
          rows={5}
          disabled={loading}
          className={errors.packagingNeeds ? 'border-red-500' : ''}
        />
        {errors.packagingNeeds && (
          <p className="text-sm text-red-600">{errors.packagingNeeds}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-xs text-gray-500">
        * All fields are required. We'll respond to your inquiry within 24 hours.
      </p>
    </form>
  );
};
```

### Step 3: Environment Variables

Create or update `frontend/.env.local`:

```env
VITE_API_URL=http://localhost:5000
```

For production, update to your production server:
```env
VITE_API_URL=https://api.yoursite.com
```

---

## 📦 Alternative: Using a Custom Hook

If you prefer a more reusable approach, create a custom hook:

Create `src/hooks/useContactForm.ts`:

```typescript
import { useState } from 'react';
import { submitContactForm, ContactFormData, ContactResponse } from '../services/contactService';

interface UseContactFormOptions {
  onSuccess?: () => void;
  onError?: (message: string) => void;
}

export const useContactForm = (options?: UseContactFormOptions) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    packagingNeeds: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ContactResponse | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const submit = async () => {
    setLoading(true);
    const res = await submitContactForm(formData);
    setResponse(res);

    if (res.success) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        packagingNeeds: '',
      });
      options?.onSuccess?.();
    } else {
      if (res.errors) {
        const errorObj: { [key: string]: string } = {};
        res.errors.forEach((err) => {
          errorObj[err.field] = err.message;
        });
        setErrors(errorObj);
      }
      options?.onError?.(res.message);
    }

    setLoading(false);
  };

  const reset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      packagingNeeds: '',
    });
    setErrors({});
    setResponse(null);
  };

  return {
    formData,
    errors,
    loading,
    response,
    handleChange,
    submit,
    reset,
  };
};
```

---

## 🧪 Testing the Integration

### 1. Start Both Servers

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
npm run dev
```

### 2. Test with Postman First

Before testing in the frontend, verify the backend works:

```bash
POST http://localhost:5000/api/email/contact

{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "+1 (555) 123-4567",
  "company": "Test Company",
  "packagingNeeds": "We need premium custom packaging solutions with sustainable materials"
}
```

### 3. Fill Out Form in Frontend

- Navigate to your contact form
- Fill in all fields correctly
- Click submit
- Check browser console for any errors
- Verify emails are received (check both admin and user emails)

---

## 🔍 Debugging

### Check Browser Console
```javascript
// Test API directly in console
fetch('http://localhost:5000/api/email/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test',
    email: 'test@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Test',
    packagingNeeds: 'Testing the contact form with at least 10 characters'
  })
}).then(r => r.json()).then(console.log)
```

### Check Backend Logs
Watch the terminal running `npm run dev` for:
- Email connection status
- Validation errors
- Email sending logs

### Common Issues

**CORS Error:**
- Backend: Update `CORS_ORIGIN` in `.env` to match frontend URL
- Frontend: Ensure `VITE_API_URL` matches backend URL

**Form not submitting:**
- Check console for validation errors
- Verify all required fields are filled
- Check field length constraints

**Email not received:**
- Check spam/junk folder
- Verify email addresses in form
- Check backend logs for sending errors

---

## 🚀 Production Deployment

### Backend Deployment (Vercel, Heroku, AWS)

1. Set environment variables on the hosting platform:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
   FROM_EMAIL=noreply@yoursite.com
   ADMIN_EMAIL=ekantvermasolanki@gmail.com
   CORS_ORIGIN=https://yourfrontend.com
   ```

2. Deploy backend
3. Get production URL (e.g., `https://api.yoursite.com`)

### Frontend Deployment

1. Update `.env.production`:
   ```env
   VITE_API_URL=https://api.yoursite.com
   ```

2. Build and deploy:
   ```bash
   npm run build
   ```

---

## 📊 API Response Examples

### Success Response
```json
{
  "success": true,
  "message": "Contact form submitted successfully. A confirmation email has been sent to your inbox.",
  "data": {
    "success": true,
    "adminMessageId": "<message-id@gmail.com>",
    "message": "Contact form submitted successfully. Confirmation email sent to the user."
  }
}
```

### Validation Error Response
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

---

## 📞 Support & Resources

- Backend API Documentation: See `backend/API_DOCUMENTATION.md`
- Backend Setup: See `backend/README.md`
- Frontend component examples in this guide

---

**Last Updated:** May 22, 2026  
**Status:** ✅ Ready for Integration
