
"use client";

import { experiences } from "@/public/projects";
import { useEffect, useState } from "react";

export default function ExperienceSection() {
    const [visible, setVisible] = useState<number[]>([]);

    useEffect(() => {
        // Animation progressive
        const interval = setInterval(() => {
            setVisible((prev) => {
                if (prev.length < experiences.length) {
                    return [...prev, prev.length];
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 300);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative md:flex justify-center  py-20 hidden">
            {/* Ligne verticale */}
            <div className="absolute left-1/2 w-1 bg-gray-300 dark:bg-gray-700 h-full -translate-x-1/2"></div>

            <div className="flex flex-col gap-24 w-full max-w-4xl">
                {experiences.map((exp, index) => {
                    const isLeft = index % 2 === 0;
                    const isVisible = visible.includes(index);

                    return (
                        <div
                            key={exp.id}
                            className={`relative flex items-center w-full transition-all duration-700 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                        >
                            {/* Tooltip */}
                            <div
                                className={`absolute top-0 w-auto md:w-80 max-w-xs p-4  shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800
                  ${isLeft ? "right-1/2 mr-10 text-right" : "left-1/2 ml-10 text-left"}
                `}
                            >
                                <div className={`flex items-center gap-3 ${isLeft ? "justify-end" : "justify-start"}`}>
                                    {isLeft ? null :

                                        <div className="flex items-center gap-4">
                                            <img src={exp.logo} alt={exp.company} className="w-10 h-10 mb-auto" />

                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white developer leading-loose">{exp.company}</h4>
                                                <p className="text-xs text-gray-500">{exp.role}</p>
                                                <p className="text-xs text-gray-400 my-3">{exp.startDate} - {exp.endDate}</p>

                                            </div>
                                        </div>

                                    }

                                    {

                                        isLeft ?

                                            <div className="flex items-center gap-4 justify-start w-full text-start">
                                                <img src={exp.logo} alt={exp.company} className="w-10 h-10  mb-auto" />

                                                <div>
                                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white ">{exp.company}</h4>
                                                    <p className="text-xs text-gray-500">{exp.role}</p>
                                                    <p className="text-xs text-gray-400 my-3">{exp.startDate} - {exp.endDate}</p>

                                                </div>
                                            </div>

                                            :

                                            null}

                                </div>


                            </div>

                            {/* Ligne connectée au point */}
                            <div
                                className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-white dark:border-gray-900`}
                            ></div>

                            {/* Ligne horizontale vers tooltip */}
                            <div
                                className={`absolute top-1/2 h-0.5 bg-gray-300 dark:bg-gray-600 ${isLeft ? "right-1/2 mr-10 origin-right w-10" : "left-1/2 ml-10 origin-left w-10"
                                    }`}
                            ></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

