import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Loader from "./Loader/loader";
import Portfolio from "./Portfolio/Portfolio";
import Skills from "./Skills/Skills";
import "./styles/main.scss";
function App() {
  return (
    <>
    {/* <Loader/> */}
      <Header />
      <main>
        <Hero/>
        <Skills/>
        <Portfolio/>
      </main>
      <Footer/>
      
    </>
  );
}

export default App;
