"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { ResultPoints } from "@/components/portfolio/result-points";
import { experiences } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Professional Experience"
          title="Roles where I have delivered measurable impact."
          description="A record of the positions in which I have provided support, deployed systems, and grown as a professional."
        />

        <div className="mt-14">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="relative grid grid-cols-[auto_1fr] gap-5 pb-12 last:pb-0 sm:gap-8"
            >
              {/* Timeline rail */}
              <div className="flex flex-col items-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-xs font-semibold text-primary">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {idx < experiences.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-border" />
                )}
              </div>

              {/* Content */}
              <div className="pt-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-medium text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-primary">
                  {exp.company}
                </p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {exp.location}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                <ResultPoints points={exp.highlights} baseDelay={0.1} />

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
