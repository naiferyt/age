import React from "react";

export const GridPattern: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none opacity-[0.035] ${className}`}
      style={{
        backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }}
    />
  );
};
