import React from "react";

export const GradientBlob: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`absolute pointer-events-none rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-brand-600 via-sky-400 to-indigo-500 animate-pulse-slow ${className}`}
    />
  );
};
