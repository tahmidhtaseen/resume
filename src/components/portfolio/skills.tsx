"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { skillCategories } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to keep systems running."
          description="A practical toolkit built through formal study, industrial attachment, and real-world deployment work."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="bg-card p-6 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-foreground">
                  {cat.title}
                </h3>
                <span className="text-xs font-medium text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {cat.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
