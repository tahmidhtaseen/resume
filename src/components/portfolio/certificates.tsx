"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { certificates, interests } from "@/lib/portfolio-data";

const interestEmojis: Record<string, string> = {
  Reading: "📚",
  Traveling: "✈️",
  Volunteering: "🤝",
  Writing: "✍️",
  Sports: "⚽",
  Theater: "🎭",
  Gardening: "🌱",
};

export function Certificates() {
  return (
    <section id="certificates" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certificates & Interests"
          title="Certified skills, human interests"
          description="Formal credentials that back up my expertise — and the passions that keep me balanced."
        />

        {/* Certificates */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="group relative h-full overflow-hidden border-border/70 transition-all hover:border-primary/40 hover:shadow-xl">
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
                <CardContent className="relative p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-emerald-600 text-primary-foreground shadow-lg shadow-primary/20">
                      <cert.icon className="h-6 w-6" />
                    </div>
                    <ShieldCheck className="h-5 w-5 text-emerald-500" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-foreground">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    {cert.issuer}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-8">
            <h3 className="text-lg font-bold text-foreground">
              Beyond the keyboard
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              The interests that recharge me and shape how I connect with people.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {interests.map((interest, idx) => (
                <motion.span
                  key={interest.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                >
                  <span className="text-base">
                    {interestEmojis[interest.label] ?? "✨"}
                  </span>
                  {interest.label}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
