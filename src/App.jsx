import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import Gallery from "./components/Gallery/Gallery";
import GalleryBackground from './components/Gallery/GalleryBackground';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <GalleryBackground />
      <Services />
      <Portfolio />
      <Footer />
      
    </>
  );
}

export default App;
