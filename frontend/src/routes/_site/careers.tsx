import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PageHero } from "./about";
import careers from "@/assets/careers-team.jpg";
import { Sparkles, TrendingUp, Users, Heart } from "lucide-react";
import { FormField, FloatingInput, FloatingTextarea, SubmitButton } from "@/components/site/Form";
import { useState } from "react";

export const Route = createFileRoute("/_site/careers")({
  head: () => ({
    meta: [
      { title: "Careers - Allpak Packaging" },
      { name: "description", content: "Join a 25+ year packaging legacy. We're hiring across operations, sales, design and quality." },
      { property: "og:title", content: "Careers -Allpak Packaging" },
      { property: "og:description", content: "Grow your career with Allpak Packaging." },
    ],
  }),
  component: Page,
});

const positions = [
  // { t: "Production Supervisor", l: "Vapi", type: "Full-time" },
  // { t: "Quality Control Engineer", l: "Damanganga", type: "Full-time" },
  // { t: "Business Development", l: "Mumbai", type: "Full-time" },
  // { t: "Packaging Designer", l: "Vapi", type: "Full-time" },
];

function Page() {
  useReveal();
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build a <span className="italic font-serif text-accent">career</span> that lasts.</>}
        subtitle="Allpak is a family business. We grow people the way we grow partnerships -for the long term."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 reveal rounded-3xl overflow-hidden">
            <img src={careers} alt="Allpak team" loading="lazy" className="w-full h-[480px] object-cover" />
          </div>
          <div className="lg:col-span-6 reveal">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ink leading-[1.1]">
              Why join <span className="text-gradient-brand">Allpak</span>?
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {[
                { i: Sparkles, t: "Meaningful Work", d: "Protect the products India loves" },
                { i: TrendingUp, t: "Growth", d: "Learn from leaders with decades of experience" },
                { i: Users, t: "Family Culture", d: "Real relationships, not org charts" },
                { i: Heart, t: "Ownership", d: "Your decisions shape the product" },
              ].map((b, i) => (
                <div key={i} className="rounded-2xl bg-card border border-border p-5 hover-lift">
                  <span className="grid place-items-center h-10 w-10 rounded-lg bg-primary/10 text-primary mb-3"><b.i className="h-5 w-5" /></span>
                  <div className="font-display font-bold text-ink">{b.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{b.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeader eyebrow="Open Positions" title={<>Roles we're <span className="text-gradient-brand">hiring</span> for.</>} />
          <div className="mt-14 space-y-3">
            {positions.map((p, i) => (
              <div key={i} className="reveal group flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-card border border-border p-6 hover-lift" style={{ transitionDelay: `${i * 60}ms` }}>
                <div>
                  <div className="font-display font-bold text-xl text-ink">{p.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.l} • {p.type}</div>
                </div>
                <a href="#apply" className="rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold transition-transform group-hover:-translate-y-0.5">Apply</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeader eyebrow="Application" title={<>Apply <span className="text-gradient-brand">now</span>.</>} />
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="reveal mt-14 rounded-3xl bg-card border border-border p-8 lg:p-10 space-y-6">
            <FormField><FloatingInput label="Full Name" name="name" required /></FormField>
            <FormField><FloatingInput label="Email" name="email" type="email" required /></FormField>
            <FormField><FloatingInput label="Phone" name="phone" required /></FormField>
            <FormField><FloatingInput label="Position Applying For" name="position" required /></FormField>
            <FormField><FloatingTextarea label="Why Allpak?" name="message" /></FormField>
            <SubmitButton sent={sent}>Submit Application</SubmitButton>
          </form>
        </div>
      </section>
    </>
  );
}
