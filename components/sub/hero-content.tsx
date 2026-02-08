"use client";

export const HeroContent = () => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-center z-[20] md:pt-24">
      <h1
        className="
          mt-5
          font-heading
          text-4xl
          font-bold
          tracking-tight
          text-zinc-100
          sm:text-5xl
          leading-tight
        "
      >
        <span className="developer md:leading-loose leading-normal">
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
