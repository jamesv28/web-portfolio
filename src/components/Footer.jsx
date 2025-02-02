import PropTypes from "prop-types";
import Pdf from "../assets/James_Resume.pdf";

const Footer = ({ setIsHovered, setGitIsHovered, setResumeIsHovered }) => {
  return (
    <div className="max-w-full grid md:grid-cols-3 ">
      <div
        className="md:border-[4px] md:border-r-[2px] sm:border-b-[2px] border-black  flex items-center justify-center"
        id="linkedin"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <a
          href="https://www.linkedin.com/in/james-volmert-15301954/"
          target="_blank"
        >
          <h2 className="text-4xl mt-5 mb-5">Linkedin</h2>
        </a>
      </div>
      <div
        className="md:border-[4px] sm:border-[4px] md:border-r-[2px] sm:border-b-[2px] sm:border-t-[2px] border-black  flex items-center justify-center"
        id="github"
        onMouseOver={() => setGitIsHovered(true)}
        onMouseOut={() => setGitIsHovered(false)}
      >
        <a href="https://github.com/jamesv28">
          <h2 className="text-4xl mt-5 mb-5">Github</h2>
        </a>
      </div>
      <div
        className="md:border-[4px] border-r-[2px] sm:border-b-[2px] sm:border-t-[2px] sm:border-black md:border-black  flex items-center justify-center"
        id="resume"
        onMouseOver={() => setResumeIsHovered(true)}
        onMouseOut={() => setResumeIsHovered(false)}
      >
        <a href={Pdf} target="_blank" rel="noopener noreferrer">
          <h2 className="text-4xl mt-5 mb-5">Resume</h2>
        </a>
      </div>
    </div>
  );
};

Footer.propTypes = {
  setIsHovered: PropTypes.func,
  setGitIsHovered: PropTypes.func,
  setResumeIsHovered: PropTypes.func,
};
export default Footer;
