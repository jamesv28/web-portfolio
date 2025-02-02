import PropTypes from "prop-types";

import SectionTitle from "./SectionTitle";
import barrelImg from "../assets/barrel.jpg.webp";
import programmingImg from "../assets/programming.avif";
import computerImg from "../assets/computer.jpg";

const Projects = ({ isHovered }) => {
  return (
    <div className={isHovered ? "red" : "white"}>
      <div className=" py-20 align-element" id="projects">
        <SectionTitle text="Projects" />
        <div className="py-16 grid gap-8 md:grid-cols-2 ">
          <div>
            <h3 className="text-3xl">Versatrans</h3>
            <ul className="text-lg">
              <li>
                Worked on Luca Mariano distillery in-house app for managing
                whiskey barrels in a rickhouse.
              </li>
              <li>
                Created a qr code scanner for managing, updating barrel
                locations and updating the status of the whiskey.
              </li>
              <li>
                Updated the UI for versatranz.com, including new features to
                engage customers
              </li>
              <li>
                Created a personal website for Tyler Mane (Sabretooth) for his
                launch of a kickstarter
              </li>
            </ul>
          </div>
          <div>
            <img
              className=" max-w-full md:h-[400px] sm:h-auto"
              src={barrelImg}
              alt="barrel"
            />
          </div>
        </div>
        <div className="py-16 grid gap-8 md:grid-cols-2 ">
          <div>
            <img
              src={programmingImg}
              alt="code "
              className=" max-w-full md:h-[400px] sm:h-auto"
            />
          </div>
          <div>
            <h3 className="text-3xl">Convercent</h3>
            <ul className="text-lg">
              <li>
                Brought on to initially give an accessibility audit of the web
                app, and stayed on to remediate errors/bugs
              </li>
              <li>
                Used WCAG guidelines to enhance new and upcoming features with
                the app.
              </li>
              <li>Began migrating the app from knockout.js to react</li>
              <li>
                Added new features and consulted with other developers on
                different teams on how to improve new features
              </li>
            </ul>
          </div>
        </div>
        <div className="py-16 grid gap-8 md:grid-cols-2 ">
          <div>
            <h3 className="text-3xl">DaVita</h3>
            <ul className="text-lg">
              <li>
                Initially began on the mobile team for usability and
                accessibility (iOS & android)
              </li>
              <li>
                On iOS team, began migrating from objective-c to swift
                programming language
              </li>
              <li>
                Moved to web development teaming, creating new features in the
                react library
              </li>
              <li>
                Implemented new features on web development team and tested each
                new component
              </li>
            </ul>
          </div>
          <div>
            <img
              src={computerImg}
              className=" max-w-full md:h-[400px] sm:h-auto"
              alt="computer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  isHovered: PropTypes.bool,
};

export default Projects;
