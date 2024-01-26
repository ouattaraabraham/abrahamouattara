import { motion } from "framer-motion";
import {imgHero} from "../assets/images";
import SocialMedias from "./SocialMedias";

const Home = () => {
  const Variants = {
    visible: (i = 0.4) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i,
        duration: 0.4,
      },
    }),
    hidden: { y: 50, opacity: 0 },
  };

  return (
    <div
      name="Home"
      className="relative sm:pt-[5rem] w-full min-h-screen flex "
    >
      <div className="m-auto sm:h-[90vh] max-w-[72rem]  items-center  flex flex-col  sm:gap-0 sm:grid sm:grid-cols-3  ">
        <div className=" mt-20 mb-10 sm:my-0 sm:order-2 animate-heroAnimation relative overflow-hidden rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] max-w-[500px] max-h-[500px] w-[90vw] h-[90vw] mobil-sm:w-[18rem] mobil-sm:h-[18rem] sm:w-[14rem] sm:h-[14rem] md:w-[18rem] md:h-[18rem] lg:w-[22rem] lg:h-[22rem] ">
          <img
            className=" border-[60%_40%_30%_70%/60%_30%_70%_40%] object-cover z-20 w-full h-full object-top"
            src={imgHero}
            alt="profile du développeur"
          />
        </div>

        <div className=" col-span-2 sm:order-1 sm:pb-10">
          <div>
            <div>
              <motion.p
                custom={0.2}
                initial="hidden"
                variants={Variants}
                whileInView="visible"
                viewport={{ once: true }}
                className="text-2xl text-[#ccd6f6]"
              >
                👋 Salut, je suis   <span className="text-white">Abraham</span>
              </motion.p>
              <motion.h1
                custom={0.4}
                initial="hidden"
                variants={Variants}
                whileInView="visible"
                viewport={{ once: true }}
                // initial={{ y: 50, opacity: 0 }}
                // animate={{ y: 0, opacity: 1 }}
                // transition={{ delay: 0.2, duration: 0.3 }}
                className="[font-size:_clamp(3rem,5vw+1rem,6.2rem)] leading-[1.1] text-[#70B8FF] font-bold"
              >
                Frontend Developer.
              </motion.h1>
              <motion.p
                custom={0.6}
                initial="hidden"
                variants={Variants}
                whileInView="visible"
                viewport={{ once: true }}
                className=" text-[#ccd6f6] [font-size:_clamp(1.5rem,1.3vw+1rem,2.6rem)] pb-4 mt-2 sm:mt-8"
              >
                Spécialisé dans la création de sites web attrayants et efficaces
                pour des clients partout dans le monde.{" "}
              </motion.p>
              <motion.div
                custom={0.8}
                initial="hidden"
                variants={Variants}
                whileInView="visible"
                viewport={{ once: true }}
              >
                <SocialMedias/>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
