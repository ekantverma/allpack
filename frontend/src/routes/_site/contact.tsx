import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHero } from "./about";

import {
  FormField,
  FloatingInput,
  FloatingTextarea,
  SubmitButton,
} from "@/components/site/Form";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import { useState } from "react";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Us - Allpak Packaging",
      },

      {
        name: "description",
        content:
          "Get in touch with Allpak Packaging. Plants in Damanganga and Vapi. Call +91 9167005491.",
      },

      {
        property: "og:title",
        content: "Contact Us - Allpak Packaging",
      },

      {
        property: "og:description",
        content:
          "Tell us about your packaging needs - we'll engineer the right solution.",
      },
    ],
  }),

  component: Page,
});

function Page() {
  useReveal();

  const [sent, setSent] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement)
        .value,

      email: (form.elements.namedItem("email") as HTMLInputElement)
        .value,

      phone: (form.elements.namedItem("phone") as HTMLInputElement)
        .value,

      company: (
        form.elements.namedItem("company") as HTMLInputElement
      ).value,

      packagingNeeds: (
        form.elements.namedItem("message") as HTMLTextAreaElement
      ).value,
    };

    try {
      const response = await fetch(
        "https://allpackbackend.vercel.app/api/email/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSent(true);

        form.reset();

        setTimeout(() => {
          setSent(false);
        }, 4000);
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);

      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's build your{" "}
            <span className="italic font-serif text-accent">
              next box
            </span>
            .
          </>
        }
        subtitle="Share your product, volume and supply-chain details - our team will respond within one business day."
      />

      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-10">
          
          {/* Contact Cards */}

          <div className="lg:col-span-5 space-y-6">
            {[
              {
                i: Phone,
                t: "Phone",
                v: "+91 9167005491",
              },

              {
                i: Mail,
                t: "Email",
                v: "parikshit@allpakpackaging.com",
              },

              {
                i: MapPin,
                t: "Plants",
                v: "Vapi",
              },

              {
                i: Clock,
                t: "Working Hours",
                v: "Mon – Sat, 9 AM – 7 PM IST",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="reveal flex items-start gap-4 rounded-2xl bg-card border border-border p-6 hover-lift"
                style={{
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-primary text-primary-foreground shrink-0">
                  <c.i className="h-5 w-5" />
                </span>

                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {c.t}
                  </div>

                  <div className="mt-1 font-display font-bold text-ink">
                    {c.v}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}

          <div className="lg:col-span-7 reveal relative">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-card border border-border p-8 lg:p-10 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                
                <FormField>
                  <FloatingInput
                    label="Name"
                    name="name"
                    required
                  />
                </FormField>

                <FormField>
                  <FloatingInput
                    label="Email"
                    name="email"
                    type="email"
                    required
                  />
                </FormField>

                <FormField>
                  <FloatingInput
                    label="Phone"
                    name="phone"
                    required
                  />
                </FormField>

                <FormField>
                  <FloatingInput
                    label="Company"
                    name="company"
                  />
                </FormField>
              </div>

              <FormField>
                <FloatingTextarea
                  label="Tell us about your packaging needs"
                  name="message"
                />
              </FormField>

              <SubmitButton sent={loading}>
                {loading ? "Sending..." : "Send Message"}
              </SubmitButton>
            </form>

            {/* Success Popup */}

            {sent && (
              <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-right duration-500">
                <div className="rounded-2xl border border-green-200 bg-green-50 px-6 py-4 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white text-lg">
                      ✓
                    </div>

                    <div>
                      <h3 className="font-semibold text-green-800">
                        Message Sent
                      </h3>

                      <p className="text-sm text-green-700">
                        We'll contact you soon 🚀
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Google Map */}

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal rounded-3xl overflow-hidden border border-border shadow-soft">
            <iframe
              title="Allpak location"
              src="https://www.google.com/maps?q=Vapi,Gujarat,India&output=embed"
              className="w-full h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}