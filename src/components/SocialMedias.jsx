import { DATASOCIAUX } from "../data/Constants";

const SocialMedias =(props)=> {


  return (
    <div className={`${props.styles} flex flex-wrap text-white `}>
      {DATASOCIAUX.map((item, keys) => (
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
