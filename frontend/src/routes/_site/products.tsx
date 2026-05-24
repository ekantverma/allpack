import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PageHero } from "./about";
import { Package, Boxes, Layers, Mail, Lock, Truck } from "lucide-react";

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
  { i: Boxes, t: "3 Ply Corrugated Boxes", d: "Lightweight inner packaging for low-stress loads." },
  { i: Boxes, t: "5 Ply Corrugated Boxes", d: "Most versatile shipping carton -balanced strength." },
  { i: Boxes, t: "7 Ply Corrugated Boxes", d: "Heavy-duty boxes for export and stacking." },
  { i: Boxes, t: "9 Ply Corrugated Boxes", d: "Maximum-strength industrial shippers." },
  { i: Package, t: "Printed Corrugated Boxes", d: "Brand-forward flexo & offset printing." },
  { i: Package, t: "Mono Carton Boxes", d: "Premium retail-ready folding cartons." },
  { i: Layers, t: "Corrugated Rolls", d: "Continuous corrugated wrap for protection." },
  { i: Layers, t: "Corrugated Pads & Sheets", d: "Custom-cut interleaves and dividers." },
  { i: Package, t: "E-Flute Boxes", d: "Fine flute for high-end retail packaging." },
  { i: Mail, t: "Mailer Boxes", d: "Premium D2C unboxing experience." },
  { i: Lock, t: "Self-Lock Boxes", d: "Tool-free assembly, secure closure." },
  { i: Truck, t: "Master Cartons", d: "Bulk shippers built for the long haul." },
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

      <section className="py-20">
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
                className="reveal group relative overflow-hidden rounded-3xl bg-card border border-border p-8 hover-lift"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 transition-transform duration-700 group-hover:scale-150" />
                <span className="relative grid place-items-center h-14 w-14 rounded-2xl bg-ink text-cream mb-6 transition-transform group-hover:rotate-6">
                  <p.i className="h-6 w-6" />
                </span>
                <h3 className="relative font-display font-bold text-2xl text-ink">{p.t}</h3>
                <p className="relative mt-3 text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
