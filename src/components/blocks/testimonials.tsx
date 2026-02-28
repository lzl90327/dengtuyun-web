"use client";

import { Check, ArrowRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { COPY } from "@/lib/copy";
import { cn } from "@/lib/utils";

const S = COPY.scenario;

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section id="scenarios" className={cn("overflow-hidden py-28 lg:py-32 scroll-mt-20", className)}>
        <div className="container">
          {/* Eyebrow */}
          <ScrollReveal>
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-muted-foreground/20 bg-muted/50 px-3 py-1 text-xs font-mono font-medium text-muted-foreground tracking-wide">
                {S.eyebrow}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                {S.title}
              </h2>
              <p className="text-muted-foreground max-w-md leading-snug">
                {S.subtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* Scenario Cards - 2 cards grid with stagger */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-12 lg:mt-20" staggerDelay={0.2}>
            {S.cards.map((card) => (
              <StaggerItem key={card.title}>
                <Card className="overflow-hidden h-full">
                  <CardContent className="flex h-full flex-col p-6">
                    <h3 className="font-display text-xl leading-tight font-bold tracking-tight mb-2">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {card.desc}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2 flex-1">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <Check className="size-4 shrink-0 mt-0.5 text-primary opacity-70" />
                          <span className="text-sm text-muted-foreground">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button variant="outline" className="shadow-md mt-6 w-fit">
                      了解详情 <ArrowRight className="size-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <ScrollReveal>
        <DashedLine
          orientation="horizontal"
          className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
        />
      </ScrollReveal>
    </>
  );
};
