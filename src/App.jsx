import useLenis from "./hooks/useLenis";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import LightOverlay from "./components/LightOverlay";






function App() {
  return (
    <>
      <LightOverlay />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Footer />
      
    </>
  );
}

export default App;
