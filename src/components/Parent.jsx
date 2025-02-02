import { useState } from "react";
import Projects from "./Projects";
import Footer from "./Footer";

const Parent = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Projects isHovered={isHovered} />
      <Footer setIsHovered={setIsHovered} />
    </>
  );
};

export default Parent;
