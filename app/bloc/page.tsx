"use client";

import { cn } from "@/lib/utils";
import { caveat, euclid } from "../fonts";
import { CategoryCards } from "@/components/main/CategoryCards";
import ArticleTags from "@/components/main/tag";
import { useState } from "react";

export default function Bloc() {

    const [activeTag, setActiveTag] = useState(null);

    return (
        <div className="h-full w-full relative pb-8">

            <div className=" rotate-180 opacity-[0.01] left-0 top-0 right-[-180px] fixed z-0">
                <img src="/img/line.png" className=" object-cover w-full" />
            </div>

            <div className="z-50 absolute top-0 bottom-0 left-0 right-0 py-[90px] mb-20">

                <div className=" flex-col pb-8 md:py-16">

                    <h1 className={cn(
                        "mb-3  text-5xl md:text-7xl text-white",
                        caveat.className
                    )}>
                        Bienvenue sur mon <span className="bg-style bg-[position:center_60%] bg-no-repeat bg-contain whitespace-nowrap">blog</span>.
                    </h1>

                    <h2 className={cn(
                        "mb-6  text-2xl md:text-3xl text-indigo-300",
                        caveat.className
                    )}>
                        Apprendre, créer et partager.
                    </h2>

                    <p className={cn(
                        "max-w-[650px] text-sm md:text-base leading-8 text-[#919294]",
                        euclid.className
                    )}>
                        Je partage avec vous mes expériences professionnelles dans le monde du développement logiciel : de l'architecture logicielle au DevOps, en passant par le développement mobile.

                        À travers mes articles, je vous emmène dans les coulisses de mes projets.
                    </p>
                </div>

                <div className="mb-20 flex flex-col-reverse md:flex-row gap-8">

                    <div className="flex-1">
                        <CategoryCards />
                    </div>

                    <div className="flex-1 md:max-w-[200px] max-w-full">
                        <ArticleTags
                            activeTag={activeTag}
                            onTagChange={setActiveTag}
                        />                </div>
                </div>
            </div>

        </div>
    );
}