import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import CursorFollower from './components/CursorFollower/CursorFollower';

function App() {
  return (
    <>
      <CursorFollower />
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
