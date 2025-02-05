import React from "react";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedGradientText = ({
  children,
  className = "",
}: AnimatedGradientTextProps) => {
  return (
    <span
      className={`inline-block animate-text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-[200%_auto] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
};
