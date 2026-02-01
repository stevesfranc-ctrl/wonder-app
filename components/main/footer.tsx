import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (


    <div className="w-full h-full text-gray-200 shadow-lg py-1  border border-white/10 rounded-lg
    bg-slate-9500 my-10 flex  flex-col px-6">

        <div className="mt-8 text-start space-y-4 text-base leading-[1.85rem] text-zinc-600 dark:text-zinc-400">
          <p>
            <span className="font-normal text-gray-400 font-euclid">© {new Date().getFullYear()} Steves Franc. Tous droits réservés.</span>,
           </p> 
        </div>

      <ul className="my-6 flex gap-16">
        <li><a href="https://www.youtube.com/@sanity_io" className="font-normal text-gray-400" aria-label="YouTube">YouTube Icon</a></li>
        <li><a href="https://www.linkedin.com/in/franc-steves-b99806232/" className="font-normal text-gray-400" aria-label="LinkedIn">LinkedIn</a></li>
        <li><a href="httpNs://bsky.app/profile/sanity.io" className="font-normal text-gray-400" aria-label="BlueSky">BlueSky Icon</a></li>
        <li><a href="https://x.com/sanity_io" className="font-normal text-gray-400" aria-label="X (Twitter)">Twitter Icon</a></li>
        <li><a href="/feed/rss" className="font-normal text-gray-400" aria-label="RSS">RSS Icon</a></li>
        <li><a href="https://snty.link/community" className="font-normal text-gray-400" aria-label="Discord">Discord Icon</a></li>
      </ul>

        <div
    className="
      pointer-events-none
      absolute inset-0
      bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
      bg-[size:48px_48px]
      opacity-30
    "
  />

      {/* <div classNameName="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-[15px]"
                >
                  {Icon && <Icon />}
                  <span className="text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; John Doe {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div> */}


 
    </div>
  );
};