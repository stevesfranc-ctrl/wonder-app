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
      className="relative shadow-lg overflow-hidden max-w-[600px]"
    >
      <div className=" rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
        <div className="h-40 mb-4 rounded-md flex items-center justify-center bg-white text-white font-bold !overflow-hidden">
          <img
            src={`${src}`}
            alt={title}
            className="w-full h-full object-cover bg-center border overflow-hidden shadow-sm"
          />
        </div>
        <div className="px-5">
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
          <p className="space-y-4 text-[13px] leading-[1.5rem] text-zinc-600 dark:text-zinc-400 mt-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
