import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Marquee } from "@/components/site/Marquee";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { Counters } from "@/components/site/Counters";
import {
  ArrowRight,
  ArrowDown,
  Snowflake,
  Thermometer,
  Package,
  Boxes,
  Factory,
  Printer,
  Layers,
  Truck,
  ShieldCheck,
  Award,
  Quote,
  CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/hero-factory.jpg";
import storyImg from "@/assets/story-boxes.jpg";
import infraAuto from "@/assets/infra-auto.jpg";
import infraPrint from "@/assets/infra-printing.jpg";
import qualityImg from "@/assets/quality-lab.jpg";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Allpak Packaging - Premium Corrugated Packaging Solutions" },
      {
        name: "description",
        content:
          "25+ years of trusted corrugated, cold-chain and mono-carton packaging for India's leading food, consumer and pharmaceutical brands.",
      },
      { property: "og:title", content: "Allpak Packaging -Premium Corrugated Packaging Solutions" },
      {
        property: "og:description",
        content:
          "Reliable. Quality. Cost-efficient. Brand-forward packaging built for India's top brands.",
      },
    ],
  }),
  component: HomePage,
});

const clients = [
  "Amul",
  "Reliance",
  "Bluestar",
  "Hindustan Pencils",
  "Nataraj",
  "Apsara",
  "Epigamia",
  "iD Fresh Food",
  "Parle Agro",
  "Open Secret",
  "Unived",
];
const clients2 = [
  "Nutrova",
  "Flair",
  "Selvel",
  "Rai Rayon",
  "Sarla",
  "SiN Denim",
  "Samsonite",
  "Joyo Plastics",
  "Baskin Robbins",
  "Brooklyn Creamery",
];

