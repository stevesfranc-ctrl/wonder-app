import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import type { PropsWithChildren } from "react";

import { Navbar } from "@/components/main/navbar";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";
import { euclid, kugile } from "./fonts";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden w-full max-w-6xl mx-auto px-4  md:max-w-6xl flex-1  !scrollbar-hide",
          inter.className,
          euclid.variable,
          kugile.variable
        )}
      >
        {/* <StarsCanvas /> */}

        <Navbar />

                <div
          className="
      fixed
      -inset-6
      z-0
      rounded-3xl
      bg-gradient-to-br
      from-indigo-500/30
      via-purple-500/20
      to-cyan-500/30
      blur-2xl
      opacity-80
    "
        />

        <div    className={cn(
          " fixed top-0 bottom-0 right-0 left-0 z-50 overflow-y-scroll overflow-x-hidden w-full max-w-6xl mx-auto px-4  md:max-w-6xl flex-1  !scrollbar-hide",
          inter.className,
          euclid.variable,
          kugile.variable
        )}>
                  {children}

        </div>
      </body>
    </html>
  );
}
