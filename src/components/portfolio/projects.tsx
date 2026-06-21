"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Work that made a difference"
          description="Initiatives where I contributed to systems with real-world impact."
        />

        <div className="mt-14 grid gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Card className="group overflow-hidden border-border/70 transition-all hover:border-primary/40 hover:shadow-xl">
                <div className="grid gap-0 md:grid-cols-[auto_1fr]">
                  {/* Icon panel */}
                  <div className="relative flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:w-48">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
                      <project.icon className="h-8 w-8" />
                    </div>
                  </div>

                  <CardContent className="p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                        <Calendar className="h-3 w-3" />
                        {project.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        <Building2 className="h-3 w-3" />
                        {project.organization}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-primary">
                      {project.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {project.highlights.map((h) => (
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
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="rounded-full bg-muted font-medium"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
