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
  CheckCircle2,
  X,
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
          "Get in touch with Allpak Packaging. Plants in Vapi. Call +91 9167005491.",
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

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    setErrorMessage("");

    const form = e.currentTarget;

    const formData = {
      name: (
        form.elements.namedItem("name") as HTMLInputElement
      )?.value?.trim(),

      email: (
        form.elements.namedItem("email") as HTMLInputElement
      )?.value?.trim(),

      phone: (
        form.elements.namedItem("phone") as HTMLInputElement
      )?.value?.trim(),

      company: (
        form.elements.namedItem("company") as HTMLInputElement
      )?.value?.trim() || "Not Provided",

      packagingNeeds: (
        form.elements.namedItem(
          "packagingNeeds"
        ) as HTMLTextAreaElement
      )?.value?.trim(),
    };

    console.log("FORM DATA:", formData);

    try {
      const response = await fetch(
        "https://allpackbackend.vercel.app/api/email/contact",
        {
          method: "POST",

          mode: "cors",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log("API RESPONSE:", data);

      if (response.ok && data.success) {
        setSent(true);

        form.reset();

        setTimeout(() => {
          setSent(false);
        }, 5000);
      } else {
        setErrorMessage(
          data.message || "Validation failed"
        );
      }
    } catch (error: any) {
      console.error("FULL ERROR:", error);

      setErrorMessage(
        error?.message || "Server Error"
      );
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
                v: "Industrial plot 69, Damanganga industrial estate, Beside Jecor lights, Karvad road, Vapi",
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
                    required
                  />
                </FormField>
              </div>

              <FormField>
                <FloatingTextarea
                  label="Tell us about your packaging needs"
                  name="packagingNeeds"
                  required
                />
              </FormField>

              {/* Error Message */}

              {errorMessage && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}

              <SubmitButton sent={loading}>
                {loading ? "Sending..." : "Send Message"}
              </SubmitButton>
            </form>

            {/* Custom Success Popup */}

            {sent && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md animate-in fade-in duration-300">

                <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl animate-in zoom-in-95 duration-500">

                  {/* Top Gradient */}

                  <div className="h-2 w-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-600" />

                  <div className="p-8 text-center">

                    <button
                      onClick={() => setSent(false)}
                      className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-black"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 shadow-inner">

                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white animate-pulse">
                        <CheckCircle2 className="h-9 w-9" />
                      </div>
                    </div>

                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                      Message Sent 🚀
                    </h2>

                    <p className="mt-3 text-gray-600 leading-relaxed">
                      Thank you for contacting
                      <span className="font-semibold text-black">
                        {" "}
                        AllPak Packaging
                      </span>
                      .
                      <br />
                      Our team will contact you shortly.
                    </p>

                    <button
                      onClick={() => setSent(false)}
                      className="mt-7 rounded-2xl bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-neutral-800"
                    >
                      Awesome!
                    </button>
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
          <div className="reveal overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="Allpak location"
              src="https://www.google.com/maps?q=Vapi,Gujarat,India&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}