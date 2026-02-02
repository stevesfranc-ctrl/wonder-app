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
        <div className="w-full h-full pb-20 flex  gap-4">

            <div>
                <Image
                    alt="Logo"
                    src={`/wonder-app/skills/app.png`}
                    draggable={false}
                    width={600}
                    height={900}
                    className="cursor-pointer"
                />
            </div>

            <div>
                <div
                    className=" text-bold text-white "
                >


                    <h1
                        className="
          mt-5
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
                        </span>{" "}
                    </h1>
                </div>

                <div className="max-w-3xl h-auto mx-autno mt-8 flex flex-col gap-3">
                    <p
                        className={cn(
                            "text-base font-light tracking-tight text-zinc-400  text-pretty sm:leading-[1.8rem]",
                            poppins.className
                        )}
                    >
                        c’est la promesse d’un futur où
                        le paiement sans contact n’est plus un luxe,
                        mais une réalité accessible en Afrique.
                    </p>

                    <p className="text-base font-light tracking-tight text-zinc-400  text-pretty sm:leading-[1.8rem]">
                        ZuidPay est une solution FinTech qui transforme la manière dont les Africains payent au quotidien. Elle permet de réaliser des transactions rapides et sécurisées sans contact, même dans les zones où l’infrastructure bancaire traditionnelle est limitée. En combinant technologie mobile avancée, sécurité de pointe et accessibilité universelle, ZuidPay vise à faire du paiement digital une norme et non un luxe, rapprochant l’Afrique d’un futur économique inclusif et connecté.
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


        </div>
    );
}