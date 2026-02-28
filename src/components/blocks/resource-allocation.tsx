"use client";

import { Check } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";
import { COPY } from "@/lib/copy";
import { cn } from "@/lib/utils";

const T = COPY.trust;

export const ResourceAllocation = () => {
  return (
    <section id="trust" className="overflow-hidden pb-28 lg:pb-32 scroll-mt-20">
      <div className="">
        {/* Eyebrow */}
        <ScrollReveal>
          <div className="container text-center mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-muted-foreground/20 bg-muted/50 px-3 py-1 text-xs font-mono font-medium text-muted-foreground tracking-wide">
              {T.eyebrow}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl">
            {T.title}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="container text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
            {T.subtitle}
          </p>
        </ScrollReveal>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <ScrollReveal>
            <DashedLine
              orientation="horizontal"
              className="container scale-x-105"
            />
          </ScrollReveal>

          {/* Trust Blocks Grid - 3 items with stagger */}
          <StaggerContainer className="relative container grid max-w-7xl md:grid-cols-3" staggerDelay={0.15}>
            {T.blocks.map((block, i) => (
              <StaggerItem key={i}>
                <Block
                  block={block}
                  isLast={i === T.blocks.length - 1}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal delay={0.3}>
            <DashedLine
              orientation="horizontal"
              className="container max-w-7xl scale-x-110"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

interface BlockProps {
  block: { title: string; bullets: readonly string[] };
  isLast?: boolean;
}

const Block = ({ block, isLast }: BlockProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8"
      )}
    >
      <div className="text-balance">
        <h3 className="font-semibold text-xl mb-4">{block.title}</h3>

        <ul className="space-y-3">
          {block.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <Check className="size-4 shrink-0 mt-0.5 text-primary opacity-60" />
              <span className="text-muted-foreground">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {!isLast && (
        <>
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-md:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute inset-x-0 bottom-0 md:hidden"
          />
        </>
      )}
    </div>
  );
};
