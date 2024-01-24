import React from "react"; // Plus besoin d'importer React aujourd'hui
import { motion } from "framer-motion";
import { temoignage1, temoignage2 } from "./image";

const Temoignage = () => {
  const DataTemoignages = [
    {
      id: 0,
      img: temoignage1,
      texte: ` Abraham a des qualités exceptionnelles, il a réalisé notre site
    internet comme voulu, je suis rassuré dorénavant de travailler avec
    lui, je le recommande pour son efficacité sa coopération et sa
    flexibilité.`,
    },
    {
      id: 1,
      img: temoignage2,
      texte: `C'est un réel plaisir pour moi de travailler avec Abraham qui a
    toujours été à la hauteur de mes attentes. Il est le type de
    développeur qui sait réellement ce qu'il fait.`,
    },
  ];

  const Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    hidden: { y: 50, opacity: 0 },
  };

  return (
    <div
      name="Témoignages"
      className="relative  max-w-[50rem] m-auto pt-[50px] pb-[80px]"
    >
      <motion.h2
        initial="hidden"
        variants={Variants}
        whileInView="visible"
        viewport={{ once: true }}
        className="font-bold text-center text-[#ccd6f6] text-2xl sm:text-4xl  mb-[50px]"
      >
        Témoignages
      </motion.h2>
      {DataTemoignages.map((item) => (
        <motion.div
          initial="hidden"
          variants={Variants}
          whileInView="visible"
          viewport={{ once: true }}
          className="sm:flex bg-[#0D2847] p-4 mb-10"
        >
          <img
            className="object-cover"
            src={item.img}
            alt={`Temoignage1${item.id}`}
          />
          <p className="sm:ml-4 mt-4">{item.texte} </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Temoignage;
