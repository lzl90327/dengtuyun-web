"use client";

import { Building2, Factory, Truck, Warehouse } from "lucide-react";
import { motion } from "motion/react";

import { COPY } from "@/lib/copy";
import { cn } from "@/lib/utils";

interface TestimonialLogosProps {
  className?: string;
}

// Placeholder client logos using icons
const clients = [
  { name: "某头部物流企业", icon: Truck },
  { name: "某制造业集团", icon: Factory },
  { name: "某供应链平台", icon: Warehouse },
  { name: "某产业园区", icon: Building2 },
];

export const TestimonialLogos = ({ className }: TestimonialLogosProps) => {
  const H = COPY.hero;

  return (
    <div className={cn("container", className)}>
      <div className="flex flex-col items-center gap-6">
        {/* Label */}
        <p className="text-sm text-muted-foreground/80">
          {H.testimonialText || "已服务多家头部物流企业"}
        </p>

        {/* Logos row */}
        <div className="flex items-center justify-center gap-8 md:gap-12">
          {clients.map((client, i) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="group flex flex-col items-center gap-2"
              >
                <div className="flex items-center justify-center size-12 rounded-xl bg-muted/50 border border-muted-foreground/10 transition-colors group-hover:bg-muted group-hover:border-muted-foreground/20">
                  <Icon className="size-6 text-muted-foreground/60" strokeWidth={1.5} />
                </div>
                <span className="text-xs text-muted-foreground/60 font-medium">
                  {client.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
