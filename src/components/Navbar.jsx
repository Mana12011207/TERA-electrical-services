import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("メニューを開きました");
  };

  return (
    <>
      <div className="flex justify-between w-full h-full">
        <button
          className="z-10 w-8 h-8 bg-white rounded-full cursor-pointer bg-opacity-40 justify-items-center md:hidden"
          onClick={toggleHamburgerMenu}
        >
          {isMenuOpen ? (
            <GrFormClose className="text-lg" />
          ) : (
            <GiHamburgerMenu />
          )}
        </button>
        <img
          className="w-auto h-auto max-h-8 md:max-h-36 md:ml-8 md:mt-2 lg:ml-32"
          src="/assets/images/TeraElectricalServicesLogo.png"
          alt="logo"
        ></img>

        {/* Horizontal Menu for larger screens */}
        <div className="hidden md:flex sm:border sm:border-green-500">
          <nav className="w-auto md:flex md:items-end md:justify-around sm:border md:border-pink-500">
            <ul className="flex cursor-pointer md:text-sm 2xl:text-2xl">
              <li className="">
                <a href="/">Home</a>
              </li>
              <li className="">
                <a href="/services">Services</a>
              </li>
              <li className="">
                <a href="/about">About</a>
              </li>
              <li className="">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* CTA button */}
        <button className="items-center hidden w-auto h-auto px-6 py-2 mt-2 mr-8 rounded-lg md:max-h-36 md:flex lg:mr-32 md:py-3 md:px-8 bg-secondaryAccent">
          Call Now
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-primary-default py-8 pl-5 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <nav className="pt-8">
          <ul className="space-y-2 cursor-pointer">
            <li>
              <a href="/" className="hover:text-secondaryPrimary-default">
                Home
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-secondaryPrimary-default "
              >
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-secondaryPrimary-default">
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-secondaryPrimary-default "
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
