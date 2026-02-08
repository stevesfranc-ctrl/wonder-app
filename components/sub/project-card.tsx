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
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-xl shadow-lg border max-w-[600px]"
    >
      <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
        <div className="h-40 flex items-center justify-center bg-white text-white font-bold">
          <img
            src={`${src}`}
            alt={title}
            className="w-full h-full object-cover bg-center"
          />
        </div>
        <div className="p-5">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2 shadow-2xl">
          </p>
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
            <span className=" font-semibold text-2xl developer leading-loose">
              {title}
            </span>
          </h1>
          <p className="space-y-4 text-base leading-[1.85rem] text-zinc-600 dark:text-zinc-400 mt-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
