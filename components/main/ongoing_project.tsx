import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    display: "swap",
});

export const MyProjects = () => {
    return (
        <div id="about-me" className="relative flex-col md:flex-row !h-full w-full max-w-[400px] flex  gap-10 md:gap-20 items-center justify-center overflow-hidden">
            <div className=" mt-auto  h-full text-lg leading-relaxed ">

     <div className="w-80 h-80">
                    <img
                        src={`/wonder-app/projects/fintech.png`}
                        alt=""
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className=" text-white flex-1">
                    <div className="flex h-full w-full flex-col items-start justify-center  z-[20]">
                        <h1
                            className="
           font-heading
          text-4xl
          font-bold
          tracking-tight
          text-zinc-800
          dark:text-zinc-100
          sm:text-5xl
          leading-tight
        "
                        >
                            <span className="developer md:leading-loose leading-normal">
                                ZuidPay Api
                            </span>
                        </h1>

                        <div className="max-w-3xl h-auto mx-autno  flex flex-col gap-3">
                            <p
                                className={cn(
                                    "text-base font-light tracking-tight text-zinc-400  text-pretty sm:leading-[1.8rem]",
                                    poppins.className
                                )}
                            >
                                c’est la promesse d’un futur où
                                le paiement sans contact n’est plus un luxe,
                                mais une réalité accessible en Afrique, ZuidPay est une solution FinTech qui transforme la manière dont les Africains payent au quotidien. 
                            </p> 

                            <div
                                className="
      pointer-events-none
      absolute inset-0
      
      bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
      bg-[size:48px_48px]
      opacity-30
    "
                            />
                        </div>
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

           
            </div>

        </div>
    );
}