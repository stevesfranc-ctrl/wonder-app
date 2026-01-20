import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (


    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg bg-white py-10">
      <ul className="mt-12 flex gap-16 max-md:justify-between">
  <li><a href="https://github.com/sanity-io" aria-label="GitHub"><svg className="h-21 w-21" viewBox="0 0 100 100"><use href="/iconophor/icon?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F3do82whm%2Fnext%2F229b0a8937b71b8209a8b498a737710c8c2473da-100x100.svg&amp;symbol=true&amp;replace-colors=currentColor#icon"></use></svg></a></li>
  <li><a href="https://www.youtube.com/@sanity_io" aria-label="YouTube">YouTube Icon</a></li>
  <li><a href="https://www.linkedin.com/company/sanity-io" aria-label="LinkedIn">LinkedIn Icon</a></li>
  <li><a href="httpNs://bsky.app/profile/sanity.io" aria-label="BlueSky">BlueSky Icon</a></li>
  <li><a href="https://x.com/sanity_io" aria-label="X (Twitter)">Twitter Icon</a></li>
  <li><a href="/feed/rss" aria-label="RSS">RSS Icon</a></li>
  <li><a href="https://snty.link/community" aria-label="Discord">Discord Icon</a></li>
</ul>

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