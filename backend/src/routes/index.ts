import express from 'express';
import {
  sendTestEmail,
  sendWelcome,
  sendContactConfirmation,
  sendNotification,
  handleContactForm,
} from '../routes/email.js';

const router = express.Router();

/**
 * POST /api/email/send
 * Send a custom email
 * Body: { to, subject, html }
 */
router.post('/send', sendTestEmail);

/**
 * POST /api/email/welcome
 * Send a welcome email
 * Body: { email, name }
 */
router.post('/welcome', sendWelcome);

/**
 * POST /api/email/contact-confirmation
 * Send contact confirmation email
 * Body: { email, name, message }
 */
router.post('/contact-confirmation', sendContactConfirmation);

/**
 * POST /api/email/notification
 * Send a notification email
 * Body: { email, title, content }
 */
router.post('/notification', sendNotification);

/**
 * POST /api/email/contact
 * Handle professional contact form submission
 * Sends professional HTML email to admin and confirmation to user
 * Body: { name, email, phone, company, packagingNeeds }
 * Response includes validation and success/error messages
 */
router.post('/contact', handleContactForm);

export default router;
