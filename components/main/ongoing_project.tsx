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
        <div className="w-full h-full bg-white  pb-20 flex  gap-4">

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
                    <div className="font-heading text-2xl font-bold tracking-tight text-primary-600 sm:leading-none lg:text-4xl text-zinc-400 ">
                        My current work
                    </div>
                </div>

                <div className="max-w-3xl h-auto mx-autno mt-8 flex flex-col gap-3">
                    <p
                        className={cn(
                            "text-base font-light tracking-tight text-zinc-400  text-pretty sm:leading-[1.8rem]",
                            poppins.className
                        )}
                    >
                        I work on developing solutions based on NFC (Near Field Communication) technology to simplify everyday processes and significantly reduce the time spent on repetitive tasks.
                    </p>

                    <p className="text-base font-light tracking-tight text-zinc-400  text-pretty sm:leading-[1.8rem]">
                        🎯 Objective

                        To build an intelligent ecosystem where a simple gesture — such as tapping a card or device — can trigger secure and instant actions:

                        Quick access to critical information (health, identity, permissions, etc.)

                        Process automation for access control, validation, and registration

                        Enhanced user experience across public services, healthcare, education, and enterprises
                    </p>
                </div>
            </div>


        </div>
    );
}