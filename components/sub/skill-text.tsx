"use client";

import { cn } from "@/lib/utils";
import { caveat } from "@/app/fonts";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col ">
      <h1
        className="
    mt-5
    font-heading
    text-4xl
    font-bold
    tracking-tight
    text-white
    sm:text-5xl
    leading-tight
  "
      >
        <span className={cn("developer text-4xl font-semibold leading-normal text-white", caveat.className)}>
          Projets et Collaborations
        </span>
        .
      </h1>

      <p className="mt-8 space-y-4 text-base leading-[1.85rem] text-[#919294]">
        Découvrez une sélection de projets auxquels j&apos;ai contribué, de la conception d&apos;architectures logicielles à la mise en œuvre de solutions robustes et évolutives, notamment dans les domaines de la fintech, des microservices et des applications cloud-native.
      </p>
    </div>
  );
};
