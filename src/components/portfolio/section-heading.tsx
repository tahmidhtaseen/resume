"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Formal index, e.g. "01". */
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("flex flex-col gap-4", className)}
    >
      {/* Eyebrow row: number + label + rule */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-semibold tabular-nums text-primary">
          {index}
        </span>
        <span className="h-px w-8 bg-primary/40" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {eyebrow}
        </span>
      </div>

      <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  );
}
