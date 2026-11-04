import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas">
      {/* Atmospheric background mesh */}
      <div
        className="canvas-glow left-1/4 top-[20rem] h-96 w-96 bg-secondary/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="canvas-glow bottom-[10rem] -right-20 h-96 w-96 bg-tertiary/5 blur-[150px]"
        aria-hidden="true"
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-std focus:bg-primary focus:px-4 focus:py-2 focus:text-text-primary"
      >
        Skip to content
      </a>

      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
