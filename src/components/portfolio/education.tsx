"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="A foundation in continuous learning"
          description="From madrasah to diploma to university — each step has shaped how I think and solve problems."
        />

        <div className="mt-14 space-y-5">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <Card className="group border-border/70 transition-all hover:border-primary/40 hover:shadow-lg">
                <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <edu.icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-base font-bold text-foreground sm:text-lg">
                          {edu.degree}
                        </h3>
                        <p className="text-sm font-semibold text-primary">
                          {edu.institution}
                        </p>
                      </div>
                      {edu.score && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-600 dark:text-amber-400">
                          <Award className="h-3.5 w-3.5" />
                          {edu.score}
                        </span>
                      )}
                    </div>
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
