"use client";

export const HeroContent = () => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-center mt-[40px] z-[20]">
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
        <span className="developer leading-loose">
          Développeur Web Fullstack
        </span>{" "}
        et{" "}
        <span className="community">
          Fintech Analyste
        </span>.
      </h1>
    </div>
  );
};
