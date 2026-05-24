import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PageHero } from "./about";
import { useState } from "react";
import { Snowflake, Thermometer, Shield, Recycle, Plus, Box, Truck } from "lucide-react";

export const Route = createFileRoute("/_site/what-is-packaging")({
  head: () => ({
    meta: [
      { title: "What is Packaging - Allpak Packaging" },
      { name: "description", content: "Understand corrugated packaging, cold-chain logistics, box types and how the right packaging protects products." },
      { property: "og:title", content: "What is Packaging -Allpak Packaging" },
      { property: "og:description", content: "A primer on corrugated, cold-chain, mono carton and specialty packaging." },
    ],
  }),
  component: Page,
});

const faqs = [
  { q: "What is corrugated packaging?", a: "A multi-layer board made of fluted paper sandwiched between linerboards, providing strength, cushioning and stack-ability for shipping and retail." },
  { q: "What does ply mean?", a: "Ply refers to the number of paper layers in a corrugated board. 3-ply has one fluted layer; 5/7/9-ply increase strength for heavier or export loads." },
  { q: "What is cold-chain packaging?", a: "Packaging engineered to perform under refrigerated (4°C) or frozen (−18°C) conditions -moisture, condensation and stacking strength all matter." },
  { q: "What is the difference between B, C and E flute?", a: "B-flute is fine and rigid; C-flute is the most versatile shipping flute; E-flute is the finest with the smoothest print surface, ideal for retail mono cartons." },
  { q: "Can boxes be fully printed?", a: "Yes. We offer flexo printing on corrugated boards and offset printing on mono cartons -including full-colour brand artwork." },
  { q: "Is corrugated packaging recyclable?", a: "Yes. Corrugated board is one of the most widely recycled materials globally and is fully biodegradable." },
];

function Page() {
  useReveal();
  return (
    <>
      <PageHero
        eyebrow="What is Packaging"
        title={<>The <span className="italic font-serif text-accent">science</span> behind the box.</>}
        subtitle="Packaging is engineering. Materials, flutes, prints and finishes -all calibrated for your product's journey."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { i: Box, t: "Corrugated", d: "Multi-ply fluted boards built for protection and stacking." },
            { i: Snowflake, t: "Cold Chain", d: "Engineered for sub-zero and refrigerated logistics." },
            { i: Thermometer, t: "Temperature-Sensitive", d: "Packaging that performs under humidity and condensation." },
            { i: Shield, t: "Protection", d: "Cushioning, dividers and inserts that prevent damage." },
          ].map((c, i) => (
            <div key={i} className="reveal rounded-3xl bg-card border border-border p-7 hover-lift" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-primary text-primary-foreground mb-5"><c.i className="h-6 w-6" /></span>
              <h4 className="font-display font-bold text-xl text-ink">{c.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process timeline */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="The Packaging Process" title={<>From raw <span className="text-gradient-brand">paper</span> to retail shelf.</>} />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 relative">
            <div className="absolute top-6 left-0 right-0 h-px bg-primary/30 hidden md:block" />
            {["Raw Material","Corrugation","Printing","Finishing","Dispatch"].map((s, i) => (
              <div key={i} className="reveal text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground grid place-items-center font-display font-bold shadow-elegant">
                  {i + 1}
                </div>
                <div className="mt-4 font-display font-bold text-ink">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionHeader eyebrow="FAQ" title={<>Common <span className="text-gradient-brand">questions</span>.</>} />
          <div className="mt-14 space-y-3">
            {faqs.map((f, i) => <Accordion key={i} q={f.q} a={f.a} delay={i * 60} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function Accordion({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="reveal rounded-2xl border border-border bg-card overflow-hidden" style={{ transitionDelay: `${delay}ms` }}>
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between gap-4 p-6 text-left">
        <span className="font-display font-semibold text-lg text-ink">{q}</span>
        <Plus className={`h-5 w-5 text-primary shrink-0 transition-transform duration-500 ${open ? "rotate-45" : ""}`} />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-500"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
