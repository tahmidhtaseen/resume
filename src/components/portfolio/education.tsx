"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { education } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section
      id="education"
      className="relative border-t border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="A foundation in continuous learning."
          description="From madrasah to diploma to university — each step has shaped how I think and solve problems."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="bg-card p-6 sm:p-7"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {edu.institution}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {edu.location}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {edu.detail}
                  </p>
                </div>

                {/* Highlighted result / score badge */}
                {edu.score && (
                  <div className="flex shrink-0 items-center gap-2.5 self-start rounded-lg border border-primary/20 bg-primary/[0.06] px-3.5 py-2.5">
                    <span className="text-lg leading-none">🏆</span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                        Result
                      </p>
                      <p className="text-sm font-bold text-foreground">
                        {edu.score}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
