import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";
import { LuFigma } from "react-icons/lu";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Technologie = () => {
  const TechnologieLeft = [
    {
      id: 0,
      name: "JavaScript (ES6+)",
      icon: <BiLogoJavascript color="#70B8FF" />,
    },
    { id: 1, name: "TypeScript", icon: <BiLogoTypescript color="#70B8FF" /> },
    { id: 2, name: "React", icon: <FaReact color="#70B8FF" /> },
    { id: 3, name: "Next js", icon: <TbBrandNextjs color="#70B8FF" /> },
  ];

  const TechnologieRight = [
    { id: 0, name: "tree js", icon: <TbBrandThreejs color="#70B8FF" /> },
    { id: 1, name: "tailwind", icon: <SiTailwindcss color="#70B8FF" /> },
    { id: 2, name: "figma", icon: <LuFigma color="#70B8FF" /> },
    { id: 3, name: "github", icon: <FaGithub color="#70B8FF" /> },
  ];

  return (
    <div className="flex items-center mt-5 text-[#ccd6f6]">
      <div className="mr-12">
        {TechnologieLeft.map((item) => (
          <p key={item.id} className="flex items-center mb-2.5">
            {item.icon} <span className="pl-2">{item.name}</span>
          </p>
        ))}
      </div>
      <div>
        {TechnologieRight.map((item) => (
          <p id={item.id} className="flex items-center mb-2.5">
            {item.icon} <span className="pl-2">{item.name}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Technologie;
