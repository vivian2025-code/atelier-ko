/**
 * Central theme configuration.
 *
 * Everything a new site normally needs to change lives here: the studio name,
 * navigation, footer, contact details, commerce defaults, and which products
 * are promoted on the homepage and in the mobile menu. Components read from
 * this file rather than hardcoding copy, so renaming or re-scoping the theme
 * does not mean editing markup.
 *
 * The canonical domain is NOT here — it is `site` in astro.config.mjs, so
 * there is only ever one source of truth for it.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: NavItem[];
}

export const siteConfig = {
  /** Studio name. Used in the wordmark, metadata, JSON-LD and the footer. */
  name: "MP-AirTag Type Tracker's supplier",

  /** One-line positioning statement. Emitted as the Organization slogan. */
  tagline: "Never lose track of what matters",

  /** Default meta description for pages that do not set their own. */
  description:
    "Mass Power maintain a resilient supply chain with over two years of professional experience in AirTag-type tracker projects.",

  /** Default <title> for pages that do not set their own. */
  defaultTitle: "Mass Power-AirTag Type Tracker's supplier",

  /** Contact address, linked in the footer and on the studio page. */
  email: "info@masspower.com",

  /** Used for Organization JSON-LD. */
  location: {
    region: "CN",
    country: "CN",
  },

  /** Browser theme colour. Keep in step with `--canvas` in src/styles.css. */
  themeColor: "#f4f4f2",

  /**
   * Fallback social share card, served from public/. Used by any page that
   * does not pass its own `image` — product pages pass their photography, so
   * this covers the homepage, catalogue, studio, cart and 404.
   */
  socialImage: {
    src: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Mass Power-AirTag Type Tracker's supplier",
  },

  /** Primary navigation, in order. Also drives the mobile menu. */
  navigation: [
    { label: "Index", href: "/" },
    { label: "Catalogue", href: "/catalog" },
    { label: "About", href: "/about" },
  ] satisfies NavItem[],

  /** Short paragraph in the first footer column. */
  footerBlurb:
    "Locate anything, anywhere.",

  /** Footer link columns. Add or remove columns freely. */
  footerColumns: [
    {
      heading: "Catalogue",
      links: [
        { label: "Tracker", href: "/catalog" },
        { label: "About", href: "/about" },
        { label: "Index", href: "/index" },
      ],
    },
    {
      heading: "Enquiries",
      links: [
        { label: "Custom orders", href: "/about#studio" },
        { label: "Trade portal", href: "/about#studio" },
        { label: "Company visits", href: "/about#studio" },
      ],
    },
    {
      heading: "Elsewhere",
      links: [{ label: "Instagram", href: "https://www.instagram.com/" }],
    },
  ] satisfies FooterColumn[],

  /** Commerce defaults. */
  commerce: {
    /** BCP 47 locale used to format every price. */
    locale: "en-US",
    /** ISO 4217 currency code. */
    currency: "USD",
    /** Flat delivery charge added once when the cart is not empty. */
    shippingFlatRate: 120,
  },

  /**
   * Which products the theme promotes. Each value is a filename in
   * src/content/products without the .md extension. A slug that does not
   * resolve fails the build rather than rendering an empty section.
   */
  featured: {
    /** Three cards in the homepage "in the workshop" grid. */
    homepageGrid: ["arvid-chair", "low-plinth-table", "tora-desk"],
    /** The single large piece given its own homepage section. */
    homepageSolo: "monolith-bench",
    /** The piece shown at the foot of the mobile menu. */
    mobileMenu: "oken-stool",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/**
 * Builds a page <title> in the theme's house format: "Page — Studio Name".
 * Change the separator here to restyle every title at once.
 */
export function pageTitle(page: string): string {
  return `${page} — ${siteConfig.name}`;
}
