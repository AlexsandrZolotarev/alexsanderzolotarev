import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Loader from "./Loader/Loader";
import Portfolio from "./Portfolio/Portfolio";
import Scrolling from "./Scrolling/Scrolling";
import Skills from "./Skills/Skills";
import "./styles/main.scss";

const App:React.FC = () => {
  return (
    <>
      <Loader/>
      <Scrolling/>
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