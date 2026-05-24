import { Request, Response } from "express";
import { emailService } from "../services/emailService.js";
import { asyncHandler } from "../middleware/errorHandler.js";
import { validateContactForm } from "../lib/validation.js";

// Send Custom Test Email
export const sendTestEmail = asyncHandler(
  async (req: Request, res: Response) => {
    const { to, subject, html } = req.body;

    if (!to || !subject || !html) {
      return res.status(400).json({
        success: false,
        message: "Required fields: to, subject, html",
      });
    }

    const result = await emailService.sendEmail({
      to,
      subject,
      html,
    });

    return res.status(200).json({
      success: true,
      message: "Test email sent successfully",
      data: result,
    });
  }
);

// Welcome Email
export const sendWelcome = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({
        success: false,
        message: "Required fields: email, name",
      });
    }

    const result = await emailService.sendWelcomeEmail(email, name);

    return res.status(200).json({
      success: true,
      message: "Welcome email sent successfully",
      data: result,
    });
  }
);

// Contact Confirmation Email
export const sendContactConfirmation = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, name, message } = req.body;

    if (!email || !name || !message) {
      return res.status(400).json({
        success: false,
        message: "Required fields: email, name, message",
      });
    }

    const result = await emailService.sendContactConfirmation(
      email,
      name,
      message
    );

    return res.status(200).json({
      success: true,
      message: "Contact confirmation email sent",
      data: result,
    });
  }
);

// Notification Email
export const sendNotification = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, title, content } = req.body;

    if (!email || !title || !content) {
      return res.status(400).json({
        success: false,
        message: "Required fields: email, title, content",
      });
    }

    const result = await emailService.sendNotification(
      email,
      title,
      content
    );

    return res.status(200).json({
      success: true,
      message: "Notification email sent successfully",
      data: result,
    });
  }
);

// Contact Form Handler - Professional Email with HTML Template
export const handleContactForm = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, phone, company, packagingNeeds } = req.body;

    // Validate incoming data
    const validation = validateContactForm({
      name,
      email,
      phone,
      company,
      packagingNeeds,
    });

    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validation.errors,
      });
    }

    // Admin email address
    const adminEmail = process.env.ADMIN_EMAIL || "ekantvermasolanki@gmail.com";

    // Send professional contact form email
    const result = await emailService.sendContactFormEmail(
      {
        name,
        email,
        phone,
        company,
        packagingNeeds,
      },
      adminEmail
    );

    return res.status(200).json({
      success: true,
      message: "Contact form submitted successfully. A confirmation email has been sent to your inbox.",
      data: result,
    });
  }
);