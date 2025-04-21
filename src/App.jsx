import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import GalleryBackground from './components/Gallery/GalleryBackground';
import LightOverlay from "./components/LightOverlay";
import ServiceShowcase from "./components/sections/ServiceShowcase";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import SkillsAndTools from "./components/sections/SkillsAndTools";







function App() {
  return (
    <>
      <LightOverlay />
      <Navbar />
      <Hero />
      <About />
      <ServiceShowcase />
      <FeaturedProjects />
      <SkillsAndTools />
      <Services />
      <Portfolio />
      <Footer />
      
    </>
  );
}

export default App;
