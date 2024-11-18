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
      <div className="flex justify-between items-center w-full h-full pt-3 px-4 relative sm:items-end">
        <button
          className="w-8 h-8  bg-white  bg-opacity-40 rounded-full justify-items-center cursor-pointer z-10 sm:hidden"
          onClick={toggleHamburgerMenu}
        >
          {isMenuOpen ? (
            <GrFormClose className="text-lg" />
          ) : (
            <GiHamburgerMenu />
          )}
        </button>
        <img
          className="max-h-8 sm:max-h-full sm:pb-4"
          src="/assets/images/TeraElectricalServicesLogo.png"
          alt="logo"
        ></img>

        {/* Horizontal Menu for larger screens */}
        <nav className="hidden  sm:flex sm:justify-between sm:grow sm:pb-4">
          <ul className="flex justify-center grow cursor-pointer 2xl:text-2xl">
            <li className="grow text-center">
              <a href="/">Home</a>
            </li>
            <li className="grow text-center">
              <a href="/services">Services</a>
            </li>
            <li className="grow text-center">
              <a href="/about">About</a>
            </li>
            <li className="grow text-center">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
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
