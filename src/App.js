import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Layout from "./components/Layout/";




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
