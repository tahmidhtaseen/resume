"use client";

import { ArrowUp } from "lucide-react";
import { WhatsAppIcon } from "@/components/portfolio/whatsapp-icon";
import { profile, sectionMeta, socials } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-semibold tracking-tight text-foreground">
                Tahmid Ta-Seen
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {profile.title} based in Dhaka, Bangladesh — passionate about IT
              support, networks, and collaborating with great people. Always
              open to new opportunities.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2">
              {sectionMeta.slice(1).map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="font-mono text-[11px] tabular-nums text-muted-foreground/50">
                      {item.index}
                    </span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  {profile.phoneDisplay}
                </a>
              </li>
              <li className="text-muted-foreground">{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} {profile.name}. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
