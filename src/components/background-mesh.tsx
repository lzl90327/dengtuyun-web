import React from "react";

import { cn } from "@/lib/utils";

type BackgroundMeshProps = {
  children: React.ReactNode;
  className?: string;
};

export const BackgroundMesh = ({
  children,
  className,
}: BackgroundMeshProps) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Mesh gradient orbs - creates depth and visual interest */}
      <div
        className="pointer-events-none absolute -top-1/2 left-1/4 h-[800px] w-[800px] rounded-full opacity-20 blur-3xl"
        style={{
          background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`,
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-1/4 right-1/4 h-[600px] w-[600px] rounded-full opacity-15 blur-3xl"
        style={{
          background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`,
        }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{
          background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`,
        }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {children}
    </div>
  );
};
