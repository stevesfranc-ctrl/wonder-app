'use client';
import { useState } from "react";
import Link from "next/link";

import { NAV_LINKS } from "@/public/projects";
import MenuItemComponent from "./menuItemComponent";
import { usePathname } from "next/navigation";
import AvatarQuote from "./avatarQuote";

export const Navbar = () => {

  const pathname = usePathname();

  return (

    <div className="h-auto relative w-auto">

      <div className=" hidden  md:flex items-center fixed top-0 left-0 right-0 px-4  backdrop-blur-md z-[9999999999999999] pt-[15px] md:px-20">

        {/* Navbar Container */}
        <div className=" hidden h-full md:flex items-center justify-between max-w-full md:max-w-6xl mx-auto flex-1 ">
          {/* Logo + Name */}
          <Link
            href="/"
            className="flex items-center p-0"
          >

            {/* <AvatarQuote /> */}
            <div className="w-[50px] h-[50px] rounded-full border-2 border-white md:-mr-[-30px] ml-0">
              <img
                src="/profil.JPG"
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
                  className={`px-4 py-2 transition-colors cursor-pointer text-sm font-normal md:mx-0 mx-2 text-nowrap ${link.link === pathname
                    ? "text-white font-bold"
                    : "text-gray-600 hover:text-white"
                    }`}
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
              className="
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
  "
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