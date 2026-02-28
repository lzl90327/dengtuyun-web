import React from "react";

import { cn } from "@/lib/utils";

type BackgroundProps = {
  children: React.ReactNode;
  variant?: "top" | "bottom";
  className?: string;
  showDotGrid?: boolean;
};

export const Background = ({
  children,
  variant = "top",
  className,
  showDotGrid = true,
}: BackgroundProps) => {
  return (
    <div
      className={cn(
        "relative mx-2.5 mt-2.5 lg:mx-4 overflow-hidden",
        variant === "top" &&
          "from-primary/50 via-background to-background/80 rounded-t-4xl rounded-b-2xl bg-linear-to-b via-20%",
        variant === "bottom" &&
          "from-background via-background to-primary/50 rounded-t-2xl rounded-b-4xl bg-linear-to-b",
        className,
      )}
    >
      {/* Dot grid texture - Linear style */}
      {showDotGrid && (
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
            maskImage: `linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};
