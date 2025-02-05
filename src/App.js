import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Loader from "./Loader/loader";
import Skills from "./Skills/Skills";
import "./styles/main.scss";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <Skills/>
        <Banner/>
      </main>
      <Footer/>
      <Loader/>
    </>
  );
}

export default App;
