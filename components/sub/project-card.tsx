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
      href={'/project/12/shipping'}
       rel="noreferrer noopener"
      className="relative cursor-pointer mt-3 overflow-hidden max-w-[600px] flex items-center gap-2 text-white"
    >
      <div className="rounded-xl overflow-hidden h-full">
        <div className="h-40 mb-4 rounded-md flex items-center justify-center bg-white text-white font-bold !overflow-hidden">
          <img
            src={`${src}`}
            alt={title}
            className="w-full h-full object-cover bg-center border overflow-hidden shadow-sm"
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
            <span className=" font-semibold text-2xl developer leading-loose">
              {title}
            </span>
          </h1>
          <p className="space-y-4 text-[13px] leading-[1.5rem] text-zinc-600 dark:text-zinc-400 mt-2 ">
            {description}

            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="relative cursor-pointer mt-3 overflow-hidden max-w-[600px] flex items-center gap-2 text-white"
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 7.58333V11.0833C10.5 11.3928 10.3771 11.6895 10.1583 11.9083C9.9395 12.1271 9.64275 12.25 9.33333 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V4.66667C1.75 4.35725 1.87292 4.0605 2.09171 3.84171C2.3105 3.62292 2.60725 3.5 2.91667 3.5H6.41667" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.75 1.75H12.25V5.25" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.83333 8.16667L12.25 1.75" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Link>
          </p>
        </div>
      </div>
    </Link>

  );
};
