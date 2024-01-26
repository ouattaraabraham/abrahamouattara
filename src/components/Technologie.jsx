import { DATATECHNOLOGIE } from "../data/Constants";

const Technologie = () => {

  return (
    <div className="flex items-center mt-5 text-[#ccd6f6]">
      <div className="mr-12">
        {DATATECHNOLOGIE.left.map((item) => (
          <p key={item.id} className="flex items-center mb-2.5">
            {item.icon} <span className="pl-2">{item.name}</span>
          </p>
        ))}
      </div>
      <div>
        {DATATECHNOLOGIE.right.map((item) => (
          <p id={item.id} className="flex items-center mb-2.5">
            {item.icon} <span className="pl-2">{item.name}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Technologie;
