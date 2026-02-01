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
      <div className="bg-zinc-200 dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
        <div className="h-48 flex items-center justify-center bg-white text-white font-bold">
          <Image
            src={`${src}`}
            alt={title}
            width={1000}
            height={100}
            className="w-full object-contain"
          />
        </div>
        <div className="p-5">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2 shadow-2xl">
          </p>
          <h1
            className="
          mt-20
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
