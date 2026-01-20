import { link } from "fs";
import { Poppins, Roboto } from "next/font/google";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "ANGULAR",
    image: "/angular.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Nuxtjs",
    image: "/nuxt.png",
    width: 90,
    height: 90,
  },
  {
    skill_name: "TypeScript",
    image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "/node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [

  {
    skill_name: "Material UI",
    image: "wonder-app/mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "wonder-app/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "wonder-app/redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "wonder-app/reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "wonder-app/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "wonder-app/next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Sprint Boot",
    image: "sprintboot.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },

] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "/reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Flutter",
    image: "/flutter.png",
    width: 180,
    height: 180,
  },
  {
    skill_name: "Ionic",
    image: "/ionic.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "/docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "/figma.png",
    width: 50,
    height: 50,
  }
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "/go.png",
    width: 60,
    height: 60,
  },
] as const;

export const APP = [
  {
    skill_name: "Application",
    image: "/app.png",
    width: 100,
    height: 90,
  },
] as const;

export const PROJECTS = [
  {
    title: "Cosna Afrique",
    description:
      'Transférez de l\'argent instantanément dans le portefeuille Mobile Money de votre bénéficiaire.',
    image: "/projects/cosna.jpeg",
    link: "https://cosna-afrique.com",
  },
  {
    title: "Loov Solutions",
    description:
      'Ouvrez la porte à des possibilités de paiement infinies pour tous – Entreprises, Particuliers, PME, Marchés émergents et Startups!',
    image: "/projects/loov.jpeg",
    link: "https://loov-solutions.com/",
  },
  {
    title: "Sangal Money",
    description:
      'Retirez de l\'argent depuis votre carte bancaire où que vous soyez dans le monde, et transférez-le directement vers votre compte mobile money en Afrique (au Sénégal, en Côte d\'Ivoire, au Bénin)',
    image: "/projects/sangal.png",
    link: "https://app.sangalmoney.com/",
  },
  {
    title: "AgripNkap",
    description:
      'Accédez à une assistance agricolte personnalisée, les conseils experts et les dernières actualitées agricoltes en exclusivité pour le Cameroun.',
    image: "/projects/agrinkap.jpg",
    link: "https://play.google.com/store/apps/details?id=com.agrinkap.com&hl=fr",
  }
] as const;

export const ENTREPRISES = [
  {
    title: "Mounir Holding",
    image: "/mounir.jpeg",
    link: "https://www.linkedin.com/company/isdg-sa/?originalSubdomain=lu"
  },
  {
    title: "ISDG-SARL",
    image: "/isdg.jpeg",
    link: 'https://www.linkedin.com/company/isdg-sarl?originalSubdomain=cm'
  },
  {
    title: "Loov",
    image: "/loov.jpeg",
    link: 'https://loov-solutions.com/'
  },
  {
    title: "Nebulageek",
    image: "/nebulageek.png",
    link: 'https://nebulageek.com/'
  }, {
    title: "Drimzwallet",
    image: "/drimzwallet.png",
    link: 'https://drimzwallet.com/'
  },
  {
    title: "Drimzwallet",
    image: "/drimzwallet.png",
    link: 'https://drimzwallet.com/'
  }
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};


export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});


export const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});