import { ENTREPRISES, poppins, PROJECTS, roboto } from "@/constants";
 import Image from "next/image";
import Link from "next/link";

export const Entreprises = () => {

    return (
        <div className="px-20 bg-white h-auto flex gap-10 py-20">

            {/* <div className="  pt-20">
                <div
                    className=" text-bold text-white  max-w-8xl h-auto mx-ato"
                >
                    <span className="font-heading text-base font-bold tracking-tight text-primary-600 sm:leading-none lg:text-4xl text-white ">
                        Entreprises
                    </span>
                </div>

                <div
                    className="text-base font-normal tracking-tigh  text-pretty mt-4 text-white"
                >
                    I'm a passionate Full Stack Software Engineer specializing in web, mobile, and software development.
                    I design and build efficient, scalable, and user-centric applications — from dynamic front-ends to robust back-end architectures.
                </div>

                  <div
                    className="text-base font-normal tracking-tigh  text-pretty mt-4 text-white"
                >
                    I'm a passionate Full Stack Software Engineer specializing in web, mobile, and software development.
                    I design and build efficient, scalable, and user-centric applications — from dynamic front-ends to robust back-end architectures.
                </div>

                  <div
                    className="text-base font-normal tracking-tigh  text-pretty mt-4 text-white"
                >
                    I'm a passionate Full Stack Software Engineer specializing in web, mobile, and software development.
                    I design and build efficient, scalable, and user-centric applications — from dynamic front-ends to robust back-end architectures.
                </div>
            </div> */}

            {/* <div className="pt-20">
                   <h1 className="font-heading text-2xl font-bold tracking-tight text-primary-600 sm:leading-none lg:text-4xl text-white mb-5">
                    Experiences
                  </h1>
            
                  <span
                    className={cn(
                      "text-base font-light tracking-tight text-white  text-pretty sm:leading-[1.8rem] max-w-[70%]",
                      poppins.className
                    )}
                  >
                    I'm a passionate Full Stack Software Engineer specializing in web, mobile, and software development.
                    I design and build efficient, scalable, and user-centric applications — from dynamic front-ends to robust back-end architectures.
                  </span>
            
               </div> */}

            <div
                className="relative grid grid-cols-1 md:grid-cols-3 gap-20 border-[.9px] border-gray-100"
                style={{ "--count": ENTREPRISES.length, "--radius": "12rem" } as React.CSSProperties}
            >
                {ENTREPRISES.map((elmt, i) => (
                    <div className="flex gap-3" key={i}>
                        <Link
                            
                            href={elmt.link}
                            className=" before:absolute before:w-[.1px] before:bg-slate-700  before:left-8 before:top-8 "
                            
                        >
                            <Image
                                src={`/wonder-app/skills${elmt.image}`}
                                alt={elmt.title}
                                width={120}
                                height={120}
                                className=" bg-white object-contain  hover:scale-110 transition-transform "
                            />
                        </Link> 

                        <div>
                            <div className="font-heading text-4xl font-bold tracking-tight text-primary-600 sm:leading-none lg:text-3xl text-zinc-400 ">Mounir Holding</div>
                            <div className="font-heading text-3xl font-bold tracking-tight text-primary-600 sm:leading-none">Jan 12, 2025 - Present</div>
                            <div className="text-sm mt-3 text-zinc-400">Using tech to help youths find purpose, discover themselves, build their careers and give back to community.</div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );

}