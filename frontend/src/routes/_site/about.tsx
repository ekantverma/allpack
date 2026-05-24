import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Award, Heart, Handshake, Sparkles, Target, Eye, Users, TrendingUp, ShieldCheck, HeartHandshake  } from "lucide-react";
import storyImg from "@/assets/story-boxes.jpg";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About Us - Allpak Packaging" },
      {
        name: "description",
        content:
          "A 25+ year journey of trust, family-led leadership and packaging innovation for India's leading brands.",
      },
      { property: "og:title", content: "About Us -Allpak Packaging" },
      {
        property: "og:description",
        content: "Built across generations on quality, reliability and long-term partnerships.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  return (
    <>
      <PageHero
        eyebrow="About Allpak"
        title={
          <>
            A legacy of <span className="italic font-serif text-accent">trust</span>, built across
            generations.
          </>
        }
        subtitle="From a vision rooted in quality to serving India's most loved brands."
      />

      <section className="py-20 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 reveal">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ink leading-[1.1]">
              The story of Allpak <span className="text-gradient-brand">begins with people</span>.
            </h2>
            <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                More than 25 years ago,{" "}
                <strong className="text-foreground">Rajkumar Ganeriwal</strong> founded Allpak
                Packaging with a vision built on quality, trust, and long-term relationships. What
                began as a humble entrepreneurial journey has grown into a respected family-run
                enterprise serving customers with consistency and care.
              </p>

              <p>
                Today, the business is actively managed by{" "}
                <strong className="text-foreground">Vikkas Ganeriwal</strong> and{" "}
                <strong className="text-foreground">Parikshit Ganeriwal</strong>, combining
                experience with modern thinking. This balance of legacy and innovation has helped
                Allpak Packaging grow while staying true to its roots.
              </p>

              <p>
                As a family business, every relationship matters. Every product reflects the care,
                responsibility, and commitment that have defined Allpak Packaging for over two
                decades.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 reveal rounded-3xl overflow-hidden">
            <img
              src={storyImg}
              alt="Allpak boxes"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-32 bg-cream">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            title={
              <>
                A timeline of <span className="text-gradient-brand">growth</span>.
              </>
            }
            align="center"
          />
          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {[
              {
                y: "1998",
                t: "Foundation",
                d: "Rajkumar Ganeriwal establishes Allpak Packaging with one corrugation line.",
              },
              {
                y: "2005",
                t: "Scale up",
                d: "Second plant added; semi-auto machinery introduced to serve growing FMCG demand.",
              },
              {
                y: "2012",
                t: "Cold chain",
                d: "Dedicated cold-chain capability launched for frozen and chilled supply chains.",
              },
              {
                y: "2018",
                t: "Next generation",
                d: "Vikkas & Parikshit Ganeriwal lead a generational transition.",
              },
              // {
              //   y: "2023",
              //   t: "Automation",
              //   d: "Auto-board line commissioned -1500+ tonnes monthly capacity unlocked.",
              // },
              { y : "2026",
                t : "Expansion",
                d : "Manufacturing unit expanded with enhanced production infrastructure amd increased operational capacity to support growing demand across industries."
              }
            ].map((e, i) => (
              <div
                key={i}
                className={`reveal relative mb-12 md:grid md:grid-cols-2 gap-10 ${i % 2 ? "md:[direction:rtl]" : ""}`}
              >
                <div
                  className={`pl-14 md:pl-0 md:[direction:ltr] ${i % 2 ? "md:text-right md:pr-14" : "md:pl-14"}`}
                >
                  <div className="font-display font-bold text-3xl text-gradient-brand">{e.y}</div>
                  <h4 className="mt-1 font-display font-bold text-xl text-ink">{e.t}</h4>
                  <p className="mt-2 text-muted-foreground">{e.d}</p>
                </div>
                <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary ring-4 ring-cream" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Eye,
              t: "Vision",
              d: "To be India's most trusted packaging partner -engineering boxes that protect every product through every journey.",
            },
            {
              icon: Target,
              t: "Mission",
              d: "Deliver consistent quality, dependable timelines and continuous innovation to every brand we serve, regardless of scale.",
            },
          ].map((x, i) => (
            <div
              key={i}
              className="reveal rounded-3xl bg-card border border-border p-10 hover-lift"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="grid place-items-center h-14 w-14 rounded-2xl bg-primary text-primary-foreground mb-6">
                <x.icon className="h-7 w-7" />
              </span>
              <h3 className="font-display font-bold text-3xl text-ink">{x.t}</h3>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
<section className="py-16 lg:py-32 bg-[#f8f6f1]">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">
    
    <SectionHeader
      eyebrow="Our Values"
      title={
        <>
          The principles that drive{" "}
          <span className="text-gradient-brand">everything we do</span>.
        </>
      }
    />

    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {[
        {
          icon: Award,
          t: "Integrity",
          d: "We believe in honest commitments, transparent communication and delivering exactly what we promise.",
        },
        {
          icon: ShieldCheck,
          t: "Reliability",
          d: "Consistent quality, dependable timelines and trusted service form the backbone of our operations.",
        },
        {
          icon: HeartHandshake,
          t: "Customer First",
          d: "Every packaging solution is designed with customer satisfaction, performance and long-term value in mind.",
        },
        {
          icon: Users,
          t: "Partnerships",
          d: "We value relationships that grow over time through trust, collaboration and shared success.",
        },
        {
          icon: TrendingUp,
          t: "Continuous Growth",
          d: "By embracing innovation and improvement, we continue evolving with changing industry needs.",
        },
      ].map((v, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          
          {/* Top Gradient Line */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary-soft scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

          {/* Icon */}
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <v.icon className="h-8 w-8" />
          </div>

          {/* Title */}
          <h4 className="text-2xl font-bold tracking-tight text-black">
            {v.t}
          </h4>

          {/* Description */}
          <p className="mt-4 text-[15px] leading-7 text-black/65">
            {v.d}
          </p>

          {/* Hover Glow */}
          <div className="absolute -bottom-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Leadership */}
      <section className="py-16 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Leadership"
            title={
              <>
                Family at the <span className="text-gradient-brand">helm</span>.
              </>
            }
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              {
                n: "Rajkumar Ganeriwal",
                r: "Founder",
                d: "Laid the foundation 25+ years ago with an uncompromising commitment to quality.",
              },
              {
                n: "Vikkas Ganeriwal",
                r: "Director",
                d: "Drives operations, manufacturing excellence and long-term client partnerships.",
              },
              {
                n: "Parikshit Ganeriwal",
                r: "Director",
                d: "Leads sales, new business and the move into cold-chain and premium packaging.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="reveal rounded-3xl bg-card border border-border overflow-hidden hover-lift"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-cream to-accent/10 grid place-items-center">
                  <Sparkles className="h-12 w-12 text-primary/40" />
                </div>
                <div className="p-7">
                  <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                    {p.r}
                  </div>
                  <h4 className="mt-1 font-display font-bold text-2xl text-ink">{p.n}</h4>
                  <p className="mt-3 text-muted-foreground">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-cream via-background to-background">
      <div className="absolute top-40 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-5 lg:px-8 text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.25em] font-semibold text-primary bg-primary/10"
          style={{ animation: "fade-up 0.6s both" }}
        >
          {eyebrow}
        </span>
        <h1
          className="mt-6 font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-ink"
          style={{ animation: "fade-up 0.8s 0.15s both" }}
        >
          {title}
        </h1>
        <p
          className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          style={{ animation: "fade-up 0.9s 0.3s both" }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
