import { Facebook, Instagram, Linkedin } from "lucide-react";
import { SITE } from "@/lib/site";

const SOCIALS = [
  { href: SITE.social.facebook, label: "Facebook", Icon: Facebook },
  { href: SITE.social.instagram, label: "Instagram", Icon: Instagram },
  { href: SITE.social.linkedin, label: "LinkedIn", Icon: Linkedin },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-paper)]">
      <div className="rainbow-bar" aria-hidden />
      <div className="mx-auto max-w-[76rem] px-6 py-16 sm:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="font-display text-2xl font-medium leading-snug text-[var(--color-ink-strong)]">
              Vrijzinnigen Nederland
            </p>
            <p className="mt-2 text-[0.95rem] italic text-[var(--color-clay)]">
              {SITE.payoff}
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--color-ink-muted)]">
              Een vereniging die mensen verbindt rond inspiratie en zingeving,
              van vrijzinnigen tot religieus humanisten.
            </p>
            <address className="mt-5 text-[0.9rem] not-italic leading-relaxed text-[var(--color-ink-subtle)]">
              {SITE.address.street}
              <br />
              {SITE.address.postalCode} {SITE.address.city}
            </address>
          </div>

          <div className="flex flex-col gap-8">
            <nav
              className="flex flex-wrap gap-x-10 gap-y-3 text-[0.95rem]"
              aria-label="Footermenu"
            >
              <a className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink-strong)]" href="#manifest">
                Wie we zijn
              </a>
              <a className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink-strong)]" href="#praktijk">
                Wat we doen
              </a>
              <a className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink-strong)]" href="#idealen">
                Idealen
              </a>
              <a className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink-strong)]" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </nav>

            <div className="flex items-center gap-3">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE.name} op ${label}`}
                  className="press grid h-11 w-11 place-items-center rounded-full text-white shadow-sm transition-[filter] hover:brightness-95"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  <Icon size={19} strokeWidth={2} aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-[var(--color-rule-soft)] pt-6 text-[0.8rem] text-[var(--color-ink-subtle)]">
          <span>© {year} Vrijzinnigen Nederland</span>
          <span className="font-display italic">Sinds {SITE.foundingYear}</span>
        </div>
      </div>
    </footer>
  );
}
