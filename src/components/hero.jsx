import heroImg from "../assets/hero.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-indigo-500 py-24">
      <div className="flex justify-around w-full items-center ">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm James</h1>
          <p className="mt-4 text-3xl text-white capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/jamesv28" target="_blank">
              <FaGithub className="h-8 w-8 text-slate-800 hover:text-white duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/james-volmert-15301954/"
              target="_blank"
            >
              <FaLinkedin className="h-8 w-8 text-slate-800 hover:text-white duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
