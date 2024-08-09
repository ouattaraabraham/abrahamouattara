import { imgTemoignage1, imgTemoignage2, imgProjet1, hpPrestige, eveEvent, astraOne } from "../assets/images";
import { MdEmail } from "react-icons/md";
import { FaTwitter, FaSquareGithub, FaReact  } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";
import { LuFigma } from "react-icons/lu";
import { SiTailwindcss } from "react-icons/si";


export const DATASOCIAUX = [
    {
      name: "E-mail",
      icon: <MdEmail className="mr-2" />,
      link: "mailto:abraham.dev2024@gmail.com",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedinIn className="mr-2" />,
      link: "https://www.linkedin.com/in/abraham-ouattara-8ba4a522b/",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="mr-2" />,
      link: "https://twitter.com/AbrahamOua49761",
    },
    {
      name: "Instagram",
      icon: <AiFillInstagram className="mr-2" />,
      link: "https://www.instagram.com/abrahamcodeur/",
    },
    {
      name: "Github",
      icon: <FaSquareGithub className="mr-2" />,
      link: "https://github.com/ouattaraabraham",
    },
  ];

export const DATATECHNOLOGIE ={
    left:[
        {
          id: 0,
          name: "JavaScript (ES6+)",
          icon: <BiLogoJavascript color="#70B8FF" />,
        },
        { id: 1, name: "TypeScript", icon: <BiLogoTypescript color="#70B8FF" /> },
        { id: 2, name: "React", icon: <FaReact color="#70B8FF" /> },
        { id: 3, name: "Next js", icon: <TbBrandNextjs color="#70B8FF" /> },
      ],
      right: [
        { id: 0, name: "tree js", icon: <TbBrandThreejs color="#70B8FF" /> },
        { id: 1, name: "tailwind", icon: <SiTailwindcss color="#70B8FF" /> },
        { id: 2, name: "figma", icon: <LuFigma color="#70B8FF" /> },
        { id: 3, name: "github", icon: <FaGithub color="#70B8FF" /> },
      ]

}

export const DATAAPROPOS={
    txt1: `  Passionné par la création d'expériences en ligne exceptionnelles,
     je suis un développeur web dédié à l'art de transformer des idées en réalité numérique.
     Ma mission est de concevoir des sites web intuitifs, performants et esthétiques,
      en utilisant les dernières technologies pour offrir une navigation fluide et
       une expérience utilisateur optimale.`,
  
    txt2: `Avec une solide expertise dans le développement front-end et back-end,
     je m'efforce de repousser les limites pour créer des solutions web innovantes
      et adaptées aux besoins spécifiques de mes clients. Ensemble,
       créons une présence en ligne qui se démarque dans le monde numérique.`,
  
    txt3: `Voici quelques technologies avec lesquelles j’ai travaillé
    récemment `
}

export const DATAPROJETS=[
        {
          id: 0,
          img: astraOne,
          name: "astraOne",
          description: ` astraOne est une Agence Marketing Digital & Web qui est  solutions de communication, design, UX, et de développement d'applications web innovantes j'ai realiser le site de astraOne avec nextjs.`,
          link: "https://ouattaraabraham.github.io/agence-tech/",
        },
        {
          id: 1,
          img: eveEvent,
          name: "EveEvent",
          description: ` EveEvent est un site de decoratrice et organisatrice des événements inoubliables tels que mariages, anniversaires,intimes, ou tout autre événement marquant. j'ai realiser cet siite pour l'agence astraOne  .`,
          link: "https://eve-event.vercel.app/",
        },
        {
          id: 2,
          img: hpPrestige,
          name: "hp-prestige",
          description: ` hp-prestige ( hygiènePure Prestige ) est un services de nettoyage de la plus haute qualité pour répondre à tous vos besoins que j'ai realiser, j'ai utiliser nextjs .`,
          link: "https://hp-prestige.vercel.app/",
        },
        {
          id: 3,
          img: imgProjet1,
          name: "Lux hôtel",
          description: `Lux hôtel est un site d'hôtel que j'ai créé en utilisant les
        technologies telles que : react js, taiwind css, le site contient
        plusieurs pages : accueil, réservation, et contacter .`,
          link: "https://ouattaraabraham.github.io/lux-hotel/",
        },
        // {
        //   id: 4,
        //   img: imgProjet2,
        //   name: "Event-fiesta",
        //   description: `Event-fiesta est une application qui permet de trouver des lieux
        //    pour son événement (séminaire, team building, soirée privée, mariage, etc.)
        //     selon les critères, la typographie du lieu souhaité. J'ai utilisé les technologies
        //      telles que : react, tailwind, redux.`,
        //   link: "https://ouattaraabraham.github.io/event-fiesta/",
        // },
]

export const DATATEMOIGNAGE = [
    {
      id: 0,
      img: imgTemoignage1,
      texte: ` Abraham a des qualités exceptionnelles, il a réalisé notre site
    internet comme voulu, je suis rassuré dorénavant de travailler avec
    lui, je le recommande pour son efficacité sa coopération et sa
    flexibilité.`,
    },
    {
      id: 1,
      img: imgTemoignage2,
      texte: `C'est un réel plaisir pour moi de travailler avec Abraham qui a
    toujours été à la hauteur de mes attentes. Il est le type de
    développeur qui sait réellement ce qu'il fait.`,
    },
  ];

export const DATAFOOTER={
    txt: `©Copyright 2024 - Abraham Ouattara`
}


