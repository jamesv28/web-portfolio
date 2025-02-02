import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Parallax from "./components/Parallax";

function App() {
  return (
    <div className="bg-stone-100">
      <Navbar />
      <Hero />
      <div className="hr-line"></div>
      <About />
      <Parallax />
      <Skills />
    </div>
  );
}

export default App;
