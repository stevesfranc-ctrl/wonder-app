import ContactSection from "@/components/main/contact";
import { Embition } from "@/components/main/embition";
import { Footer } from "@/components/main/footer";
import { MyProjects } from "@/components/main/ongoing_project";
import { StarsCanvas } from "@/components/main/star-background";
import { poppins } from "@/constants";
import { cn } from "@/lib/utils";

export default function MyWorkPage() {
  return (
    <main className=" h-auto w-full ">
      <div className="flex flex-col  mt-10 ">
      
        <div id="about-me" className="relative flex-col md:flex-row !h-full w-full flex py-20 gap-10 md:gap-20 items-center justify-center overflow-hidden">
          <div className=" text-white flex-1">
            <div className="flex h-full w-full flex-col items-start justify-center mt-[20px] z-[20]">
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
                  Kerima
                </span>{" "} <br />
                <span className="community">
                  Cooming soon
                </span>.
              </h1>

              <div className="mt-10 space-y-4 text-base leading-[1.85rem] text-zinc-600 dark:text-zinc-400">
                <p  className={cn(
                                            poppins.className
                                        )}>
                  C’est une plateforme qui transforme vos déplacements quotidiens en opportunités concrètes. Grâce à la technologie et l’innovation, chaque trajet devient une expérience enrichissante, rapide et sécurisée.
                </p>
                <div>
                  <a
                    href="/wonder-app/steves_franc_t_cv.pdf"
                    download
                    className="
    inline-flex
    items-center
    justify-center
    h-[42px]
    px-6
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
                    Visiter Kerima
                  </a>
                </div>
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
          <div className=" mt-auto pt-15 h-full text-lg leading-relaxed flex-1  flex flex-col items-center justify-center">

            <div className="absolute inset-0 top-0 bottom-0 right-0  -z-10 opacity-50">
              <img
                src="/wonder-app/projects/travel-girl.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

       <div className="w-full  my-20">
         <MyProjects />
       </div>

        {/* <div className="w-full  flex  gap-4">

          <div className="w-[400px] h-[400px] overflow-hidden">
            <iframe src="https://kerima-app.vercel.app" width="100%" height="100%"></iframe>

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
                  Kerima
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
                🎯 Objective

                To build an intelligent ecosystem where a simple gesture — such as tapping a card or device — can trigger secure and instant actions:

                Quick access to critical information (health, identity, permissions, etc.)

                Process automation for access control, validation, and registration

                Enhanced user experience across public services, healthcare, education, and enterprises
              </p>
            </div>
          </div>


        </div> */}


        {/* <StarsCanvas /> */}

        <ContactSection />

      </div>

      <Footer />

    </main>
  );
}