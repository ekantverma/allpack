import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHero } from "./about";
import { FormField, FloatingInput, FloatingTextarea, SubmitButton } from "@/components/site/Form";
import { Phone, Mail, Globe, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us - Allpak Packaging" },
      { name: "description", content: "Get in touch with Allpak Packaging. Plants in Damanganga and Vapi. Call +91 9167005491." },
      { property: "og:title", content: "Contact Us -Allpak Packaging" },
      { property: "og:description", content: "Tell us about your packaging needs -we'll engineer the right solution." },
    ],
  }),
  component: Page,
});

function Page() {
  useReveal();
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build your <span className="italic font-serif text-accent">next box</span>.</>}
        subtitle="Share your product, volume and supply-chain details -our team will respond within one business day."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            {[
              { i: Phone, t: "Phone", v: "+91 9167005491" },
              { i: Mail, t: "Email", v: "parikshit@allpakpackaging.com" },
              { i: MapPin, t: "Plants", v: "Vapi" },
              { i: Clock, t: "Working Hours", v: "Mon – Sat, 9 AM – 7 PM IST" },
            ].map((c, i) => (
              <div key={i} className="reveal flex items-start gap-4 rounded-2xl bg-card border border-border p-6 hover-lift" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-primary text-primary-foreground shrink-0">
                  <c.i className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                  <div className="mt-1 font-display font-bold text-ink">{c.v}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 reveal">
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-3xl bg-card border border-border p-8 lg:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField><FloatingInput label="Name" name="name" required /></FormField>
                <FormField><FloatingInput label="Email" name="email" type="email" required /></FormField>
                <FormField><FloatingInput label="Phone" name="phone" required /></FormField>
                <FormField><FloatingInput label="Company" name="company" /></FormField>
              </div>
              <FormField><FloatingTextarea label="Tell us about your packaging needs" name="message" /></FormField>
              <SubmitButton sent={sent}>Send Message</SubmitButton>
            </form>
          </div>
        </div>
      </section>

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
