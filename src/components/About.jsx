import SectionTitle from "./SectionTitle";
import aboutImg from "../assets/code.svg";

const About = () => {
  return (
    <div className=" py-20 align-element" id="about">
      <SectionTitle text="About" />
      <div className="py-16 grid gap-8 md:grid-cols-2 ">
        <div className="md:border-r-[2px] border-black sm:border-0 px-4">
          <p className="text-lg">
            As stated above, my name is James Volmert. I have been developing
            apps on and off for around 10 years. I have worked on a wide variety
            of projects from freelance web design to working for a fortune 500
            company, DaVita. I have worked on native mobile apps as well as
            creating apps using backbone.js, angular, react, and vue.js.
          </p>
          <p className="text-lg mt-2">
            One of my jobs, I became responsible for accessibility and usability
            across multiple apps. This has turned into a passion of mine, and I
            try to make everything i do as accessible as possible for everyone.
          </p>
          <p className="mt-2 text-lg">
            I am currently interested in blockchain and want to increase my
            knowledge of native apps to brush up my existing tool belt.
          </p>
        </div>
        <div>
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
