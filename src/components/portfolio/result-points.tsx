"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { ResultPoint } from "@/lib/portfolio-data";

interface ResultPointsProps {
  points: ResultPoint[];
  /** Delay stagger base in seconds. */
  baseDelay?: number;
}

/**
 * Renders achievement / result points with a special highlighted treatment:
 * a tinted panel with a primary accent rail, a "Key results" label, and each
 * point prefixed with a tasteful emoji inside a soft badge.
 */
export function ResultPoints({ points, baseDelay = 0 }: ResultPointsProps) {
  if (points.length === 0) return null;

  return (
    <div className="mt-5 overflow-hidden rounded-lg border border-primary/20 bg-primary/[0.04]">
      <div className="flex items-center gap-2 border-b border-primary/15 px-4 py-2.5">
        <Sparkles className="h-3.5 w-3.5 text-primary" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
          Key results
        </span>
      </div>
      <ul className="divide-y divide-primary/10">
        {points.map((point, idx) => (
          <motion.li
            key={point.text}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: baseDelay + idx * 0.07 }}
            className="flex items-start gap-3 px-4 py-3"
          >
            <span
              aria-hidden="true"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-background text-sm shadow-sm"
            >
              {point.emoji}
            </span>
            <span className="pt-0.5 text-[13.5px] leading-relaxed font-medium text-foreground/90">
              {point.text}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
