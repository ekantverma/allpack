export interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  packagingNeeds: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

export const validateContactForm = (
  data: any
): { isValid: boolean; errors: ValidationError[] } => {
  const errors: ValidationError[] = [];

  // Check required fields
  if (!data.name || typeof data.name !== "string") {
    errors.push({
      field: "name",
      message: "Full name is required and must be a string",
    });
  } else if (data.name.trim().length < 2) {
    errors.push({
      field: "name",
      message: "Full name must be at least 2 characters",
    });
  } else if (data.name.length > 100) {
    errors.push({
      field: "name",
      message: "Full name must not exceed 100 characters",
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || typeof data.email !== "string") {
    errors.push({
      field: "email",
      message: "Email address is required",
    });
  } else if (!emailRegex.test(data.email)) {
    errors.push({
      field: "email",
      message: "Please provide a valid email address",
    });
  }

  // Phone validation
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  if (!data.phone || typeof data.phone !== "string") {
    errors.push({
      field: "phone",
      message: "Phone number is required",
    });
  } else if (data.phone.trim().length < 7) {
    errors.push({
      field: "phone",
      message: "Phone number must be at least 7 characters",
    });
  } else if (!phoneRegex.test(data.phone)) {
    errors.push({
      field: "phone",
      message:
        "Phone number contains invalid characters. Use numbers, spaces, dashes, +, (, )",
    });
  } else if (data.phone.length > 20) {
    errors.push({
      field: "phone",
      message: "Phone number must not exceed 20 characters",
    });
  }

  // Company validation
  if (!data.company || typeof data.company !== "string") {
    errors.push({
      field: "company",
      message: "Company name is required",
    });
  } else if (data.company.trim().length < 2) {
    errors.push({
      field: "company",
      message: "Company name must be at least 2 characters",
    });
  } else if (data.company.length > 100) {
    errors.push({
      field: "company",
      message: "Company name must not exceed 100 characters",
    });
  }

  // Packaging needs validation
  if (!data.packagingNeeds || typeof data.packagingNeeds !== "string") {
    errors.push({
      field: "packagingNeeds",
      message: "Packaging needs description is required",
    });
  } else if (data.packagingNeeds.trim().length < 10) {
    errors.push({
      field: "packagingNeeds",
      message: "Please provide at least 10 characters describing your packaging needs",
    });
  } else if (data.packagingNeeds.length > 5000) {
    errors.push({
      field: "packagingNeeds",
      message: "Packaging needs description must not exceed 5000 characters",
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
