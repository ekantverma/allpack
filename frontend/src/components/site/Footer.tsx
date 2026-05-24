import { Link } from "@tanstack/react-router";
import { Package, Mail, Phone, Globe, MapPin, Linkedin, Instagram, Facebook, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-ink text-cream">
      <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary text-primary-foreground">
                <Package className="h-5 w-5" />
              </span>
              <span className="font-display font-bold text-xl">Allpak Packaging</span>
            </div>
            <p className="mt-5 text-sm text-cream/70 leading-relaxed max-w-sm">
              Premium corrugated packaging built on 25+ years of trust, quality and partnership
              with India's leading brands.
            </p>
            {/* <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
              <label className="block text-xs uppercase tracking-[0.2em] text-cream/50 mb-3">
                Newsletter
              </label>
              <div className="flex rounded-full border border-white/15 bg-white/5 backdrop-blur p-1.5">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent px-4 py-2 text-sm placeholder:text-cream/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="grid place-items-center h-10 w-10 rounded-full bg-primary text-primary-foreground transition-transform hover:translate-x-0.5"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form> */}
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-cream mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              {[
                { to: "/about", l: "About Us" },
                { to: "/infrastructure", l: "Infrastructure" },
                { to: "/careers", l: "Careers" },
                { to: "/contact", l: "Contact" },
              ].map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="transition-colors hover:text-primary">
                    {i.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-cream mb-5">Products</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              {[
                "3-9 Ply Corrugated Boxes",
                "Mono Cartons",
                "Mailer & Self-Lock Boxes",
                "Master Cartons",
                "Printed Boxes",
              ].map((i) => (
                <li key={i}>
                  <Link to="/products" className="transition-colors hover:text-primary">
                    {i}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-cream mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary"/>+91 9167005491</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary"/>parikshit@allpakpackaging.com</li>
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary"/>Industrial plot 69, Damanganga industrial estate, Beside Jecor lights, Karvad road, Vapi</li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid place-items-center h-10 w-10 rounded-full border border-white/15 transition-all hover:bg-primary hover:border-primary hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-center text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Allpak Packaging. All rights reserved.</p>
          <p>Crafted with precision. Delivered with trust.</p>
        </div>
      </div>
    </footer>
  );
}
