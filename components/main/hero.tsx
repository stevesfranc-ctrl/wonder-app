"use client";

import { HeroContent } from "@/components/sub/hero-content";
import MyQRCode from "./QRCode";

export const Hero = () => {
  return (
    <div className="relative flex-col md:flex-row !h-full w-full flex py-20 gap-10 md:gap-20 items-center justify-center overflow-hidden">
      <div className=" text-white flex-1">
        <HeroContent />
        <div className="mt-10 space-y-4 text-base leading-[1.85rem] text-zinc-600 dark:text-zinc-400">
          <p>
            👋🏾 Salut, je suis &nbsp;<span className="font-medium text-zinc-900 dark:text-white">Steves Franc</span>,
            Software Engineer passionné de technologies, avec une vraie capacité à concevoir des applications solides, modernes et maintenables, aussi bien côté front-end que back-end.
          </p>
          <p>
            Je suis en parallèle, &nbsp;<span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
              Fintech Analyste
            </span>
            , je comprends les enjeux financiers, réglementaires et technologiques du secteur (paiements, data, conformité, produits financiers).
          </p>
        </div>

        <div
          className="
      pointer-events-none
      absolute inset-0
      z-10
      right-0
      bottom-0
      bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
      bg-[size:48px_48px]
      opacity-30
    "
        />

      </div>
      <div className=" mt-auto pt-15 h-full text-lg leading-relaxed flex-1 max-w-[300px] flex flex-col items-center justify-center">

        <div className="absolute inset-0 top-0 bottom-0 right-0 left-0 -z-10 opacity-50">
          <img
            src="/wonder-app/svg/fintech-animated.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>


        <div className="relative inline-flex items-center justify-center z-50">

          {/* Container QR */}
          <div
            className="
      relative
      rounded-2xl
      bg-slate-950
      p-6
      shadow-[0_20px_60px_rgba(0,0,0,0.9)]
      border border-white/10
    "
          >
            {/* Emojis décoratifs */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xl">🚀</span>
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xl">💼</span>
            <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-xl">💻</span>
            <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-xl">🔗</span>

            {/* QR Code */}
            <MyQRCode />
          </div>


        </div>

        {/* <div>
          <p className="mt-10 space-y-4 text-base leading-[1.85rem] text-zinc-600 dark:text-zinc-400 text-center">
            Scanne pour explorer mon travail récents ! 🥰
          </p>
        </div> */}
      </div>
    </div>
  );
};