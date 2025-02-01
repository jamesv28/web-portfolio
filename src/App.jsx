import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-stone-100">
      <Navbar />
      <Hero />
      <div className="hr-line"></div>
      <Skills />
    </div>
  );
}

export default App;
