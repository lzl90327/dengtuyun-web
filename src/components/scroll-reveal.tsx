"use client";

import { ReactNode } from "react";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

const getDirectionStyles = (direction: string, state: "hidden" | "visible") => {
  const directions: Record<string, Record<string, Record<string, number>>> = {
    up: { hidden: { y: 20 }, visible: { y: 0 } },
    down: { hidden: { y: -20 }, visible: { y: 0 } },
    left: { hidden: { x: 20 }, visible: { x: 0 } },
    right: { hidden: { x: -20 }, visible: { x: 0 } },
  };

  return directions[direction]?.[state] || { y: 0 };
};

export const ScrollReveal = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = "up",
  once = true,
}: ScrollRevealProps) => {
  const hiddenStyles = getDirectionStyles(direction, "hidden");
  const visibleStyles = getDirectionStyles(direction, "visible");

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...hiddenStyles }}
      whileInView={{ opacity: 1, ...visibleStyles }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

// Stagger container for multiple items
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export const StaggerContainer = ({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) => {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      transition={{
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
};

// Stagger item for use within StaggerContainer
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export const StaggerItem = ({
  children,
  className,
  direction = "up",
}: StaggerItemProps) => {
  const hiddenStyles = getDirectionStyles(direction, "hidden");
  const visibleStyles = getDirectionStyles(direction, "visible");

  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, ...hiddenStyles },
        visible: {
          opacity: 1,
          ...visibleStyles,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Fade in scale variant
export const FadeInScale = ({
  children,
  className,
  delay = 0,
  once = true,
}: Omit<ScrollRevealProps, "direction" | "duration">) => {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
