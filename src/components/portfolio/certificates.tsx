"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { certificates, interests } from "@/lib/portfolio-data";

export function Certificates() {
  return (
    <section
      id="certificates"
      className="relative border-t border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Certificates & Interests"
          title="Certified skills, human interests."
          description="Formal credentials that back up my expertise — and the passions that keep me balanced."
        />

        {/* Certificates */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-card p-6 sm:p-7"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium text-primary">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <ShieldCheck className="h-5 w-5 text-primary/60" />
              </div>
              <h3 className="mt-4 text-base font-semibold leading-snug text-foreground">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {cert.issuer}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-xl border border-border bg-card p-6 sm:p-8"
        >
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Beyond the keyboard
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            The interests that recharge me and shape how I connect with people.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {interests.map((interest) => (
              <span
                key={interest.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/30 px-4 py-2 text-sm font-medium text-foreground/80"
              >
                <span className="text-base leading-none">
                  {interest.emoji}
                </span>
                {interest.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
