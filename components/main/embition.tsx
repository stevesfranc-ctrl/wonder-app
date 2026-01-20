import { Swipper } from "../sub/swiper";
import { MyProjects } from "./ongoing_project";

export const Embition = () => {
    return (
        <div
            className="flex items-start justify-center flex-col  px-20  w-full z-[20] bg-white pt-20"
        >
            {/* <div
                className=" text-bold text-white  max-w-8xl h-auto mx-ato text-center"
            >
                <span className="font-heading text-2xl font-bold tracking-tight text-primary-600 sm:leading-none lg:text-4xl text-zinc-400 ">
                    💭 My Dream
                </span>
            </div>

            <div className="max-w-3xl h-auto mx-autno mt-8 flex flex-col gap-3">
                <p
                    className={cn(
                        "text-base font-light tracking-tight text-zinc-400  text-pretty sm:leading-[1.8rem]",
                        poppins.className
                    )}
                >
                    My dream is to build an ecosystem where people can contribute solutions to the challenges we face as a society.
                    I strongly believe that digital transformation is a key driver of development for countries in the Global South.

                    With this vision in mind, <span className=" !from-purple-500 !to-cyan-500" >I created </span>

                    <span className=" text-pretty">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
                            <a
                                href={'https://www.linkedin.com/company/104943122'}
                                target="_blank"
                                rel="noreferrer noopener"
                                className=" !from-purple-500 !to-cyan-500"                    >
                                TechZone                    </a>
                        </span>
                    </span>

                    — a platform dedicated to training and mentoring young people in technology.
                    Our ambition is clear: to shape the tech leaders of tomorrow, capable of innovating, creating impact, and driving sustainable change across Africa through digital innovation.
                </p>
            </div> */}

           
            <MyProjects />

            {/* <Swipper /> */}

        </div>
    );
}