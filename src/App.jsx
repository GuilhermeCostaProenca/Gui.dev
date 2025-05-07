import useLenis from "./hooks/useLenis";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import LightOverlay from "./components/LightOverlay";
import ImpactWords from "./ImpactWords/ImpactWords";
import Contact from "./components/contact/Contact";






function App() {
  return (
    <>
      <LightOverlay />
      <Navbar />
      <Hero />
      <About />
      <ImpactWords />
      <Services />
      <Contact />
      <Portfolio />
      <Footer />
      
    </>
  );
}

export default App;
