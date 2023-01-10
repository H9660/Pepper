import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/images/pepper2.png";

const Header = () => {
  React.useEffect(() => {
    const btn = document.querySelector("button.menu-button");
    btn.addEventListener("click", () => {
      const menu = document.querySelector(".mobile-menu");
      menu.classList.toggle("hidden");
    });
  }, []);

  return (
    <>
      <nav className="">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              {/* <!--Website Logo--> */}

              <a href="#" className="flex items-center py-4 px-2">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-6 w-6 mr-2"
                  id="logo"
                ></img>
                <span className="font-semibold text-black-500 text-lg">
                  Pepper
                </span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-14">
              <a
                href=""
                className="py-4 px-auto pr-4 text-black-500 border-purple-500 font"
              >
                About
              </a>
              <a
                href=""
                className="py-4 px-2 text-black-500 font hover:text-purple-500 transition duration-300"
              >
                Blog
              </a>
              <a
                href=""
                className="py-4 px-2 text-black-500 font hover:text-purple-500 transition duration-300"
              >
                Pricing
              </a>
              <a
                href=""
                className="py-4 px-2 text-black-500 font hover:text-purple-500 transition duration-300"
              >
                Careers
              </a>
              <a
                href=""
                className="py-4 px-2 pr-20 text-black-500 font hover:text-purple-500 transition duration-300"
              >
                Contact Us
              </a>
              <div>
                <Link
                  className="border-purple-500 hover:text-violet-900 transition py-4 px-4 pr- text-black-500 mx-auto"
                  to="/"
                >
                  Log in
                </Link>
                <Link
                  className="bg-violet-700 hover:bg-lav-800 text-white px-4 py-3 rounded-lg transition py-4 px-2 text-black-500 border-b-4 transparent font-semibold mx-auto"
                  to="/"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button className="outline-none menu-button">
                <svg
                  className="w-8 h-6 text-white bg-lav rounded-lg"
                  x-show="! showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  viewBox="0 00 17 24"
                  stroke="currentColor"
                >
                  <path d="m4 8h9M4 12h9M4 16h9M4"></path>
                </svg>
              </button>
            </div>

            <div className="hidden mobile-menu">
              <ul className="">
                <li className="active">
                  <a
                    href=""
                    className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                  ></a>
                  Home
                </li>
                <li>
                  <a
                    href=""
                    className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
