import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "outline" | "success" | "warning" | "error";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors duration-200";

  const variants = {
    default: "bg-brand-border/60 text-brand-text hover:bg-brand-border",
    primary: "bg-brand-primary/10 text-brand-primary border border-brand-primary/20",
    outline: "border border-brand-border text-brand-text",
    success: "bg-brand-success/10 text-brand-success border border-brand-success/20",
    warning: "bg-brand-warning/10 text-brand-warning border border-brand-warning/20",
    error: "bg-brand-error/10 text-brand-error border border-brand-error/20",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
