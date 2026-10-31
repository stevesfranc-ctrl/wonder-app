import { euclid, kugile } from "@/app/fonts";
import { cn } from "@/lib/utils";

const categories = [
  {
    number: "01",
    title: "Architecture logicielle",
    description:
      "Conception de systèmes robustes, scalables et maintenables. Patterns, principes SOLID et bonnes pratiques.",
    icon: "🏗️",
    tags: ["Clean Architecture", "Design Patterns"],
  },
  {
    number: "02",
    title: "DevOps & Cloud",
    description:
      "Automatisation, intégration et déploiement continus. Infrastructure, conteneurs et outils DevOps.",
    icon: "⚙️",
    tags: ["Docker", "CI/CD", "Cloud"],
  },
  {
    number: "03",
    title: "Développement mobile",
    description:
      "Mes expériences dans la conception et le développement d'applications mobiles performantes.",
    icon: "📱",
    tags: ["Mobile", "Flutter", "Android"],
  },
  {
    number: "04",
    title: "Expériences professionnelles",
    description:
      "Retours d'expérience en entreprise, défis techniques, apprentissages et réalités du métier.",
    icon: "💼",
    tags: ["Career", "Feedback"],
  },
];

export function CategoryCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-1">
      {categories.map((category) => (
        <article
          key={category.number}
          className="group rounded-2xl border border-white/10
           p-6 transition-all duration-300
          hover:-translate-y-1 hover:border-indigo-400/50
          hover:bg-white/[0.09]"
        >
          {/* <div className="mb-8 flex items-center justify-between">
            <span className="text-3xl">{category.icon}</span>
            <span className="text-sm text-gray-500">
              {category.number}
            </span>
          </div> */}

          <h3 className={cn("mb-3 text-xl font-semibold text-white", kugile.className)}>
            {category.title}
          </h3>

          <p className={cn("mb-6 text-sm leading-7 text-[#919294]", euclid.className)}>
            {category.description}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {category.tags.map((tag) => (
              <span
                key={tag}
                className={cn("rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400", euclid.className)}
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="#articles"
            className={cn("inline-flex items-center gap-2 text-sm  text-indigo-400 transition-all group-hover:gap-3", euclid.className)}
          >
            Explorer les articles
            <span>→</span>
          </a>
        </article>
      ))}
    </div>
  );
}
