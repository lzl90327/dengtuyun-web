"use client";

import {
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  Truck,
  Eye,
  Wallet,
} from "lucide-react";
import { motion } from "motion/react";

import { DashedLine } from "@/components/dashed-line";
import { TestimonialLogos } from "@/components/testimonial-logos";
import { Button } from "@/components/ui/button";
import { COPY } from "@/lib/copy";

const H = COPY.hero;

// Stats icons mapping
const statIcons = [Truck, TrendingUp, Eye, Wallet];

// Count up animation component
const CountUp = ({ value }: { value: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {value}
    </motion.span>
  );
};

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-70" />
            {H.eyebrow}
          </span>

          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap mt-4">
            {H.title}
          </h1>

          <p className="text-muted-foreground text-lg mt-5 md:text-xl max-w-xl">
            {H.subtitle}
          </p>

          {/* Capsules */}
          <div className="mt-5 flex items-center gap-2 flex-wrap">
            {H.capsules.map((cap, i) => (
              <motion.span
                key={cap}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                className="inline-flex items-center rounded-full border border-muted-foreground/20 bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {cap}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="#cta">{H.ctaPrimary}</a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a href="#cta" className="max-w-56 truncate text-start md:max-w-none">
                {H.ctaSecondary}
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>

          {/* Testimonial Logos */}
          <div className="mt-12 pt-8 border-t border-muted-foreground/10">
            <TestimonialLogos />
          </div>
        </motion.div>

        {/* Right side - Stats */}
        <motion.div
          className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {H.stats.map((stat, index) => {
            const Icon = statIcons[index] || TrendingUp;
            return (
              <motion.div
                key={stat.label}
                className="flex gap-2.5 lg:gap-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative">
                  <Icon className="text-primary mt-1 size-4 shrink-0 lg:size-5" />
                  {/* Subtle progress ring */}
                  <div className="absolute inset-0 -m-1 rounded-full border border-primary/10" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <h2 className="font-text text-foreground font-semibold text-2xl">
                      <CountUp value={stat.value} />
                    </h2>
                    {/* Trend indicator */}
                    <span className="inline-flex items-center gap-0.5 text-xs font-medium text-emerald-400">
                      <ArrowUpRight className="size-3" />
                      {stat.trend}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {stat.label}
                  </p>
                  <p className="text-muted-foreground/60 text-xs mt-0.5">
                    {stat.trendLabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Hero image removed per requirements */}
    </section>
  );
};
