import React from "react"; // Plus besoin d'importer React aujourd'hui
import { motion } from "framer-motion";
import { DATATEMOIGNAGE } from "../data/Constants";


const Temoignage = () => {


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
      {DATATEMOIGNAGE.map((item) => (
        <motion.div
          initial="hidden"
          variants={Variants}
          whileInView="visible"
          viewport={{ once: true }}
          className="md:flex bg-[#0D2847] p-4 mb-10"
        >
          <img
            className="object-cover md:w-[50%]"
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
