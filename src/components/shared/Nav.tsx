import { useState } from "react";
import { links } from "../../constants/links";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [active, setActive] = useState(false);

  const linkStyle =
    "py-2 w-full text-xl inline-block hover:bg-neutral-200 duration-300";
  const location = useLocation();
  const isActive = (path: string) => location.pathname == path;

  const getLinkStyle = (path: string) =>
    `px-4 py-2 rounded-full text-sm hover:bg-neutral-200 duration-300 ${
      isActive(path) && "bg-neutral-200"
    }`;

  return (
    <nav className="bg-white relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src="assets/icons/logo.png" alt="" className="" />
        </div>

        <ul className="hidden md:flex space-x-4 font-[500]">
          <li>
            <a href="/" className={getLinkStyle("/")}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" className={getLinkStyle("/about")}>
              About Us
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className={getLinkStyle('/#contact')}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://kwiq.app/blog/"
              className={getLinkStyle("")}
            >
              Blog
            </a>
          </li>
        </ul>
        <Link to={links.store.google}>
          <button className="bg-blue-500 lg:block hidden text-white px-4 py-2.5 font-[500] rounded-md hover:bg-blue-600">
            Get Started →
          </button>
        </Link>
        {active ? (
          <button
            className="md:hidden h-fit text-4xl font-[400]"
            onClick={() => setActive(false)}
          >
            &times;
          </button>
        ) : (
          <button className="md:hidden" onClick={() => setActive(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
      </div>
      <div
        className={`absolute px-4 bg-white z-[100] w-full pb-3 shadow-lg ease-in rounded-b duration-300 ${
          active
            ? "opacity-100 scale-100"
            : "opacity-0 pointer-events-none scale-[0.95]"
        }`}
      >
        <ul className="flex-col  flex space-y-4 mt-3 font-[500] w-full ">
          <li className="w-full">
            <a href="/" className={linkStyle}>
              Home
            </a>
          </li>
          <li className="w-full">
            <a href="/about" className={linkStyle}>
              About Us
            </a>
          </li>
          <li className="w-full">
            <a href="/#contact" className={linkStyle}>
              Contact
            </a>
          </li>
          <li className="w-full">
            <a
              target="_blank"
              href="https://kwiq.app/blog/"
              className={linkStyle}
            >
              Blog
            </a>
          </li>
          {/* <li>
            <button className="bg-blue-500 text-white w-full px-4 py-2.5 font-[500] rounded-md hover:bg-blue-600">
              Get Started →
            </button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
