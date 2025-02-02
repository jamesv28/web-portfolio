import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Parallax from "./components/Parallax";
import Parent from "./components/Parent";

function App() {
  return (
    <div className="bg-stone-100">
      <Navbar />
      <Hero />
      <div className="hr-line"></div>
      <About />
      <Parallax />
      <Skills />
      <Parent />
    </div>
  );
}

export default App;