function HomePage() {
  useReveal();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      {/* <MovingTextSection /> */}
      <ClientsSection />
      <StatsSection />
      <Testimonials />
      <WhoWeAre />
      <Capabilities />
      {/* <FluteTypes />
      <OurStory /> */}
      {/* <ProductionProcess /> */}
      <ProductsPreview />
      <ContactCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center bg-gradient-to-br from-[#f8f5ef] via-[#f3ece2] to-[#faf7f2]">
      {/* Soft Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 w-full pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-black bg-white shadow-sm border border-black/5"
              style={{ animation: "fade-up 0.7s 0.1s both" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              25+ Years of Excellence
            </span>

            <h1
              className="mt-6 font-bold text-4xl md:text-6xl leading-[1.20] text-black"
              style={{ animation: "fade-up 0.9s 0.2s both" }}
            >
              Packaging Built on{" "}
              <span className="italic font-serif text-primary">Trust, Quality</span> &{" "}
              <span className="italic font-serif text-primary">Precision</span>
            </h1>

            <p
              className="mt-5 text-base md:text-lg text-black/65 leading-relaxed max-w-xl"
              style={{ animation: "fade-up 1s 0.4s both" }}
            >
              Allpak Packaging delivers end-to-end packaging solutions for brands that demand
              dependable packaging, consistent quality and flexible production support.
              <span className="block mt-3 font-semibold text-black">
                Every Box, Perfectly Made.
              </span>
            </p>

            <div
              className="mt-8 flex flex-wrap gap-4"
              style={{ animation: "fade-up 1s 0.6s both" }}
            >
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-primary"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold text-black transition-all hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-0.5"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="relative flex justify-center lg:justify-end"
            style={{ animation: "slide-in-right 1s ease both" }}
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl" />

              <img
                src={heroImg}
                alt="Allpak packaging"
                className="relative z-10 w-full max-w-[560px] rounded-[28px] shadow-2xl object-cover"
                style={{
                  animation: "floatImage 6s ease-in-out infinite alternate",
                }}
              />

              {/* Floating Info Card */}
              <div className="absolute bottom-5 left-5 z-20 rounded-2xl bg-white/90 backdrop-blur-xl px-5 py-3 shadow-xl border border-black/5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-black">Strong Boxes</p>
                <h3 className="mt-1 text-lg font-bold text-accent">Stronger Partnerships</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// function MovingTextSection() {
//   return (
//     <section className="py-20 lg:py-28 border-y border-border/60 bg-cream overflow-hidden">
//       <Marquee items={["Reliable Packaging", "Quality Without Compromise", "Trusted by Leading Brands", "25+ Years of Excellence"]} />
//       <div className="mt-6">
//         <Marquee reverse items={["Cold Chain Experts", "Corrugated Solutions", "Reliable", "Quality", "Cost-efficient", "Brand-forward"]} />
//       </div>
//     </section>
//   );
// }

function ClientsSection() {
  useReveal();
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Our Clients"
          title={
            <>
              Trusted by India's <span className="text-gradient-brand">most loved</span> brands
            </>
          }
          subtitle="From household FMCG names to category-defining D2C brands -our packaging protects what they deliver."
        />
      </div>
      <div className="mt-16 space-y-5">
        <LogoMarquee logos={clients} />
        <LogoMarquee logos={clients2} reverse />
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 reveal">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
            Who We Are
          </span>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-ink">
            Corrugated packaging for India's <span className="text-gradient-brand">top brands</span>
            .
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Export and retail packaging specialists, manufactured with precision, delivered pan-India from our dedicated production facility.
          </p>
          {/* <div className="mt-8 grid grid-cols-3 gap-3">
            {[{ p: "Vapi" }].map((x, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-4 text-center hover-lift"
              >
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Plant
                </div>
                <div className="mt-1 font-display font-bold text-ink">{x.p}</div>
              </div>
            ))}
          </div> */}
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {[
            {
              icon: Snowflake,
              t: "Cold Chain Ready",
              d: "Engineered for frozen and chilled logistics",
            },
            { icon: Truck, t: "Export Grade", d: "Built to survive international supply chains" },
            { icon: Boxes, t: "Retail Optimised", d: "Shelf-ready mono cartons and shippers" },
            { icon: ShieldCheck, t: "Quality Assured", d: "ISO-certified processes end-to-end" },
          ].map((f, i) => (
            <div
              key={i}
              className="reveal rounded-2xl border border-border bg-card p-7 hover-lift"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary mb-5">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="font-display font-bold text-xl text-ink">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 reveal overflow-hidden rounded-3xl group">
          <img
            src={storyImg}
            alt="Stacked corrugated boxes"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full h-[520px] object-cover transition-transform duration-[1500ms] group-hover:scale-110"
          />
        </div>
        <div className="lg:col-span-6 reveal">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
            Our Story
          </span>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-ink">
            A legacy of <span className="italic font-serif text-accent">quality</span>, built across
            generations.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            More than 25 years ago, <strong className="text-foreground">Rajkumar Ganeriwal</strong>{" "}
            laid the foundation of Allpak Packaging with a simple vision rooted in quality, trust
            and long-term relationships.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Today the legacy continues through{" "}
            <strong className="text-foreground">Vikkas Ganeriwal</strong> and{" "}
            <strong className="text-foreground">Parikshit Ganeriwal</strong> -combining tradition
            with innovation to serve a new generation of brands.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink text-cream px-7 py-4 font-semibold transition-all hover:bg-primary hover:-translate-y-0.5"
          >
            Discover More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-ink" />
      <div className="absolute inset-0 grain opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-primary-soft">
            By the Numbers
          </span>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-cream">
            Scale that delivers{" "}
            <span className="italic font-serif text-primary-soft">consistency</span>.
          </h2>
        </div>
        <div className="mt-14">
          <Counters
            items={[
              { end: 25, suffix: "+", label: "Years of Experience" },
              { end: 30, suffix: "+", label: "Advanced Machines" },
              { end: 10000, suffix: " sqft", label: "Storage Capacity" },
              { end: 1500, suffix: "+", label: "Tonnes Monthly Output" },
              { end: 200, suffix: "+", label: "Trusted Industry Clients" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    {
      icon: Factory,
      t: "Auto-Corrugation",
      d: "5-ply auto-board line with fully automatic glue kitchen and 1500+ tonnes monthly capacity.",
    },
    {
      icon: Layers,
      t: "Semi-Auto Corrugation",
      d: "2-ply single facer and thin-blade rotary machines for flexible run sizes.",
    },
    {
      icon: Package,
      t: "Mono Cartons",
      d: "Premium retail-ready folding cartons with high-end printing and finishing.",
    },
  ];
  const temps = [
    { icon: Snowflake, t: "Frozen", d: "−18°C, paneer & frozen dessert" },
    { icon: Thermometer, t: "Chilled", d: "4°C, yogurt, dahi, dairy" },
    { icon: Boxes, t: "Ambient", d: "Shelf-stable shippers" },
    { icon: Truck, t: "Export", d: "Long-haul export grade" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Capabilities"
          title={
            <>
              Engineered for every <span className="text-gradient-brand">use-case</span>.
            </>
          }
          subtitle="One facility. Full visibility. Zero compromises on quality."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((c, i) => (
            <div
              key={i}
              className="reveal group relative rounded-3xl bg-card border border-border p-8 lg:p-10 hover-lift overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/5 transition-transform duration-700 group-hover:scale-150" />
              <span className="relative grid place-items-center h-14 w-14 rounded-2xl bg-primary text-primary-foreground mb-6 shadow-soft">
                <c.icon className="h-7 w-7" />
              </span>
              <h3 className="relative font-display font-bold text-2xl text-ink">{c.t}</h3>
              <p className="relative mt-3 text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {temps.map((t, i) => (
            <div
              key={i}
              className="reveal rounded-2xl border border-border bg-background p-6 flex items-start gap-4 hover-lift"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-accent/10 text-accent shrink-0">
                <t.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display font-bold text-ink">{t.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{t.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
    <section className="py-24 lg:py-32">
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

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start gap-3 pb-3 border-b border-border/60 last:border-0 last:pb-0">
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground w-24 shrink-0 pt-0.5">
        {k}
      </span>
      <span className="text-foreground/90">{v}</span>
    </div>
  );
}

function ProductionProcess() {
  const steps = [
    { t: "Auto Plant", d: "Raw paper to corrugated board" },
    { t: "Auto & Semi-Auto", d: "Box conversion at scale" },
    { t: "Finishing", d: "Printing, slotting, gluing" },
    { t: "Packing", d: "Quality-checked & stacked" },
    { t: "Dispatch", d: "On-time delivery" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Production Process"
          title={
            <>
              From paper to <span className="text-gradient-brand">pallet</span>.
            </>
          }
        />
        <div className="mt-16 relative">
          <div className="absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent hidden md:block" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <div
                key={i}
                className="reveal text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative mx-auto h-14 w-14 rounded-full bg-primary text-primary-foreground grid place-items-center font-display font-bold shadow-elegant">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="mt-5 font-display font-bold text-lg text-ink">{s.t}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  const list = [
    "3 Ply Corrugated Boxes",
    "5 Ply Corrugated Boxes",
    "7 Ply Corrugated Boxes",
    "9 Ply Corrugated Boxes",
    "Printed Corrugated Boxes",
    "Mono Carton Boxes",
    "Corrugated Rolls",
    "Corrugated Pads & Sheets",
    "E-Flute Boxes",
    "Mailer Boxes",
    "Self-Lock Boxes",
    "Master Cartons",
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Products"
          title={
            <>
              A full <span className="text-gradient-brand">portfolio</span> of packaging.
            </>
          }
        />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {list.map((p, i) => (
            <div
              key={i}
              className="reveal group relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-cream"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 transition-opacity duration-500 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/90 via-ink/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <Package className="h-8 w-8 text-primary/70 group-hover:text-cream transition-colors mb-3" />
                <h4 className="font-display font-bold text-ink group-hover:text-cream text-lg leading-tight transition-colors">
                  {p}
                </h4>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-semibold hover:-translate-y-0.5 transition-all shadow-soft hover:shadow-elegant"
          >
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function IndustriesServed() {
  const ind = [
    "Retail Packaging",
    "Shipping & Logistics",
    "Food Industry",
    "Electronics",
    "Pharmaceuticals",
    "Automotive",
    "Cosmetics",
    "Furniture",
    "Manufacturing",
    "Art & Craft",
    "Moving & Storage",
  ];
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Industries Served"
          title={
            <>
              Packaging that powers <span className="text-gradient-brand">every industry</span>.
            </>
          }
        />
        <div className="mt-16 flex flex-wrap gap-3 justify-center">
          {ind.map((i, idx) => (
            <span
              key={i}
              className="reveal rounded-full bg-card border border-border px-6 py-3 text-sm font-medium text-foreground/80 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default"
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    {
      q: "Allpak's packaging held up perfectly through our entire cold-chain -from plant to retail. A true partner.",
      a: "Supply Chain Head, Leading Dairy Brand",
    },
    {
      q: "Consistency, quality and timelines. Three things Allpak never misses, and the reason we've worked with them for years.",
      a: "Operations Director, FMCG",
    },
    {
      q: "Their team understands export packaging at a level few do. Our overseas customers receive product in pristine condition.",
      a: "Founder, D2C Wellness Brand",
    },
    {
      q: "From frozen desserts to fragile retail products, they engineer the box for the journey -not just the spec sheet.",
      a: "Plant Head, Frozen Foods",
    },
  ];
  const arr = [...t, ...t];
  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              What partners <span className="text-gradient-brand">say</span> about us.
            </>
          }
        />
      </div>
      <div className="mt-16 overflow-hidden group">
        <div
          className="flex gap-6 w-max group-hover:[animation-play-state:paused] px-5"
          style={{ animation: "marquee 60s linear infinite" }}
        >
          {arr.map((x, i) => (
            <div key={i} className="shrink-0 w-[420px] glass rounded-3xl p-8 shadow-soft">
              <Quote className="h-7 w-7 text-primary mb-5" />
              <p className="text-foreground/85 leading-relaxed">{x.q}</p>
              <div className="mt-6 pt-6 border-t border-border/60 text-sm font-semibold text-ink">
                {x.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-3xl bg-ink p-12 lg:p-20 text-center">
          <div className="absolute inset-0 grain opacity-30" />
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display font-bold text-4xl md:text-6xl text-cream leading-[1.05]">
              Let's build your <span className="italic font-serif text-accent">next box</span>.
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-cream/70 text-lg">
              Tell us about your product, volume and supply-chain -we'll engineer the right
              packaging for it.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 font-semibold hover:-translate-y-0.5 transition-all shadow-elegant"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
