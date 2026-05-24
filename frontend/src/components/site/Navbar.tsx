import { Link } from "@tanstack/react-router";
import { Menu, X, Package } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/products", label: "Products" },
  // { to: "/what-is-packaging", label: "What is Packaging" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 py-3 shadow-sm"
          : "bg-white/20 backdrop-blur-lg shadow-lg py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between gap-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 group p-2 rounded-xl"
          onClick={() => setOpen(false)}
        >
          {/* <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary text-primary-foreground shadow-soft transition-transform duration-500 group-hover:rotate-6">
            <Package className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="font-display font-bold text-lg tracking-tight text-ink">
            Allpak<span className="text-primary"> Packaging</span>
          </span> */}
          <img src={logo} alt="logo" className="h-12 w-auto rounded-0 object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant"
        >
          Get a Quote
        </Link>

        <button
          aria-label="Toggle menu"
          className="lg:hidden grid place-items-center h-10 w-10 rounded-lg border border-border bg-background/70 backdrop-blur"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] z-50 transition-transform duration-500 ease-in will-change-transform ${
          open ? "translate-y-0" : "-translate-y-[120%]"
        }`}
        style={{
          transform: open ? "translate3d(0,0,0)" : "translate3d(0,-120%,0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        <div className="m-4 rounded-2xl bg-white/95 border border-white/10 p-6 shadow-2xl backdrop-blur-lg ">
          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-medium text-black5 hover:bg-black/10 hover:text-primary transition-colors duration-200"
                activeProps={{ className: "bg-white/10 text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 text-center rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
