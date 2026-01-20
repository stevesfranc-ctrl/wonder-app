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
      className="relative overflow-hidden rounded-lg shadow-lg border max-w-[300px] border-[#2A0E61]"
    >
      <Image
        src={`wonder-app/${src}`}
        alt={title}
        width={1000}
        height={800}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-gray-400">{title}</h1>
        <p className="mt-2 text-gray-400">{description}</p>
      </div>
    </Link>
  );
};
