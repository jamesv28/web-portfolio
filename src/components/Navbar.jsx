import { links } from "../data";
const Navbar = () => {
  return (
    <>
      <nav className="w-full">
        <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 ">
          <h2 className="text-3xl font-bold small-caps">
            <span className="red-text">J </span>ames
            <span className="green-text">V</span>olmert
          </h2>
          <div className="flex gap-x-3 ">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  href={href}
                  key={id}
                  className="tracking-wide capitalize text-lg hover:text-emerald-600 duration-300"
                >
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
      <div className="hr-line"></div>
    </>
  );
};

export default Navbar;
