import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Showreel from './components/Showreel';
import Testimonials from './components/Testimonials';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <LoadingScreen />
      <WhatsAppButton />

      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Showreel />
        <Testimonials />
        <Resume />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
