import Home from "./Home.jsx";
import Apropos from "./Apropos.jsx";
import Projets from "./Projets.jsx";
import Temoignage from "./Temoignage.jsx";
import Contacter from "./Contacter.jsx";

const Layout = () => {
  return (
    <div id="layout" className=" px-6 mobil:px-12 md:px-24  lg:px-32  flex flex-col justify-center">
      <Home />
      <Apropos />
      <Projets />
      <Temoignage />
      <Contacter />
    </div>
  );
};

export default Layout;
