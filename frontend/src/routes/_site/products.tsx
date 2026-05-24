import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PageHero } from "./about";
import { Package, Boxes, Layers, Mail, Lock, Truck } from "lucide-react";
import boxes3PlyImg from "@/assets/products/3-5-7-9-ply.jpg";
import corrugatedPadsAndRollsImg from "@/assets/products/corrugatedpadsandrolls.jpg";
import corrugatedRollsImg from "@/assets/products/corrugatedrolls.jpg";
import eFluteImg from "@/assets/products/eflute.jpg";
import mailerBoxImg from "@/assets/products/mailerbox.jpg";
import masterCartonImg from "@/assets/products/mastercartoon.jpg";
import monoCartonImg from "@/assets/products/Mono Cartoon box.jpg";
import printedCorrugatedImg from "@/assets/products/printed corrugated box.jpg";
import selfLockBoxesImg from "@/assets/products/selflockboxes.jpg";

export const Route = createFileRoute("/_site/products")({
  head: () => ({
    meta: [
      { title: "Products - Allpak Packaging" },
      { name: "description", content: "Full portfolio of corrugated boxes, mono cartons, mailers and master cartons for every industry." },
      { property: "og:title", content: "Products -Allpak Packaging" },
      { property: "og:description", content: "From 3-ply to 9-ply, mono cartons to mailer boxes -engineered for every supply chain." },
    ],
  }),
  component: ProductsPage,
});

const categories = ["Food & Beverage", "Consumer Products", "Stationery", "Wellness", "Pharmaceuticals"];

const products = [
  { i: Boxes, img: boxes3PlyImg, t: "3 Ply Corrugated Boxes", d: "Lightweight inner packaging for low-stress loads." },
  { i: Boxes, img: boxes3PlyImg, t: "5 Ply Corrugated Boxes", d: "Most versatile shipping carton -balanced strength." },
  { i: Boxes, img: boxes3PlyImg, t: "7 Ply Corrugated Boxes", d: "Heavy-duty boxes for export and stacking." },
  { i: Boxes, img: boxes3PlyImg, t: "9 Ply Corrugated Boxes", d: "Maximum-strength industrial shippers." },
  { i: Package, img: printedCorrugatedImg, t: "Printed Corrugated Boxes", d: "Brand-forward flexo & offset printing." },
  { i: Package, img: monoCartonImg, t: "Mono Carton Boxes", d: "Premium retail-ready folding cartons." },
  { i: Layers, img: corrugatedRollsImg, t: "Corrugated Rolls", d: "Continuous corrugated wrap for protection." },
  { i: Layers, img: corrugatedPadsAndRollsImg, t: "Corrugated Pads & Sheets", d: "Custom-cut interleaves and dividers." },
  { i: Package, img: eFluteImg, t: "E-Flute Boxes", d: "Fine flute for high-end retail packaging." },
  { i: Mail, img: mailerBoxImg, t: "Mailer Boxes", d: "Premium D2C unboxing experience." },
  { i: Lock, img: selfLockBoxesImg, t: "Self-Lock Boxes", d: "Tool-free assembly, secure closure." },
  { i: Truck, img: masterCartonImg, t: "Master Cartons", d: "Bulk shippers built for the long haul." },
];

function ProductsPage() {
  useReveal();
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={<>The right <span className="italic font-serif text-accent">box</span> for every brand.</>}
        subtitle="Twelve core packaging types across five core industries -fully customisable to your spec."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((c, i) => (
              <span
                key={c}
                className="reveal rounded-full bg-primary/10 text-primary px-5 py-2 text-sm font-semibold"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div
                key={p.t}
                className="reveal group relative overflow-hidden rounded-3xl bg-card border border-border p-0 shadow-[0_10px_45px_-24px_rgba(15,23,42,0.8)] transition-all duration-700 hover:border-transparent hover:shadow-2xl"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 transition-transform duration-700 group-hover:scale-150" />
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.t}
                    className="h-56 w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="relative p-8">
                  <span className="relative inline-grid place-items-center h-14 w-14 rounded-2xl bg-ink text-cream mb-6 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                    <p.i className="h-6 w-6" />
                  </span>
                  <div className="space-y-3 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:opacity-100 opacity-95">
                    <h3 className="relative font-display font-bold text-2xl text-ink">{p.t}</h3>
                    <p className="relative text-muted-foreground">{p.d}</p>
                  </div>
                  {/* <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-primary opacity-70 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="inline-flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                    explore packaging
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FluteTypes />
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid gap-2">
      <dt className="text-sm font-semibold text-ink">{k}</dt>
      <dd className="text-sm text-muted-foreground">{v}</dd>
    </div>
  );
}

function FluteTypes() {
  const flutes = [
    {
      l: "B-Flute",
      strength: "High puncture resistance",
      usage: "Inner packaging, die-cut boxes",
      temp: "Ambient + Chilled",
      products: "Cans, beverages, hardware",
    },
    {
      l: "C-Flute",
      strength: "Most versatile, balanced",
      usage: "Shipping cartons, master boxes",
      temp: "All temperatures",
      products: "Most retail goods, glassware",
    },
    {
      l: "E-Flute",
      strength: "Fine, smooth printing surface",
      usage: "Mono cartons, retail boxes",
      temp: "Ambient",
      products: "Cosmetics, electronics, gifting",
    },
  ];

  return (
    <section className="py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Flute Types"
          title={
            <>
              The right <span className="text-gradient-brand">structure</span> for every product.
            </>
          }
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {flutes.map((f, i) => (
            <div
              key={i}
              className="reveal rounded-3xl bg-card border border-border p-8 group hover-lift"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-display font-bold text-5xl text-gradient-brand">{f.l}</div>
              <div className="mt-6 space-y-4 text-sm">
                <Row k="Strength" v={f.strength} />
                <Row k="Usage" v={f.usage} />
                <Row k="Temperature" v={f.temp} />
                <Row k="Best for" v={f.products} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
