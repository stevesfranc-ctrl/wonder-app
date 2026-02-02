import ContactSection from "@/components/main/contact";
import { Footer } from "@/components/main/footer";
import ParallaxSection from "@/components/main/ParallaxSection";
import { Swipper } from "@/components/sub/swiper";
import { poppins } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function AboutMe() {
    return (
        <main className=" h-auto w-full ">

            <section className="relative text-white overflow-hidden">
                {/* Shapes décoratives */}
                <div className="absolute hidden md:block right-0 top-0 w-[420px] h-[520px]  z-0" />
                <div className="absolute hidden md:block right-24 top-32 w-[320px] h-[420px] border-2 border-white/80 z-10" />
                <div className="absolute hidden md:block left-1/2 top-1/4 w-16 h-16 bg-red-500 z-0" />

                {/* Contenu */}
                <div className="relative z-20 max-w-7xl mx-auto md:px-8 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Texte */}
                    <div>
                        <p className="text-sm text-gray-300 mb-2">Je m'appelle,</p>

                        <h1 className="
          mt-5
          font-heading
          text-4xl
          font-bold
          tracking-tight
          dark:text-zinc-100
          sm:text-5xl
          leading-tight
        " >
                            Steves
                        </h1>

                        <h2 className="text-2xl font-light mb-6 mt-4">

                            <span className="
          mt-5
          font-heading
          font-bold
          tracking-tight
          !text-lg
          dark:text-zinc-100
          leading-tight
        " >
                                Développeur
                            </span>

                            &nbsp;

                            <span className="
          mt-5
          font-heading
          text-4xl
          font-bold
          tracking-tight
          dark:text-zinc-100
          sm:text-5xl
          leading-tight
        " >
                                Logiciel
                            </span>

                        </h2>

                        <p className="text-gray-300 leading-relaxed max-w-md mb-8">
                            Développeur passionné par la création d’expériences digitales modernes.
                            Je conçois des applications performantes, élégantes et orientées utilisateur,
                            en combinant design, frontend et architectures backend solides resident actuellement en Belgique 🇧🇪.
                        </p>

                        <div className="flex gap-4">
                            <div
                                className="
    inline-flex items-center justify-center
    h-[42px] px-5
    text-sm font-semibold
    rounded-full
    text-white
    bg-gradient-to-r from-red-400 to-red-500
  "
                            >
                                Passionné par l'évangile de JESUS CHRIST 🥰
                            </div>


                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative hidden md:flex justify-center">
                        <div className="relative w-[320px] h-[420px] z-20 overflow-hidden">
                            {/* <img
              src="/wonder-app/projects/toff.png" 
              alt="Profile"
              className="object-cover !h-[500px]"
            /> */}
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex flex-col  mt-[10px] relative w-full">

                <div id="about-me" className="relative flex-col md:flex-row !h-full w-full flex md:py-20 gap-10 md:gap-20 items-center justify-center overflow-hidden">
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
                                <span className="developer ">
                                    Steves c'est aussi une passion
                                </span>{" "}
                                <span className="community">
                                    pour des véhicules de luxe
                                </span>.
                            </h1>

                            <div className="mt-10 space-y-4 text-base leading-[1.85rem] text-zinc-600 dark:text-zinc-400">
                                <p className={cn(poppins.className)}>
                                    J’ai eu l’occasion d’assister à plusieurs reprises au{" "}
                                    <a
                                        href="https://www.autosalon.be/fr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium text-red-500 hover:underline"
                                    >
                                        Salon de l’Auto de Belgique
                                    </a>
                                    , un événement incontournable qui nourrit ma passion pour
                                    l’excellence automobile et les technologies de pointe.
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
                    <div className=" mt-auto pt-15 h-full text-lg leading-relaxed flex-1 hidden md:flex flex-col items-center justify-center">

                        <div className="absolute inset-0 top-0 bottom-0 right-0  -z-10 opacity-50">
                            <img
                                src="/wonder-app/projects/cars.png"
                                alt=""
                                className="w-full h-full object-cover blur-sm"

                            />
                        </div>
                    </div>


                </div>

                {/* <Swipper /> */}

                {/* <ContactSection /> */}

            </div>



                       <div className="flex flex-col  mt-[10px] relative">

           <div id="about-me" className="relative flex-col md:flex-row !h-full w-full flex  md:py-20 gap-10 md:gap-20 items-center justify-center overflow-hidden">
  <div className=" text-white flex-1">
    <div className="flex h-full w-full flex-col items-start justify-center mt-[20px] z-[20] px-4">
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
        <span className="developer ">
          Steves, c'est aussi une passion
        </span>{" "}
        <span className="community">
          pour la décoration intérieure
        </span>.
      </h1>

      <div className="mt-10 space-y-4 text-base leading-[1.85rem] text-zinc-600 dark:text-zinc-400">
        <p className={cn(poppins.className)}>
          J’ai toujours été fasciné par l’art de transformer un espace en un lieu chaleureux et harmonieux. 
          Que ce soit par le choix des couleurs, l’agencement du mobilier ou les petits détails décoratifs, 
          chaque élément contribue à créer une atmosphère unique et agréable.
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

  <div className=" mt-auto pt-15 h-full text-lg leading-relaxed flex-1 hidden md:flex flex-col items-center justify-center">
    <div className="absolute inset-0 top-0 bottom-0 right-0  -z-10 opacity-50">
      <img
        src="/wonder-app/projects/home.JPG"
        alt="Décoration intérieure"
        className="w-full h-full object-cover rounded-sm"
      />
    </div>
  </div>
</div>






                {/* <Swipper /> */}

                <ContactSection />

            </div>

            <Footer />
        </main>
    );
}