"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

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
        <span className="developer text-4xl font-semibold leading-normal text-white">
          Projets et Collaborations
        </span>
        .
      </h1>

      <p className="mt-8 space-y-4 text-base leading-[1.85rem] text-zinc-600 dark:text-zinc-400">
        J&apos;ai eu l&apos;occasion de travailler sur plusieurs projets passionnants, notamment dans le domaine de la fintech.
      </p>

    </div>
  );
};
