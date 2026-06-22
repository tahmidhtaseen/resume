"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/portfolio/whatsapp-icon";
import { profile, stats } from "@/lib/portfolio-data";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Left: editorial text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="font-mono text-xs font-semibold tabular-nums text-primary">
                00
              </span>
              <span className="h-px w-8 bg-primary/40" />
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-3 text-lg font-medium text-muted-foreground sm:text-xl"
            >
              {profile.tagline}
              <span className="mx-2 text-border">·</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                Dhaka, Bangladesh
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground"
            >
              {profile.enthusiasm}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button
                size="lg"
                onClick={() => scrollTo("contact")}
                className="h-11 rounded-md px-6"
              >
                Get in touch
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
              <a
                href={profile.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right: refined info panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-xl border border-border bg-card p-6 sm:p-7">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Current role
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    Support Engineer
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Avant Technology Ltd.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Open
                </span>
              </div>

              <div className="my-6 h-px w-full bg-border" />

              {/* Stats — clean list, not boxes */}
              <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-2xl font-semibold tracking-tight text-foreground">
                      {stat.value}
                      <span className="text-primary">{stat.suffix}</span>
                    </dt>
                    <dd className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="my-6 h-px w-full bg-border" />

              {/* WhatsApp row */}
              <a
                href={profile.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    Reach me directly
                  </p>
                  <p className="truncate text-sm font-semibold text-foreground">
                    {profile.phoneDisplay}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
