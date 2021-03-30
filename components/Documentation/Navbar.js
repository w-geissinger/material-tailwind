import React from "react";
import Link from "next/link";
import Ripple from "material-ripple-effects";

export default function IndexNavbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const ripple = new Ripple();
  const rippleLight = (e) => ripple.create(e, "light");

  return (
    <nav className="sticky top-0 z-40 lg:z-40 w-full bg-gradient-to-r from-light-blue-500 to-light-blue-700 flex items-center justify-between p-2">
      <div className="container max-w-full px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a className="text-white text-sm font-medium leading-relaxed inline-block mr-4 whitespace-no-wrap uppercase">
              Material Tailwind
            </a>
          </Link>
          <button
            className="cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars text-white"></i>
          </button>
        </div>
        <div
          className={`lg:flex flex-grow items-center bg-transparent
            ${navbarOpen ? " block" : " hidden"}
          `}
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li
              className="flex items-center text-white rounded-lg px-2 transition-all duration-300"
              onMouseUp={rippleLight}
            >
              <Link href="/documentation/quick-start">
                <a className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-medium">
                  <i className="far fa-file-alt text-lg leading-lg " />
                  <span className="inline-block ml-2">Docs</span>
                </a>
              </Link>
            </li>
            <li
              className="flex items-center text-white rounded-lg px-2 transition-all duration-300"
              onMouseUp={rippleLight}
            >
              <Link href="/components">
                <a className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-medium">
                  <i className="fas fa-cubes text-lg leading-lg " />
                  <span className="inline-block ml-2">Components</span>
                </a>
              </Link>
            </li>

            <li
              className="flex items-center text-white rounded-lg px-2 transition-all duration-300"
              onMouseUp={rippleLight}
            >
              <a
                className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-medium"
                href="https://github.com/creativetimofficial/md-tailwind"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-lg leading-lg " />
                <span className="inline-block ml-2">Github</span>
              </a>
            </li>

            <li
              className="flex items-center text-white rounded-lg px-2 transition-all duration-300"
              onMouseUp={rippleLight}
            >
              <a
                className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-medium"
                href="https://github.com/creativetimofficial/md-tailwind/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-block">Issues</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
