'use client';
import { useState } from "react";
import Link from "next/link";

import { NAV_LINKS } from "@/public/projects";
import MenuItemComponent from "./menuItemComponent";
import { usePathname } from "next/navigation";
import AvatarQuote from "./avatarQuote";
import { caveat, euclid, kugile } from "@/app/fonts";
import { cn } from "@/lib/utils";

export const Navbar = () => {

  const pathname = usePathname();

  return (

    <div className="h-auto relative w-auto">

      <div className=" hidden md:flex items-center relative   backdrop-blur-md z-[9999999999999999]  ">

        {/* Navbar Container */}
        <div className=" hidden h-full md:flex items-center justify-between max-w-full md:max-w-6xl mx-auto flex-1 ">
          {/* Logo + Name */}
          <Link
            href="/"
            className="flex items-center p-0"
          >

            {/* <AvatarQuote /> */}
            <div className=" h-[60px] rounded-full md:-mr-[-30px] ml-0">
              <img
                src="/steve'swork.png"
                alt="Logo"
                draggable={false}
                className="cursor-pointer rounded-full object-cover w-full h-full"
              />
            </div>
          </Link>
          {/* Web Navbar */}
          <div className=" flex flex-1 max-w-full md:max-w-[400px] h-full flex-row items-center justify-between md:mr-20 md:pb-4">
            <div className="flex items-center justify-between w-full py-1 h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mx-[15px] px-[10px]  mt-2 rounded-full text-gray-200">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.link}

                  className={
                    cn(`px-4 py-2 transition-colors cursor-pointer text-sm font-normal md:mx-0 mx-2 text-nowrap ${link.link === pathname
                    ? "text-white font-[600px]"
                    : "text-gray-600 hover:text-white"
                    }`, euclid.className)
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className=" hidden md:flex flex-row gap-5 ">
            <a
              href="/steves_franc_t_cv.pdf"
              download
              className={cn(`
    inline-flex
    items-center
    justify-center
    h-[42px]
    px-6
    text-md
    text-gray-200
    bg-[rgba(3,0,20,0.37)]
    border border-[rgba(112,66,248,0.38)]
    rounded-full
    hover:bg-[rgba(112,66,248,0.15)]
    transition
    duration-200
    text-sm
  `,  euclid.className)}
            >
              ⬇️ &nbsp; Télécharger CV
            </a>

          </div>
        </div>
      </div>

      <MenuItemComponent />
    </div>

  );
};