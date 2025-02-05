import React from "react";

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientBorder = ({
  children,
  className = "",
}: GradientBorderProps) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative">{children}</div>
    </div>
  );
};
