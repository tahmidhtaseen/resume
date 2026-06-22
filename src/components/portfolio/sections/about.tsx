"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { profile, languages } from "@/lib/portfolio-data";

const values = [
  {
    title: "Genuine passion",
    description:
      "I truly enjoy the craft of IT — every ticket solved and every network configured fuels my curiosity.",
  },
  {
    title: "Team-first mindset",
    description:
      "I thrive in collaboration. From engineers to end-users, I communicate clearly and listen carefully.",
  },
  {
    title: "Reliable delivery",
    description:
      "Whether it's a quick fix or a nationwide deployment, I take ownership and see things through.",
  },
  {
    title: "Always learning",
    description:
      "Technology never stands still, and neither do I. I'm continuously leveling up my skills.",
  },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Enthusiastic by nature, professional by choice."
          description="An introduction to the person behind the certifications — what drives my work and how I approach every engagement."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              {profile.summary}
            </p>
            <figure className="mt-6 border-l-2 border-primary/40 pl-5">
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">
                  My commitment:
                </span>{" "}
                {profile.enthusiasm}
              </p>
            </figure>
          </motion.div>

          {/* Languages + quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Languages
              </h3>
              <div className="mt-4 space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">
                        {lang.name}
                      </span>
                      <span className="text-muted-foreground">{lang.level}</span>
                    </div>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Quick facts
              </h3>
              <dl className="mt-4 divide-y divide-border">
                {[
                  ["Based in", "Dhaka, Bangladesh"],
                  ["Nationality", profile.nationality],
                  ["Focus", "IT Support & Networks"],
                  ["Status", "Open to work"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between gap-4 py-2.5 text-sm"
                  >
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd
                      className={
                        k === "Status"
                          ? "font-medium text-primary"
                          : "font-medium text-foreground"
                      }
                    >
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="bg-card p-6"
            >
              <span className="text-xs font-medium text-primary">
                0{i + 1}
              </span>
              <h4 className="mt-3 text-base font-semibold text-foreground">
                {v.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
