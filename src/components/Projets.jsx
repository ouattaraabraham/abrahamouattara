import React from "react"; // Plus besoin d'importer React aujourd'hui
import { motion } from "framer-motion";
import { DATAPROJETS } from "../data/Constants";

const Projets = () => {

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
      name="Projects"
      className="relative max-w-[72rem] m-auto pt-[50px] sm:pt-[80px] sm:pb-[20px]"
    >
      <motion.h1
        initial="hidden"
        variants={Variants}
        whileInView="visible"
        viewport={{ once: true }}
        className="font-bold text-center text-[#ccd6f6] text-2xl sm:text-4xl  mb-[50px] lg:mb-[70px] "
      >
        Projets
      </motion.h1>

      <div>
        {DATAPROJETS.map((item) => (
          <a target="_blank" href={item.link} rel="noreferrer">
          <motion.div
            initial="hidden"
            variants={Variants}
            whileInView="visible"
            viewport={{ once: true }}
            className=" group bg-[#0A3A71] rounded-lg lg:grid grid-cols-2 gap-12 mb-14 sm:mb-8 lg:mb-28  "
            key={item.id}
          >
            <img className="lg:h-[400px]  object-cover group-hover:opacity-50 transition-opacity duration-300 rounded-tl-lg rounded-tr-lg  lg:rounded-tl-lg lg:rounded-tr-lg  lg:rounded-bl-lg " src={item.img} alt={"projet" + item.id} />
            <div className="px-2 lg:px-0 lg:text-start py-7">
              <h2 className="font-bold pb-6 text-[#ccd6f6] text-lg lg:text-2xl">
                {" "}
                {item.name}{" "}
              </h2>
              <p className="pb-6 lg:text-lg">{item.description} </p>
                <button className="text-white transition duration-300 ease-in-out bg-[#0086ed] hover:bg-[rgba(0,134,237,0.8)] px-12 py-2 text-sm">
                  EXPLORER
                </button>
            </div>
          </motion.div>

          </a>
        ))}
      </div>
    </div>
  );
};

export default Projets;
