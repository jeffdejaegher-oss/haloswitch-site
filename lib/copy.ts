const PLACEHOLDER_INBOX = "hello@haloswitch.com";

function mailto(subject: string): `mailto:${string}` {
  return `mailto:${PLACEHOLDER_INBOX}?subject=${encodeURIComponent(subject)}`;
}

export type MailtoCta = {
  readonly label: string;
  readonly href: `mailto:${string}`;
};

export type HashCta = {
  readonly label: string;
  readonly href: `#${string}`;
};

export const siteCopy = {
  seo: {
    title: "Halo Switch | Microsoft 365 Business Premium — On in 24 Hours",
    description:
      "You buy Microsoft 365 Business Premium. We turn it on in 24 hours. New or current tenant. Fixed package $8,000–$11,000. Not a reseller. Not an MSP.",
  },
  brand: "Halo Switch",
  hero: {
    eyebrow: "Microsoft 365 Business Premium",
    headline: "We flip the switch.",
    subhead: "You buy the licenses. We turn them on.",
    tagline:
      "HaloSwitch is what you thought you were getting when you bought Microsoft 365.",
    proof: "24 hours. $8,000–$11,000 per tenant. New or current.",
    primary: {
      label: "Start a tenant turn-on",
      href: mailto("Start a tenant turn-on"),
    },
    secondary: {
      label: "See what’s included",
      href: "#offer",
    },
  },
  offer: {
    id: "offer",
    headline: "A working tenant. Fixed package.",
    body: "Halo Switch is the productized 24-hour turn-on for Microsoft 365 Business Premium. You buy the SKU. We analyze the new or current tenant and finish the configuration so it actually works.",
    bullets: [
      "Entra, Microsoft 365, Teams, Intune, Defender baseline",
      "Copilot config if licensed (licenses not included)",
      "Hand-back: a tenant that’s on",
    ],
  },
  tracks: {
    id: "tracks",
    headline: "Two tracks. One clock.",
    newTenant: {
      label: "New tenant",
      body: "Greenfield. We build it right the first time.",
    },
    currentTenant: {
      label: "Current tenant",
      body: "Analyze + remediate. We finish what was left unfinished.",
    },
    both: {
      label: "Both",
      body: "Business Premium only. Year one. 24 hours.",
    },
  },
  scope: {
    id: "scope",
    headline: "$8,000–$11,000 per tenant.",
    included: {
      label: "Included",
      body: "Full configuration for Microsoft 365 Business Premium — new or current — in 24 hours, within the published package scope.",
    },
    notIncluded: {
      label: "Not included (extra)",
      body: "Migrations · custom apps · Copilot licenses · on-prem · 24/7 support",
    },
    proof: "The clock. The price. The scope. No invented logos.",
  },
  audience: {
    id: "audience",
    headline: "Built for Business Premium teams.",
    forWhom: {
      label: "For",
      body: "SMB owners and managers (≤300 users) who just bought the SKU — or already have an unfinished tenant — and don’t want a six-month IT project.",
    },
    alsoFor: {
      label: "Also for",
      body: "CSPs, resellers, accountants, bookkeepers, and IT handymen who sell licenses but won’t configure them.",
    },
    notYearOne: {
      label: "Not year one",
      body: "E3/E5 enterprises · heavy hybrid rebuilds · long migrations",
    },
  },
  cta: {
    id: "cta",
    headline: "Ready to flip the switch?",
    body: "You buy Microsoft 365 Business Premium. Halo Switch turns it on in 24 hours.",
    tagline:
      "HaloSwitch is what you thought you were getting when you bought Microsoft 365.",
    primary: {
      label: "Start a tenant turn-on",
      href: mailto("Start a tenant turn-on"),
    },
    secondary: {
      label: "Talk about your tenant",
      href: mailto("Talk about your tenant"),
    },
    microcopy: "Not a reseller. Not an MSP. Fixed scope.",
  },
} as const;

export type SiteCopy = typeof siteCopy;
