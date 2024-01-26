import { imgTemoignage1, imgTemoignage2, imgProjet1, imgProjet2 } from "../assets/images";
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
    txt1: ` Bienvenue dans mon monde de développeur Web professionnel. Je
    m'appel Abraham et je suis un développeur expérimenté et spécialisé
    dans la création de solutions frontend de haute qualités, efficaces
    et visuellement attrayantes.`,
  
    txt2: `Grâce à mon expertise, j'aide les entreprises et les organisations à
    atteindre leurs objectifs en ligne et à se démarquer dans le paysage
    numérique concurrentiel.`,
  
    txt3: `Voici quelques technologies avec lesquelles j’ai travaillé
    récemment `
}

export const DATAPROJETS=[
        {
          id: 0,
          img: imgProjet1,
          name: "Lux hôtel",
          description: `Lux hôtel est un site d'hôtel que j'ai créé en utilisant les
        technologies telles que : react js, taiwind css, le site contient
        plusieurs pages : accueil, réservation, et contacter .`,
          link: "https://ouattaraabraham.github.io/lux-hotel/",
        },
        {
          id: 1,
          img: imgProjet2,
          name: "Event-fiesta",
          description: `Event-fiesta est une application qui permet de trouver des lieux
           pour son événement (séminaire, team building, soirée privée, mariage, etc.)
            selon les critères, la typographie du lieu souhaité. J'ai utilisé les technologies
             telles que : react, tailwind, redux.`,
          link: "https://ouattaraabraham.github.io/event-fiesta/",
        },
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


