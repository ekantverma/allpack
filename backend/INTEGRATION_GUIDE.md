# Backend + Frontend Integration Guide

**Quick Guide to connect deployed backend with your frontend**

---

## 🔗 **Integration Steps**

### **Step 1: Backend URL Copy Karo**

Vercel deployment ke baad, ye URL copy karo:

```
https://allpack-packaging.vercel.app
```

### **Step 2: Frontend me Environment Variable Update Karo**

**File:** `frontend/.env.production`

```env
VITE_API_URL=https://allpack-packaging.vercel.app
```

**File:** `frontend/.env.development` (local testing)

```env
VITE_API_URL=http://localhost:5000
```

---

### **Step 3: Contact Form Component Update Karo**

Agar already banaya hai, to sirf `.env` file update karo. Agar nahi banaya to ye example use karo:

**Frontend:** `src/services/contactService.ts`

```typescript
import { ContactFormData } from '../types/contact';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const submitContactForm = async (formData: ContactFormData) => {
  try {
    const response = await fetch(`${API_URL}/api/email/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
```

---

### **Step 4: Contact Form Page Example**

**Frontend:** `src/components/ContactFormComponent.tsx`

```typescript
import { useState } from 'react';
import { submitContactForm } from '../services/contactService';

export const ContactFormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    packagingNeeds: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setErrors({});

    try {
      const response = await submitContactForm(formData);

      if (response.success) {
        setMessage('✅ Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          packagingNeeds: '',
        });

        // Reset message after 5 seconds
        setTimeout(() => setMessage(''), 5000);
      } else {
        if (response.errors) {
          const errorObj: any = {};
          response.errors.forEach((err: any) => {
            errorObj[err.field] = err.message;
          });
          setErrors(errorObj);
        }
        setMessage('❌ ' + response.message);
      }
    } catch (error) {
      setMessage('❌ Error submitting form. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      {message && (
        <div className={`p-4 rounded ${message.includes('✅') ? 'bg-green-100' : 'bg-red-100'}`}>
          {message}
        </div>
      )}

      {/* Name */}
      <div>
        <label className="block mb-2 font-medium">Full Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded p-2"
          disabled={loading}
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 font-medium">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded p-2"
          disabled={loading}
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block mb-2 font-medium">Phone *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded p-2"
          disabled={loading}
        />
        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* Company */}
      <div>
        <label className="block mb-2 font-medium">Company *</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full border rounded p-2"
          disabled={loading}
        />
        {errors.company && <p className="text-red-600 text-sm mt-1">{errors.company}</p>}
      </div>

      {/* Packaging Needs */}
      <div>
        <label className="block mb-2 font-medium">Packaging Needs *</label>
        <textarea
          name="packagingNeeds"
          value={formData.packagingNeeds}
          onChange={handleChange}
          className="w-full border rounded p-2"
          rows={5}
          disabled={loading}
        />
        {errors.packagingNeeds && <p className="text-red-600 text-sm mt-1">{errors.packagingNeeds}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white p-3 rounded font-medium disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};
```

---

## 🚀 **Testing**

### **Local Testing**
```bash
# Backend
cd backend
npm run dev

# Frontend (in another terminal)
cd frontend
npm run dev
```

Test on `http://localhost:5173`

### **Production Testing**

1. Deploy frontend to Vercel/Netlify
2. Update `VITE_API_URL` to production backend URL
3. Test contact form from production domain

---

## 🔄 **Merge with Frontend**

### **File Structure (after merge):**

```
allpack-packaging/
├── backend/
│   ├── src/
│   ├── package.json
│   ├── tsconfig.json
│   ├── vercel.json
│   └── ...
├── frontend/
│   ├── src/
│   ├── components/
│   ├── services/
│   │   └── contactService.ts  ✅ NEW
│   ├── package.json
│   ├── vite.config.ts
│   └── ...
├── .gitignore
└── README.md
```

### **Git Commands to Deploy**

```bash
# Add both backend and frontend
git add .

# Commit
git commit -m "feat: integrate backend email service with frontend contact form"

# Push
git push origin master
```

---

## 📧 **Email Flow**

```
Frontend Contact Form
        ↓
POST /api/email/contact
        ↓
Vercel Backend
        ↓
Nodemailer + Gmail SMTP
        ↓
Admin Email (ekantvermasolanki@gmail.com)
User Confirmation Email
```

---

## ✅ **Verification Checklist**

- ✅ Backend deployed on Vercel
- ✅ All environment variables set
- ✅ Frontend has `.env.production` with API URL
- ✅ Contact form component created/updated
- ✅ `contactService.ts` imports from correct backend URL
- ✅ Local testing works (localhost)
- ✅ Production testing works (live domain)
- ✅ Email received in both admin and user inbox

---

## 🆘 **Common Issues & Fixes**

### **Issue: CORS Error**

**Error:** `Access to XMLHttpRequest blocked by CORS policy`

**Fix:**
1. Check `CORS_ORIGIN` in Vercel environment variables
2. Should match your frontend domain
3. Redeploy backend after updating

### **Issue: 404 on /api/email/contact**

**Error:** `POST /api/email/contact 404`

**Fix:**
1. Check backend is deployed and running
2. Verify route exists: `backend/src/routes/index.ts`
3. Check vercel.json routes configuration

### **Issue: Email Not Sending**

**Error:** `Invalid login credentials`

**Fix:**
1. Generate new Gmail App Password
2. Update in Vercel environment variables
3. Redeploy backend

---

## 📚 **Reference Files**

- Backend API Docs: `backend/API_DOCUMENTATION.md`
- Frontend Integration: `backend/FRONTEND_INTEGRATION.md`
- Deployment Guide: `backend/DEPLOYMENT_GUIDE_VERCEL.md`

---

**Status:** ✅ Backend + Frontend Integrated and Ready!

Next step: Test the complete flow and optimize as needed.
