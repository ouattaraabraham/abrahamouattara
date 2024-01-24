import { MdEmail } from "react-icons/md";
import { FaTwitter, FaSquareGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedias =(props)=> {

  const Data = [
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

  return (
    <div className={`${props.styles} flex flex-wrap text-white `}>
      {Data.map((item, keys) => (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          key={keys}
          className="flex items-center h-fit px-2 py-1 mr-2 mt-2 sm:mt-2 rounded-lg bg-[#0086ed] hover:bg-[rgba(0,134,237,0.8)] transition duration-300 ease-in-out"
        >
          {item.icon}
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default SocialMedias;
