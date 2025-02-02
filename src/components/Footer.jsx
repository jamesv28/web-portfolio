import PropTypes from "prop-types";

const Footer = ({ setIsHovered }) => {
  return (
    <div className="max-w-full grid  md:grid-cols-3 ">
      <div
        className="border-[4px] border-r-[2px] border-black  flex items-center justify-center"
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
        className="border-[4px] border-r-[2px] border-black  flex items-center justify-center"
        id="github"
      >
        <a href="https://github.com/jamesv28">
          <h2 className="text-4xl">Github</h2>
        </a>
      </div>
      <div
        className="border-[4px] border-r-[2px] border-black  flex items-center justify-center"
        id="resume"
      >
        <h2 className="text-4xl">Resume</h2>
      </div>
    </div>
  );
};

Footer.propTypes = {
  setIsHovered: PropTypes.func,
};
export default Footer;
