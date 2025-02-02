import { useState } from "react";
import Projects from "./Projects";
import Footer from "./Footer";

const Parent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [gitIsHovered, setGitIsHovered] = useState(false);
  const [resumeIsHovered, setResumeIsHovered] = useState(false);
  return (
    <>
      <Projects
        isHovered={isHovered}
        gitIsHovered={gitIsHovered}
        resumeIsHovered={resumeIsHovered}
      />
      <Footer
        setIsHovered={setIsHovered}
        setGitIsHovered={setGitIsHovered}
        setResumeIsHovered={setResumeIsHovered}
      />
    </>
  );
};

export default Parent;
