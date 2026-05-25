import { createContext, useContext, useEffect, useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, X } from "lucide-react";
import { FormField, FloatingInput, FloatingTextarea, SubmitButton } from "@/components/site/Form";

interface ContactModalContextValue {
  open: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <ContactModalContext.Provider
      value={{
        open,
        openContactModal: () => setOpen(true),
        closeContactModal: () => setOpen(false),
      }}
    >
      {children}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </ContactModalContext.Provider>
  );
}

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!open) {
    return null;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setLoading(true);

    const form = event.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value?.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value?.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value?.trim(),
      company: (form.elements.namedItem("company") as HTMLInputElement)?.value?.trim() || "Not Provided",
      packagingNeeds: (form.elements.namedItem("packagingNeeds") as HTMLTextAreaElement)?.value?.trim(),
    };

    try {
      const response = await fetch("https://allpackbackend.vercel.app/api/email/contact", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSent(true);
        form.reset();
        setTimeout(() => setSent(false), 5000);
      } else {
        setErrorMessage(data.message || "Validation failed");
      }
    } catch (error: any) {
      setErrorMessage(error?.message || "Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 p-4 backdrop-blur-sm">
      <div className="mx-auto min-h-[80vh] max-w-6xl overflow-hidden rounded-[40px] bg-white shadow-2xl">
        <div className="relative grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative bg-primary/5 p-8 sm:p-10 lg:p-12">
            <button
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-sm transition hover:bg-slate-100"
              type="button"
              onClick={onClose}
              aria-label="Close quote form"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-6 pt-6 lg:pt-8">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-primary">Get a Quote</p>
                <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
                  Fast quote, premium packaging.
                </h2>
                <p className="mt-4 text-sm leading-7 text-foreground/80 sm:text-base">
                  Share the basics and we will follow up with a tailored packaging plan, pricing and production timeline.
                </p>
              </div>

              <div className="space-y-4 rounded-3xl bg-white p-5 shadow-sm border border-border">
                {[
                  "25+ years of corrugated expertise",
                  "Cold chain and export-grade solutions",
                  "Dedicated quality checks and fast turnarounds",
                  "Flexible volumes, custom printing and finishing",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    <p className="text-sm leading-6 text-foreground/90">{item}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm border border-border">
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">What we deliver</p>
                <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    Expert packaging guidance from concept to dispatch.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    Packaging design that protects products and elevates branding.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    Reliable delivery from our Vapi facility to partners across India.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:p-12">
            <div className="flex items-center justify-between gap-4">
              <div>
                {/* <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Quick quote form</p> */}
                <h3 className="mt-3 text-2xl font-bold text-ink">Tell us about your packaging need</h3>
              </div>
              <div className="hidden lg:block rounded-2xl bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.26em] text-primary">
                Response within 1 business day
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField>
                  <FloatingInput label="Name" name="name" required />
                </FormField>
                <FormField>
                  <FloatingInput label="Email" name="email" type="email" required />
                </FormField>
                <FormField>
                  <FloatingInput label="Phone" name="phone" required />
                </FormField>
                <FormField>
                  <FloatingInput label="Company" name="company" required />
                </FormField>
              </div>

              <FormField>
                <FloatingTextarea
                  label="Tell us about your packaging needs"
                  name="packagingNeeds"
                  required
                />
              </FormField>

              {errorMessage && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}

              {sent && (
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-900">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Request received.</p>
                      <p className="text-foreground/80">Our team will contact you shortly with a quote.</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <SubmitButton sent={loading}>{loading ? "Sending..." : "Send Message"}</SubmitButton>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-border bg-background px-5 py-4 text-sm font-semibold transition hover:border-primary hover:text-primary"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
