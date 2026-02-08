"use client";

import { NAV_LINKS } from "@/public/projects";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Menu() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const pathname = usePathname();

    return (
        <nav className="z-[9999999999] relative">
            <div className="md:hidden py-2 flex justify-between items-center">

                {isMobileMenuOpen ?

                    <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="w-[25px] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#ffffff"></path></g></svg>
                    </div>

                    :

                    <div className="w-[50px] h-[50px] rounded-full border-2 border-white md:-mr-[-30px] ml-0">
                        <img
                            src="/profil.JPG"
                            alt="Logo"
                            draggable={false}
                            className="cursor-pointer rounded-full object-cover w-full h-full"
                        />
                    </div>
                }

                <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="w-[25px] flex items-center justify-center">
                    <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M19 3.32001H16C14.8954 3.32001 14 4.21544 14 5.32001V8.32001C14 9.42458 14.8954 10.32 16 10.32H19C20.1046 10.32 21 9.42458 21 8.32001V5.32001C21 4.21544 20.1046 3.32001 19 3.32001Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M8 3.32001H5C3.89543 3.32001 3 4.21544 3 5.32001V8.32001C3 9.42458 3.89543 10.32 5 10.32H8C9.10457 10.32 10 9.42458 10 8.32001V5.32001C10 4.21544 9.10457 3.32001 8 3.32001Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M19 14.32H16C14.8954 14.32 14 15.2154 14 16.32V19.32C14 20.4246 14.8954 21.32 16 21.32H19C20.1046 21.32 21 20.4246 21 19.32V16.32C21 15.2154 20.1046 14.32 19 14.32Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M8 14.32H5C3.89543 14.32 3 15.2154 3 16.32V19.32C3 20.4246 3.89543 21.32 5 21.32H8C9.10457 21.32 10 20.4246 10 19.32V16.32C10 15.2154 9.10457 14.32 8 14.32Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>

                </div>
                <div style={isMobileMenuOpen ? styles.show : styles.close} className="md:hidden fixed top-0 right-0 bottom-0 w-56  shadow-lg  bg-[#1a1444] p-4 z-[999999999999999999999999999]">

                    <div
                        className="
      pointer-events-none
      absolute inset-0
      z-10
      right-0
      bottom-0
      bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
      bg-[size:48px_48px]
      opacity-30
    "
                    />
                    {NAV_LINKS.map((item, index) => (

                        <div style={styles.item} key={index}>
                            <Link
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                key={item.label}
                                href={`${item.link}`}
                                className={cn(
                                    "cursor-pointer font-normal md:mx-0 mx-2 text-nowrap text-white text-[18px]",
                                    item.link === pathname ? "text-white font-bold" : "text-gray-600 hover:text-white",
                                    inter.className
                                )}
                            >
                                {item.label}
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
        </nav>
    );
}


const styles: Record<string, React.CSSProperties> = {
    nav: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        width: 220,
        background: "#111",
        padding: 20,
        minHeight: "100vh",
        zIndex: 1000,
    },

    show: {
        transform: "translateX(0)",
        transition: "transform 0.3s ease-in-out",
    },
    close: {
        transform: "translateX(100%)",
        transition: "transform 0.3s ease-in-out",
    },

    item: {
        marginBottom: 15,
    },
    link: {
        color: "#fff",
        textDecoration: "none",
        fontWeight: "bold",
    },
    label: {
        color: "#aaa",
        fontWeight: "bold",
    },
    children: {
        marginTop: 8,
        marginLeft: 10,
        display: "flex",
        flexDirection: "column",
        gap: 6,
    },
    childLink: {
        color: "#ccc",
        textDecoration: "none",
        fontSize: 14,
    },
};
