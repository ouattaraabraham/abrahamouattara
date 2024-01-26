import { DATAFOOTER } from "../data/Constants";
const Footer=()=>{
  
  return (
    <div className="px-6 mobil:px-12 md:px-24  lg:px-32 text-center text-sm pb-10">
      <p>{DATAFOOTER.txt}</p>
    </div>
  );
}

export default Footer;
