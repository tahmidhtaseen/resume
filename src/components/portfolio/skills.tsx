"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { skillCategories } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills & Expertise"
          title="Tools I use to keep systems running"
          description="A practical toolkit built through formal study, industrial attachment, and real-world deployment work."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Card className="group h-full overflow-hidden border-border/70 transition-all hover:border-primary/40 hover:shadow-lg">
                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <cat.icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-foreground">
                        {cat.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                      >
                        {skill}
                      </span>
                    ))}
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
