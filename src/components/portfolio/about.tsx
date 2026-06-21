"use client";

import { motion } from "framer-motion";
import { Quote, Heart, Users, Target, Zap } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { profile, languages } from "@/lib/portfolio-data";

const values = [
  {
    icon: Heart,
    title: "Genuine Passion",
    description:
      "I truly enjoy the craft of IT — every ticket solved and every network configured fuels my curiosity.",
  },
  {
    icon: Users,
    title: "Team-First Mindset",
    description:
      "I thrive in collaboration. From engineers to end-users, I communicate clearly and listen carefully.",
  },
  {
    icon: Target,
    title: "Reliable Delivery",
    description:
      "Whether it's a quick fix or a nationwide deployment, I take ownership and see things through.",
  },
  {
    icon: Zap,
    title: "Always Learning",
    description:
      "Technology never stands still, and neither do I. I'm continuously leveling up my skills.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Enthusiastic by nature, professional by choice"
          description="Get to know the person behind the certifications — what drives me and how I approach my work."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full overflow-hidden border-border/70">
              <CardContent className="p-6 sm:p-8">
                <Quote className="h-8 w-8 text-primary/30" />
                <p className="mt-4 text-lg leading-relaxed text-foreground/90">
                  {profile.summary}
                </p>
                <div className="mt-6 rounded-2xl border border-amber-400/30 bg-amber-400/5 p-5">
                  <p className="text-base leading-relaxed text-foreground/90">
                    <span className="font-semibold text-amber-600 dark:text-amber-400">
                      My promise:
                    </span>{" "}
                    {profile.enthusiasm}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Languages + quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <Card className="border-border/70">
              <CardContent className="p-6">
                <h3 className="text-base font-bold text-foreground">Languages</h3>
                <div className="mt-4 space-y-4">
                  {languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-foreground">
                          {lang.name}
                        </span>
                        <span className="text-muted-foreground">{lang.level}</span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/70">
              <CardContent className="p-6">
                <h3 className="text-base font-bold text-foreground">Quick Facts</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Based in</dt>
                    <dd className="font-medium text-foreground">Dhaka, Bangladesh</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Nationality</dt>
                    <dd className="font-medium text-foreground">{profile.nationality}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Focus</dt>
                    <dd className="font-medium text-foreground">IT Support & Networks</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Status</dt>
                    <dd className="font-medium text-emerald-600 dark:text-emerald-400">
                      Open to work
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Card className="group h-full border-border/70 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <CardContent className="p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-base font-bold text-foreground">
                    {v.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
