import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

import logo from "../assets/logo.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-bold tracking-tight text-foreground">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-foreground">Page Not Found</h2>

        <p className="mt-3 text-base leading-7 text-muted-foreground">
          The page you are looking for may have been removed, renamed, or is temporarily
          unavailable. Explore premium packaging solutions, gift boxes, corrugated boxes, and custom
          packaging products at AllPack Packaging.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary/90"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);

  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Something went wrong</h1>

        <p className="mt-3 text-base leading-7 text-muted-foreground">
          We encountered an unexpected issue while loading the page. Please try again or return to
          the homepage to continue exploring our premium packaging, gift boxes, custom printed
          boxes, ecommerce packaging, and industrial packaging solutions.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary/90"
          >
            Try Again
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },

      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      // Primary SEO
      {
        title: "AllPack Packaging | Premium Corrugated Packaging Solutions",
      },

      {
        name: "description",
        content:
          "AllPack Packaging is a leading corrugated packaging company offering premium corrugated boxes, custom gift boxes, ecommerce packaging, and sustainable packaging solutions for businesses across India.",
      },

      // Keywords SEO
      {
        name: "keywords",
        content:
          "packaging boxes, custom packaging boxes, gift boxes, gift packaging, packaging company India, corrugated boxes, carton boxes, cardboard boxes, ecommerce packaging, shipping boxes, paper boxes, kraft boxes, duplex boxes, rigid boxes, luxury packaging boxes, custom printed boxes, food packaging boxes, cake boxes, sweet boxes, bakery packaging, pizza boxes, burger boxes, takeaway packaging, retail packaging, cosmetic packaging, electronic packaging boxes, medicine packaging boxes, industrial packaging, packaging manufacturer, wholesale packaging supplier, eco friendly packaging, sustainable packaging, paper bags, carry bags, custom carry bags, packaging solutions, printed packaging, premium packaging boxes, custom logo packaging, fancy gift boxes, hard boxes, folding cartons, corrugated packaging manufacturer, export packaging boxes, product packaging company, online packaging supplier, packaging material supplier, packaging products India, packaging design company, packaging for small business, packaging for ecommerce brands, courier packaging boxes, strong carton boxes, packaging services India, custom box manufacturer, printed carton boxes, luxury rigid boxes, packaging for gifts, packaging for clothing brands, packaging for jewelry, packaging for cosmetics, food grade packaging, biodegradable packaging, recyclable packaging, kraft paper packaging, durable packaging boxes, attractive packaging boxes, affordable packaging solutions, custom packaging supplier India, best packaging company, top packaging manufacturer India, box manufacturer near me, packaging company near me, gift box manufacturer, cardboard packaging supplier, ecommerce box manufacturer, packaging and boxes, wholesale gift boxes, packaging boxes wholesale, online packaging boxes, premium packaging supplier, high quality packaging products, custom packaging india, allpack packaging, allpack boxes, allpack gift packaging, printed gift boxes, branded packaging boxes, packaging solutions for business, secure packaging solutions, shipping carton manufacturer, custom corrugated boxes, customized packaging solutions, retail box packaging, stylish packaging boxes, luxury gift packaging, handmade gift boxes, wedding gift boxes, festive packaging boxes, return gift boxes, dry fruit boxes, chocolate packaging boxes, mobile packaging boxes, laptop packaging boxes, custom ecommerce packaging, food delivery packaging, eco packaging solutions, strong packaging boxes, lightweight packaging boxes, packaging material company, box packaging manufacturer, online box supplier, gift wrapping boxes, fancy packaging ideas, packaging products supplier, packing box company, packaging items supplier, packaging products online, packaging boxes India, packaging for startups, packaging for brands, custom branding boxes, logo printed boxes, company packaging solutions, packing materials, custom package design, packaging products wholesale, packaging services near me, packaging factory India, best box manufacturer, packaging box printing, carton packaging supplier, all types of packaging boxes, gift packing boxes, customized gift boxes, branded gift boxes, durable shipping packaging, bulk packaging supplier, protective packaging solutions, packaging business India, packaging for online stores, secure ecommerce packaging, best quality packaging boxes, made in India packaging products, packaging wholesalers India, packing and moving boxes, printed corrugated boxes, recyclable cardboard boxes, custom luxury boxes, premium carton packaging, heavy duty packaging boxes, affordable box manufacturer, top packaging supplier India, gift box printing services, online custom packaging, business packaging solutions, fancy paper boxes, high quality corrugated packaging, shipping and packaging materials, decorative gift boxes, eco friendly gift packaging, custom food packaging boxes, kraft gift boxes, packaging industry India, packaging products manufacturer, allpack packaging solutions, allpack custom boxes, allpack premium packaging",
      },

      // Robots
      {
        name: "robots",
        content: "index, follow",
      },

      {
        name: "googlebot",
        content: "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
      },

      // Author
      {
        name: "author",
        content: "AllPack Packaging",
      },

      // Theme Color
      {
        name: "theme-color",
        content: "#000000",
      },

      // Open Graph SEO
      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:title",
        content: "AllPack Packaging | Premium Corrugated Packaging Solutions",
      },

      {
        property: "og:description",
        content:
          "Premium quality packaging company offering custom packaging boxes, luxury gift boxes, shipping cartons, ecommerce packaging, and eco-friendly packaging solutions.",
      },

      {
        property: "og:site_name",
        content: "AllPack Packaging",
      },

      {
        property: "og:locale",
        content: "en_US",
      },

      {
        property: "og:url",
        content: "https://allpackpackaging.com",
      },

      // Twitter SEO
      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content: "AllPack Packaging | Premium Packaging Boxes & Gift Packaging",
      },

      {
        name: "twitter:description",
        content:
          "Explore premium quality packaging boxes, custom gift boxes, ecommerce packaging, and eco-friendly packaging solutions.",
      },

      {
        name: "twitter:site",
        content: "@AllPackPackaging",
      },

      // Extra Google Friendly SEO Content
      {
        name: "abstract",
        content:
          "AllPack Packaging provides innovative and high-quality packaging solutions for businesses, ecommerce brands, retailers, food companies, cosmetic brands, electronics industries, and gifting businesses. Our company specializes in manufacturing durable corrugated boxes, luxury gift boxes, kraft paper packaging, printed packaging boxes, shipping cartons, retail packaging, and sustainable packaging products. We focus on modern packaging designs, strong material quality, affordable pricing, and eco-friendly production methods to help businesses improve product presentation and brand value. Whether you need customized packaging boxes for ecommerce deliveries, food packaging for restaurants, premium gift packaging for events, or industrial packaging for shipping products safely, AllPack Packaging delivers reliable and professional packaging solutions tailored to your business requirements. Our mission is to create visually attractive, secure, and sustainable packaging products that enhance customer experience and strengthen your brand identity in the competitive market.",
      },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },

      // Canonical URL
      {
        rel: "canonical",
        href: "https://allpackpackaging.com",
      },

      // Favicon
      {
        rel: "icon",
        href: logo,
      },

      // Apple Icon
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
      },

      // Preconnect Optimization
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },

      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body className="bg-background text-foreground antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
