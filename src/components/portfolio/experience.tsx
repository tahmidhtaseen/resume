"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've made an impact"
          description="Real-world roles where I've delivered support, deployed systems, and grown as a professional."
        />

        <div className="relative mt-14">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent sm:left-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative pl-12 sm:pl-0 ${
                    isLeft ? "sm:pr-[52%]" : "sm:pl-[52%]"
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background shadow-md sm:left-1/2 sm:-translate-x-1/2">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-lg sm:p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-primary">
                      {exp.company}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="rounded-full bg-muted font-medium"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
