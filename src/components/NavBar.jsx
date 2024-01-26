import { useState } from "react";
import { Link } from "react-scroll";
import {imgStar} from "../assets/images";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const Blur = document.getElementById("layout");
  if (open) {
    Blur.style.filter = "blur(6px)";
  } else if (!open && Blur) {
    Blur.style.filter = "blur(0)";
  }

  const fcOpen = () => {
    setOpen((e) => !e);
  };

  const fcSetDown = () => {
    setOpen(false);
  };

  const links = [
    { id: 0, link: "À propos" },
    { id: 1, link: "Projects" },
    { id: 2, link: "Témoignages" },
    { id: 3, link: "Contact" },
  ];

  return (
    <div
      id="navBar"
      className=" z-10  flex fixed top-0 py-2 px-3 mobil:px-8 lg:px-20  md:py-[0.7rem]  w-full  justify-between items-center text-[#8d8d8d] "
    >
      <div className="cursor-pointer flex  items-center z-10">
        <Link className="hidden md:block" to="Home" smooth duration={500}>
          <img className="w-[4rem] " src={imgStar} alt="Profil" />
        </Link>

        <Link
          onClick={fcSetDown}
          className=" md:hidden"
          to="Home"
          smooth
          duration={500}
        >
          <img className="w-[3rem]" src={imgStar} alt="Profil" />
        </Link>
      </div>

      <ul className="hidden md:flex gap-8 text-[#ccd6f6] pr-[14px]">
        {links.map(({ id, link }) => (
          <li
            className="tracking-[.07em] font-montrealI font-semibold py-5  hover:cursor-pointer hover:scale-90"
            key={id}
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      {/* mobil-navBar */}
      <button onClick={fcOpen} className="md:hidden z-10 pr-[14px]">
        {open ? (
          <RxCross2 size={30} color="white" />
        ) : (
          <HiOutlineBars3CenterLeft size={30} color="white" />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ delay: 0, duration: 0.3 }}
            exit={{ x: 400 }}
            className="bg-[#0D2847] text-[#ccd6f6] text-2xl  md:hidden  absolute flex flex-col  top-0 right-0 h-screen  w-[70vw] justify-center items-center "
          >
            <ul className="text-center w-full ">
              {links.map(({ id, link }) => (
                <li key={id} className="py-4  cursor-pointer hover:scale-90 ">
                  <Link onClick={fcOpen} to={link} smooth duration={500}>
                    {link}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
