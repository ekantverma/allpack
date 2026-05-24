import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PageHero } from "./about";
import infraAuto from "@/assets/infra-auto.jpg";
import infraPrint from "@/assets/infra-printing.jpg";
import qualityImg from "@/assets/quality-lab.jpg";
import { Factory, Layers, Printer, Wrench, ShieldCheck, Award } from "lucide-react";

export const Route = createFileRoute("/_site/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure - Allpak Packaging" },
      { name: "description", content: "30+ advanced machines, dedicated cold-chain facilities and ISO-certified quality labs across On plants." },
      { property: "og:title", content: "Infrastructure - Allpak Packaging" },
      { property: "og:description", content: "Inside our auto-corrugation, semi-auto, printing and finishing capabilities." },
    ],
  }),
  component: InfraPage,
});

const sections = [
  // {
  //   img: infraAuto,
  //   title: "Auto-Corrugation",
  //   tag: "Plant 01",
  //   items: ["5-ply auto-board line", "Fully automatic glue kitchen", "1500+ tonnes monthly capacity", "Continuous-flow production"],
  // },
  {
    img: infraAuto,
    title: "Semi-Auto Machinery",
    // tag: "Plant 01",
    items: ["2-ply single facer machine", "Thin blade rotary machine", "Flexible run sizes", "Rapid changeovers"],
  },
  {
    img: infraPrint,
    title: "Printing Machinery",
    // tag: "Plant 02",
    items: ["Rotary Slotter Printer", "Auto feeder & stacker", "Multi-colour flexo printing", "High-resolution output"],
  },
];

const other = [
  { i: Wrench, t: "Platen Die Punch" },
  { i: Wrench, t: "Flat Bed Die Cutter" },
  { i: Printer, t: "Paper Flexo Printer" },
  { i: Layers, t: "Folder-Gluer" },
  { i: Factory, t: "Stitcher Machines" },
];

function InfraPage() {
  useReveal();
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title={<><span className="italic font-serif text-accent">30+ machines </span><span className="text-black">powering speed, scale and consistency</span></>}
        subtitle="Purpose-built units for auto-corrugation, semi-auto production, printing and cold-chain compatible packaging."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-24 lg:space-y-32">
          {sections.map((s, i) => (
            <div key={i} className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
              <div className="lg:col-span-7 reveal overflow-hidden rounded-3xl group lg:[direction:ltr]">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-[460px] object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              </div>
              <div className="lg:col-span-5 reveal lg:[direction:ltr]">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">{s.tag}</span>
                <h3 className="mt-3 font-display font-bold text-4xl lg:text-5xl text-ink leading-[1.05]">{s.title}</h3>
                <ul className="mt-7 space-y-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-foreground/85">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="Other Machinery" title={<>Finishing & <span className="text-gradient-brand">specialty</span> equipment.</>} />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
            {other.map((o, i) => (
              <div key={i} className="reveal rounded-2xl bg-card border border-border p-7 text-center hover-lift" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="mx-auto grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary mb-4"><o.i className="h-6 w-6" /></span>
                <div className="font-display font-bold text-ink">{o.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QualityControl />
    </>
  );
}

function QualityControl() {
  const labs = ["Burst Testing Machine","Box Compression Tester","COBB Tester","Moisture Tester","GSM Testing","Vernier Caliper","Flute % Checker"];
  const certs = ["ISO 9001","ISO 14001","ISO 45001"];
  return (
    <section className="py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="Quality Control" title={<>Quality, <span className="text-gradient-brand">measured</span> end-to-end.</>} />
        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 reveal rounded-3xl overflow-hidden">
            <img src={qualityImg} alt="Allpak quality lab" loading="lazy" className="w-full h-[500px] object-cover" />
          </div>
          <div className="lg:col-span-6 reveal">
            <h3 className="font-display font-bold text-3xl text-ink">Lab equipment</h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {labs.map((l) => (
                <div key={l} className="flex items-center gap-3 rounded-xl bg-card border border-border px-4 py-3">
                  <ShieldCheck className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm font-medium text-foreground/85">{l}</span>
                </div>
              ))}
            </div>
            <h3 className="mt-12 font-display font-bold text-3xl text-ink">Certifications</h3>
            <div className="mt-6 flex flex-wrap gap-4">
              {certs.map((c) => (
                <div key={c} className="flex items-center gap-3 rounded-2xl bg-ink text-cream px-6 py-4 hover-lift">
                  <Award className="h-5 w-5 text-primary-soft" />
                  <span className="font-display font-bold">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
