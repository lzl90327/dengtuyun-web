"use client";

import { ChevronRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { FeatureIcon, getFeatureIconVariant } from "@/components/feature-icons";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { COPY } from "@/lib/copy";

const C = COPY.capability;

export const Features = () => {
  return (
    <section id="capabilities" className="pb-28 lg:pb-32 scroll-mt-20">
      <div className="container">
        {/* Top dashed line with text */}
        <ScrollReveal>
          <div className="relative flex items-center justify-center">
            <DashedLine className="text-muted-foreground" />
            <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
              {C.eyebrow}
            </span>
          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-10 grid max-w-4xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              {C.title}
            </h2>
            <p className="text-muted-foreground leading-snug">
              {C.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Features Card - 3 capability cards with stagger animation */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            <StaggerContainer className="contents" staggerDelay={0.15}>
              {C.cards.map((card, i) => (
                <StaggerItem key={i} className="contents">
                  <div className="flex flex-1 max-md:flex-col">
                    <div className="flex-1 p-6">
                      {/* Custom Feature Icon */}
                      <div className="mb-4">
                        <FeatureIcon variant={getFeatureIconVariant(i)} />
                      </div>

                      <h3 className="font-display text-xl leading-tight font-bold tracking-tight mb-2">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {card.desc}
                      </p>

                      {/* Bullets with subtle bullets */}
                      <ul className="space-y-2">
                        {card.bullets.map((bullet, bi) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <span className="flex items-center justify-center size-4 shrink-0 mt-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium">
                              {bi + 1}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="group flex items-center justify-between gap-4 pt-6 mt-auto">
                        <div className="rounded-full border p-2">
                          <ChevronRight className="size-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                    {i < C.cards.length - 1 && (
                      <div className="relative hidden md:block">
                        <DashedLine orientation="vertical" />
                      </div>
                    )}
                    {i < C.cards.length - 1 && (
                      <div className="relative block md:hidden">
                        <DashedLine orientation="horizontal" />
                      </div>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
