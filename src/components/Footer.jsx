const Footer = () => {
  return (
    <div className="max-w-full grid  md:grid-cols-3 ">
      <div
        className="border-[4px] border-r-[2px] border-black  flex items-center justify-center"
        id="linkedin"
      >
        <h2 className="text-4xl mt-5 mb-5">Linkedin</h2>
      </div>
      <div
        className="border-[4px] border-r-[2px] border-black  flex items-center justify-center"
        id="github"
      >
        <h2 className="text-4xl">Github</h2>
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

export default Footer;
