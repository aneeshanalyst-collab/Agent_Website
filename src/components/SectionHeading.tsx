import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignmentClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col mb-8 ${alignmentClass} ${className}`}>
      <h2 className="text-2xl font-bold tracking-tight text-brand-text sm:text-3xl">
        {title}
        <span className="text-brand-primary">.</span>
      </h2>
      {subtitle && <p className="mt-2 text-sm text-brand-muted max-w-2xl">{subtitle}</p>}
    </div>
  );
}
