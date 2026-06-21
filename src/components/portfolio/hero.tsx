"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/portfolio/whatsapp-icon";
import { profile, stats, socials } from "@/lib/portfolio-data";

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
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Available &amp; eager to collaborate
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{profile.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-4 text-xl font-semibold text-foreground sm:text-2xl"
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0 mx-auto"
            >
              {profile.enthusiasm}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => scrollTo("contact")}
                className="rounded-full shadow-lg shadow-primary/25"
              >
                Let&apos;s Work Together
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
              <a
                href={profile.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
                WhatsApp Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 flex flex-col items-center gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                {profile.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.36 }}
              className="mt-6 flex items-center justify-center gap-2.5 lg:justify-start"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <s.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: profile card + stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Floating accents */}
              <div className="pointer-events-none absolute -right-3 -top-3 h-20 w-20 rounded-2xl bg-amber-400/30 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-primary/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-7">
                {/* Header: name-forward, no avatar icon */}
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-lg font-bold text-foreground">
                      {profile.name}
                    </p>
                    <p className="truncate text-sm text-muted-foreground">
                      {profile.title}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    Open to work
                  </span>
                </div>

                {/* Divider */}
                <div className="my-5 h-px w-full bg-border" />

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-border/70 bg-background/60 p-4 text-center"
                    >
                      <div className="text-2xl font-extrabold text-foreground">
                        {stat.value}
                        <span className="text-primary">{stat.suffix}</span>
                      </div>
                      <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={profile.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center gap-3 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-4 transition-all hover:border-[#25D366]/60 hover:bg-[#25D366]/10"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md shadow-[#25D366]/30">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Reach me instantly
                    </p>
                    <p className="truncate text-sm font-bold text-foreground">
                      {profile.phoneDisplay}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#1ebe5d]" />
                </a>

                {/* Currently note */}
                <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Currently:
                    </span>{" "}
                    Supporting surveillance deployments at the Bangladesh Police
                    HQ while pursuing a B.Sc. in CSE.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary md:flex"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-current p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-current"
          />
        </span>
      </motion.button>
    </section>
  );
}
