# Vercel par Backend Deploy Karne ka Guide

**Language:** Hindi/Urdu + English  
**Platform:** Vercel (Free)  
**Estimated Time:** 10-15 minutes

---

## 📋 **Requirements**

- ✅ GitHub account with `allpack-packaging` repository
- ✅ Backend code pushed to GitHub (master branch)
- ✅ Vercel account (free)
- ✅ Gmail App Password configured locally
- ✅ `.env.example` in backend folder

---

## 🚀 **Step-by-Step Deployment Process**

### **Step 1: Code Ko GitHub par Push Karo**

Sabse pehle apka backend code GitHub par ho:

```bash
cd d:\allpack

# Git initialize karo (agar pehle se nahi hai)
git init

# GitHub se repository clone karo
git clone https://github.com/ekantverma/allpack-packaging.git .

# Backend folder ko add karo
git add backend/

# Commit karo
git commit -m "feat: add professional nodemailer contact form email system"

# Push karo
git push origin master
```

---

### **Step 2: Vercel Account Banao**

1. [vercel.com](https://vercel.com) par jaao
2. **"Sign up"** button click karo
3. **"Continue with GitHub"** select karo
4. GitHub authorization dedo
5. Email verify karo

---

### **Step 3: Backend Project Ko Vercel par Deploy Karo**

#### **Method A: Dashboard se Deploy Karo (Easiest)**

1. Vercel dashboard par jaao
2. **"New Project"** button click karo
3. Apke **allpack-packaging** repository ko select karo
4. **Import** button click karo

**Project Settings:**
- **Framework Preset:** Node.js
- **Root Directory:** `backend` (important!)
- **Build Command:** `npm run build` ✓
- **Output Directory:** `dist` ✓
- **Install Command:** `npm install` ✓

---

### **Step 4: Environment Variables Set Karo**

Vercel dashboard me:

1. **Settings** → **Environment Variables** par jaao
2. Ye variables add karo:

```
GMAIL_USER = your-email@gmail.com
GMAIL_APP_PASSWORD = xxxx xxxx xxxx xxxx
FROM_EMAIL = noreply@allpakpackaging.com
FROM_NAME = AllPak Packaging
ADMIN_EMAIL = ekantvermasolanki@gmail.com
CORS_ORIGIN = https://allpakpackaging.com
NODE_ENV = production
```

3. **"Save"** button click karo

⚠️ **Important:** `GMAIL_APP_PASSWORD` को app password banao Google se:
- Go to https://myaccount.google.com/apppasswords
- Select "Mail" and "Windows Computer"
- Google generate karega 16-character password
- Copy paste karo

---

### **Step 5: Deploy Button Dabo**

1. Dashboard par wapas jaao
2. **"Deploy"** button click karo
3. Vercel deploy karega (2-3 minutes lagenge)

✅ **Success:** Aapka backend live ho jayega!

---

## 🌐 **Apna Backend URL**

Deploy hone ke baad, Vercel aapko ye URL dega:

```
https://allpack-packaging.vercel.app
```

Ya custom domain setup ke liye:
```
https://api.allpakpackaging.com  (agar domain connect kiya)
```

---

## 🔗 **Frontend ke sath Connect Karo**

### **Frontend ke `.env.production` me update karo:**

```env
VITE_API_URL=https://allpack-packaging.vercel.app
```

Ya custom domain:
```env
VITE_API_URL=https://api.allpakpackaging.com
```

### **Frontend code me (contactService.ts):**

```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const submitContactForm = async (formData: ContactFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/email/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  return response.json();
};
```

---

## ✅ **Test Karo**

Deploy hone ke baad test karo:

### **Option 1: Postman se Test Karo**

```
POST https://allpack-packaging.vercel.app/api/email/contact

Headers:
Content-Type: application/json

Body:
{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "+1 (555) 123-4567",
  "company": "Test Company",
  "packagingNeeds": "Testing the deployed backend with at least 10 characters"
}
```

### **Option 2: Frontend Form se Test Karo**

1. Frontend build karo
2. Contact form fill karo
3. Submit karo
4. Email check karo

---

## 🔧 **Troubleshooting**

### **Problem: Deployment Failed**

**Solution:**
1. Vercel logs dekho (Dashboard → Project → Deployments)
2. Error message padhо
3. Common issues:
   - Missing environment variables
   - Incorrect `root` directory (should be `backend`)
   - TypeScript compile errors

### **Problem: Email Not Sending**

**Check:**
1. Gmail credentials correct hain?
2. App Password generate kiya Google se?
3. GMAIL_APP_PASSWORD environment variable set hai?
4. ADMIN_EMAIL correct hai?

### **Problem: CORS Error**

**Solution:**
```env
CORS_ORIGIN=https://allpakpackaging.com
```

Update karo aur redeploy karo.

---

## 🔐 **Security Checklist**

- ✅ Environment variables Vercel me set hain
- ✅ `.env` file GitHub par push nahi kiya (`.gitignore` me hai)
- ✅ Gmail App Password use kiya (regular password nahi)
- ✅ CORS_ORIGIN apke frontend domain ke barabar set hai

---

## 📊 **Deployment Status Check Karo**

```bash
# Health check endpoint test karo
curl https://allpack-packaging.vercel.app/health
```

Expected response:
```json
{
  "success": true,
  "status": "Server is running",
  "timestamp": "2026-05-22T10:30:00.000Z"
}
```

---

## 🎯 **Next: Frontend Deploy Karo**

Backend deploy ho gaya! Ab frontend ko:

### **Option 1: Vercel par Deploy Karo (Recommended)**
- Same process, but root directory = `frontend` 
- Set VITE_API_URL environment variable

### **Option 2: Other Platforms**
- Netlify, GitHub Pages, AWS, etc.

---

## 📞 **Important Links**

- Vercel Dashboard: https://vercel.com/dashboard
- Gmail App Passwords: https://myaccount.google.com/apppasswords
- Backend Repo: https://github.com/ekantverma/allpack-packaging
- API Docs: `backend/API_DOCUMENTATION.md`

---

## 🎬 **Quick Checklist**

```
□ Code GitHub par push kiya
□ Vercel account banaya
□ Backend GitHub repo select kiya
□ Root directory = "backend" set kiya
□ Environment variables add kiye:
  □ GMAIL_USER
  □ GMAIL_APP_PASSWORD
  □ FROM_EMAIL
  □ FROM_NAME
  □ ADMIN_EMAIL
  □ CORS_ORIGIN
  □ NODE_ENV = production
□ Deploy button dabaya
□ Health endpoint se test kiya (/health)
□ Frontend API URL update kiya
□ Contact form se test kiya
□ Email received ho gaya ✅
```

---

## 💡 **Tips**

1. **Logs dekho:** Dashboard → Deployments → Logs
2. **Re-deploy:** Settings → Redeploy button
3. **Environment variables change:** Auto redeploy nahi hota, manually redeploy karo
4. **Domains:** Custom domain connect karne ke liye DNS settings karo

---

**Status:** ✅ Ready for Production  
**Support:** Check logs, re-deploy, update .env variables

---

**Ab apka backend production me live hai!** 🎉
Frontend ke sath merge karne ke liye contact form ka URL update karo aur test karo!
