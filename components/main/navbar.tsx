'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className=" h-[65px] fixed top-0 left-0 right-0 px-4  backdrop-blur-md z-[9999999999999999] pt-[15px] md:px-20">
      {/* Navbar Container */}
      <div className=" h-full flex items-center justify-between max-w-full md:max-w-6xl mx-auto flex-1 ">
        {/* Logo + Name */}
        <Link
          href="/#about-me"
          className="flex items-center p-0"
        >
          <div className="w-[50px] h-[50px] rounded-full border-2 border-white md:-mr-[-30px] ml-0">
            <img
              src="/wonder-app/profil.JPG"
              alt="Logo"
              draggable={false}
              className="cursor-pointer rounded-full object-cover w-full h-full"
            />
          </div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex flex-1 max-w-full md:max-w-[400px] h-full flex-row items-center justify-between md:mr-20 pb-4">
          <div className="hidden md:flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer text-sm font-normal"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="  flex flex-row gap-5 ">
          <a
            href="/wonder-app/steves_franc_t_cv.pdf"
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
  );
};