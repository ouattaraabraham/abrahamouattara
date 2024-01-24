import { motion } from "framer-motion";
import Technologie from "./Technologie";
import { imgDessinCompetance } from "./image";

const Apropos = () => {
  const P1 = ` Bienvenue dans mon monde de développeur Web professionnel. Je
  m'appel Abraham et je suis un développeur expérimenté et spécialisé
  dans la création de solutions frontend de haute qualités, efficaces
  et visuellement attrayantes.`;

  const P2 = `Grâce à mon expertise, j'aide les entreprises et les organisations à
  atteindre leurs objectifs en ligne et à se démarquer dans le paysage
  numérique concurrentiel.`;

  const H2 = `Voici quelques technologies avec lesquelles j’ai travaillé
  récemment `;

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
      name="À propos"
      className="relative max-w-[72rem] m-auto pt-[100px] pb-[80px] sm:py-[80px]"
    >
      <motion.h2
        initial="hidden"
        variants={Variants}
        whileInView="visible"
        viewport={{ once: true }}
        className="font-bold text-center text-[#ccd6f6] text-2xl sm:text-4xl mb-[50px]"
      >
        À propos{" "}
      </motion.h2>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.4 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="sm:grid grid-cols-2 items-center"
      >
        <div className="pb-10">
          <p className="mb-4 lg:text-lg">{P1} </p>
          <p className="mb-4 lg:text-lg">{P2} </p>
          <div className="mt-5 ">
            <h2 className="lg:text-lg">{H2}: </h2>
            <Technologie />
          </div>
        </div>
        <div className="flex justify-center">
          <img src={imgDessinCompetance} alt="homme devant un ordinateur" />
        </div>
      </motion.div>
    </div>
  );
};

export default Apropos;
