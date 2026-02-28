"use client";

import { Truck, Eye, Shield, Users, Check, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";

interface FeatureIconProps {
  variant: "network" | "visibility" | "compliance";
  className?: string;
}

export const FeatureIcon = ({ variant, className }: FeatureIconProps) => {
  const iconConfigs = {
    network: {
      Icon: Truck,
      bgGradient: "from-blue-500/20 to-blue-600/5",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
      secondaryIcon: MapPin,
    },
    visibility: {
      Icon: Eye,
      bgGradient: "from-emerald-500/20 to-emerald-600/5",
      borderColor: "border-emerald-500/30",
      iconColor: "text-emerald-400",
      secondaryIcon: Shield,
    },
    compliance: {
      Icon: Users,
      bgGradient: "from-violet-500/20 to-violet-600/5",
      borderColor: "border-violet-500/30",
      iconColor: "text-violet-400",
      secondaryIcon: Check,
    },
  };

  const config = iconConfigs[variant];
  const { Icon, bgGradient, borderColor, iconColor, secondaryIcon: SecondaryIcon } = config;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center size-14 rounded-2xl border bg-gradient-to-br",
        bgGradient,
        borderColor,
        className
      )}
    >
      {/* Main icon */}
      <Icon className={cn("size-7", iconColor)} strokeWidth={1.5} />

      {/* Secondary icon badge */}
      <div
        className={cn(
          "absolute -bottom-1 -right-1 flex items-center justify-center size-6 rounded-full border bg-background",
          borderColor
        )}
      >
        <SecondaryIcon className={cn("size-3.5", iconColor)} strokeWidth={2} />
      </div>

      {/* Subtle glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl blur-xl opacity-50 -z-10",
          variant === "network" && "bg-blue-500/20",
          variant === "visibility" && "bg-emerald-500/20",
          variant === "compliance" && "bg-violet-500/20"
        )}
      />
    </div>
  );
};

// Feature icon with label component
interface FeatureIconWithLabelProps extends FeatureIconProps {
  title: string;
}

export const FeatureIconWithLabel = ({ variant, title, className }: FeatureIconWithLabelProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <FeatureIcon variant={variant} />
      <span className="text-sm font-medium text-foreground">{title}</span>
    </div>
  );
};

// Map capability index to icon variant
export const getFeatureIconVariant = (index: number): "network" | "visibility" | "compliance" => {
  const variants: ("network" | "visibility" | "compliance")[] = [
    "network",
    "visibility",
    "compliance",
  ];
  return variants[index] || "network";
};
