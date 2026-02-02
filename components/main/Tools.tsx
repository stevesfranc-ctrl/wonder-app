"use client";


import { motion } from "framer-motion";
import { Wrench, Code2, Smartphone, Palette, Cloud } from "lucide-react";

const tools = [
  {
    name: "Next.js",
    description: "Framework React moderne pour le web performant, SEO-friendly et scalable.",
    icon: Code2,
  },
  {
    name: "IntelliJ IDEA",
    description: "IDE puissant pour le développement Java, Spring Boot et architectures complexes.",
    icon: Wrench,
  },
  {
    name: "Android Studio",
    description: "Environnement officiel pour le développement d'applications Android natives.",
    icon: Smartphone,
  },
  {
    name: "Figma",
    description: "Design UI/UX collaboratif pour prototyper et concevoir des interfaces modernes.",
    icon: Palette,
  },
  {
    name: "Firebase",
    description: "Backend-as-a-Service pour auth, base de données temps réel et déploiement rapide.",
    icon: Cloud,
  },
  {
    name: "Angular",
    description: "Framework frontend robuste pour applications web structurées et maintenables.",
    icon: Code2,
  },
  {
    name: "Spring Boot",
    description: "Framework Java pour créer des APIs et microservices performants et sécurisés.",
    icon: Wrench,
  },
  {
    name: "NestJS",
    description: "Framework Node.js structuré et scalable pour APIs, microservices et architectures propres.",
    icon: Code2,
  },
  {
    name: "Kafka",
    description: "Plateforme de streaming distribuée pour la communication événementielle à grande échelle.",
    icon: Cloud,
  },
  {
    name: "MongoDB",
    description: "Base de données NoSQL orientée documents, flexible et performante.",
    icon: Cloud,
  },
  {
    name: "React Native",
    description: "Développement mobile cross-platform avec une base de code React.",
    icon: Smartphone,
  },
];

export default function DailyToolsSection() {
  return (
    <section className="relative py-24 px-6  text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
           className="
          mt-5
          font-heading
          text-4xl
          font-bold
          tracking-tight
          text-zinc-800
          dark:text-zinc-100
          sm:text-5xl
          leading-tight
          text-center
        "
              
        >
          Mes outils du quotidien

          
        </motion.h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mt-6">
          Les technologies et outils que j’utilise chaque jour pour concevoir, développer
          et livrer des applications modernes, performantes et scalables.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-20">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
           <div className="h-full rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-lg hover:shadow-purple-500/20 transition-all">
  <tool.icon className="h-10 w-10 text-purple-400" />
  <h3 className="text-xl font-semibold mt-4">{tool.name}</h3>
  <p className="text-sm text-gray-400 mt-2">{tool.description}</p>
</div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
