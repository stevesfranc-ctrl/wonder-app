import { caveat } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
       rel="noreferrer noopener"
      className="relative cursor-pointer mt-3 overflow-hidden max-w-[600px] flex items-center gap-2 group"
    >
      <div className="overflow-hidden h-full">
        <div className="h-40 mb-4 transition-transform duration-300 hover:scale-105 flex items-center justify-center border bg-white text-white font-bold !overflow-hidden">
          <img
            src={`${src}`}
            alt={title}
            className=" rounded-md object-cover bg-center  shadow-sm overflow-hidden"
          />
        </div>
        <div className="">
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
            <span className={cn("font-semibold text-3xl developer leading-loose", caveat.className)}>
              {title}
            </span>
          </h1>
          <p className="space-y-4 text-[14px] leading-[1.5rem dark:text-zinc-400 mt-2 text-[#919294]">
            {description}

          </p>
        </div>
      </div>
    </Link>

  );
};
