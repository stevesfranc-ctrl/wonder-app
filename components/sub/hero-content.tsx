"use client";

export const HeroContent = () => {
  return (
    <div
      className="flex items-start justify-center flex-col  px-20 !h-full w-full z-[20]"
    >
      <div
        className=" text-bold text-white  max-w-8xl h-auto mx-ato text-center"
      >
        <span className="font-heading text-4xl font-bold tracking-tight text-primary-600 sm:leading-none lg:text-6xl text-zinc-400 ">
          👋 Hi, I'm Steves
        </span>
      </div>

      <div className="max-w-3xl h-auto mx-autno mt-8 flex flex-col gap-3">
        <span className="text-3xl font-bold font-nunito tracking-tight text-zinc-300 sm:text-5xl sm:leading-[3.5rem] text-pretty !mt-8b">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            Full Stack Developer
          </span>{" "} <span className="!text-zinc-400">& Mobile Engineer.</span>
        </span>

        <span
          className="text-base font-normal tracking-tight text-zinc-400  text-pretty"
        >
          I'm a passionate Full Stack Software Engineer specializing in web, mobile, and software development.
          I design and build efficient, scalable, and user-centric applications — from dynamic front-ends to robust back-end architectures.
        </span>
      </div>

    </div>
  );
};