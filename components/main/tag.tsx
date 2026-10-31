
"use client";

import { euclid } from "@/app/fonts";
import { cn } from "@/lib/utils";
import {
  Boxes, Cloud, Smartphone, Atom,
  Layers, Container, Code, BriefcaseBusiness,
  BookOpen
} from "lucide-react";

const tags = [
  { name: "Architecture", icon: Boxes },
  { name: "DevOps", icon: Cloud },
  { name: "Mobile", icon: Smartphone },
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Layers },
  { name: "Docker", icon: Container },
  { name: "Flutter", icon: Code },
  { name: "Expérience pro", icon: BriefcaseBusiness },
];

export default function ArticleTags({ activeTag, onTagChange }: {activeTag: any, onTagChange: any}) {
  return (
    <div className="space-y-4">
      {/* <h3 className="text-sm font-medium text-white">
        Tous les tags
      </h3> */}

      <div className="flex flex-wrap gap-2">
        {tags.map(({ name, icon: Icon }) => {
          const active = activeTag === name;

          return (
            <button
              key={name}
              onClick={() => onTagChange(active ? null : name)}
              className={`
                inline-flex items-center gap-2
                border px-3 py-2
                text-sm transition-colors duration-200
                ${
                  active
                    ? "border-indigo-400/40 bg-indigo-500/15 text-indigo-400"
                    : "border-white/[0.04] bg-white/[0.04] text-gray-400 hover:bg-white/[0.09] hover:text-white"
                }
              `}
            >
              <Icon size={15} strokeWidth={1.8} />
              <span className={cn(euclid.className)}>{name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
