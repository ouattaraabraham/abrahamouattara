import { motion } from "framer-motion";
import SocialMedias from "./SocialMedias";

const Contacter = () => {
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
      name="Contact"
      className="text-center flex flex-col items-center relative max-w-[72rem] m-auto py-[80px]"
    >
      <motion.h2
        initial="hidden"
        variants={Variants}
        whileInView="visible"
        viewport={{ once: true }}
        className="font-bold text-center text-[#ccd6f6] text-2xl sm:text-4xl  mb-8"
      >
        Contact
      </motion.h2>

      <p className="mb-6 sm:text-lg">
        N'hésitez pas à me contacter par email ou via mes réseaux sociaux.
      </p>

      <SocialMedias styles="justify-center" />
    </div>
  );
};

export default Contacter;
