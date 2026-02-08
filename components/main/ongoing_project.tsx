import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    display: "swap",
});

export const MyProjects = () => {
    return (
        <div id="about-me" className="relative  flex-col md:flex-row !h-full w-full flex  gap-10 md:gap-20 items-start justify-center overflow-hidden">

            <div className=" text-white flex-1 text-start">
                <div className="flex h-full w-full flex-col items-start justify-start z-[20]">
                    <h1
                        className="
           font-heading
          text-4xl
          font-bold
          tracking-tight
          
          text-white
          sm:text-5xl
          leading-tight
        "
                    >
                        <span className="developer md:leading-loose leading-normal">
                            ZuidPay Api
                        </span>
                    </h1>

                    <div className="  flex flex-col gap-3">
                        <p
                            className={cn(
                                "text-base font-light tracking-tight text-zinc-400  text-pretty sm:leading-[1.8rem]",
                                poppins.className
                            )}
                        >c&apos;est la promesse d&apos;un futur où
                            le paiement sans contact n&apos;est plus un luxe,
                            mais une réalité accessible en Afrique, ZuidPay est une solution FinTech qui transforme la manière dont les Africains payent au quotidien.

                        </p>

                        <a
                            href="/steves_franc_t_cv.pdf"
                            download
                            className="
    inline-flex
    items-center
    justify-center
    h-[42px]
    px-6
    mt-9
    max-w-[200px]
    text-md
    text-gray-200
    bg-[rgba(3,0,20,0.37)]
    border border-[rgba(112,66,248,0.38)]
    rounded-full
    hover:bg-[rgba(112,66,248,0.15)]
    transition
    duration-200
    text-sm
  "
                        >
                            Je veux tester l&apos;API
                        </a>



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

            <div className="">
                <img
                    src={`/projects/fintech.png`}
                    alt=""
                    className="object-contain  w-full h-full "
                />
            </div>


        </div>
    );
}