"use client";

import { caveat } from "@/app/fonts";
import { cn } from "@/lib/utils";

export const HeroContent = () => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-center z-[20] md:pt-24">
      <h1
        className={cn(" mt-5 font-caveat text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl leading-tight")}
      >
        <span className={cn(" md:leading-loose leading-normal md:text-[65px]  font-[700]", caveat.className)}>
              Architecte logiciel & Analyste Fintech
          </span>
      </h1>
    </div>
  );
};
