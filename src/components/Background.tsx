import React from "react";

interface BackgroundProps {
  variant?: "left" | "right" | "center" | "start";
}
 {/* Círculos de luz difuminados 
          <div className="pointer-events-none absolute top-20 right-40 w-[200px] h-[200px] rounded-full bg-lime-300/30 blur-3xl animate-pulse"></div>
          <div className="pointer-events-none absolute bottom-40 left-20 w-[250px] h-[250px] rounded-full bg-green-400/20 blur-3xl animate-pulse"></div>*/}
export default function Background({ variant = "left" }: BackgroundProps) {
  const base = "absolute w-[520px] h-[450px] rounded-full blur-[160px] opacity-45 pointer-events-none";
   if (variant === "start") {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className={`${base} top-[-50] left-[-50] bg-lime-500/70 `} />
        <div className={`${base} bottom-70 left-100 bg-yellow-400/60`} />
      </div>
    );
  }
  if (variant === "left") {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className={`${base} top-75 left-[-10] bg-lime-500/70 `} />
        <div className={`${base} bottom-90 left-100 bg-yellow-400/50`} />
      </div>
    );
  }

  if (variant === "right") {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className={`${base} top-80 right-[-100] bg-yellow-400/70 animate-pulse`} />
        <div className={`${base} bottom-75 right-100 bg-lime-500/60`} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className={`${base} top-1/3 left-1/2 bg-lime-600/80`} />
    </div>
  );
}
