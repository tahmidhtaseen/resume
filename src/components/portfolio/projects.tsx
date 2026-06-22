"use client";

import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { ResultPoints } from "@/components/portfolio/result-points";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Work that made a difference."
          description="Initiatives where I contributed to systems with real-world impact."
        />

        <div className="mt-14 grid gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {project.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    <Building2 className="h-3 w-3" />
                    {project.organization}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-primary">
                  {project.role}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ResultPoints points={project.highlights} baseDelay={0.1} />

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
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
