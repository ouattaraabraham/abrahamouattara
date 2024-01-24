
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Apropos from "./components/Apropos";
import Projets from "./components/Projets.jsx";
import Temoignage from "./components/Temoignage";
import Contacter from "./components/Contacter";
import Footer from "./components/Footer";
import Layout from "./components/Layout.jsx";




function App() {
  return (
    <div id="app" className="bg-[#111927]  text-[#8892b0] font-SatoshiRegular">
      <NavBar />
      <Layout/>
      <Footer />
    </div>
  );
}

export default App;
