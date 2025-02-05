import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineElectricalServices } from "react-icons/md";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative grid items-center w-full h-full grid-cols-4 lg:p-6">
        {/* Header Logo */}
        <div className="flex items-center w-auto h-16 col-span-1 lg:justify-center">
          <a href="/">
            <img
              className=""
              src="assets/images/HeaderLogo.svg"
              alt="Company logo"
            ></img>
          </a>
        </div>

        {/* Collapsed Hamburger */}
        <button
          className="z-20 col-start-4 p-2 mr-6 justify-self-end lg:hidden"
          onClick={toggleHamburgerMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <MdClose className="text-2xl font-bold text-white" />
          ) : (
            <GiHamburgerMenu className="text-2xl font-bold" />
          )}
        </button>

        {/* Horizontal Menu for larger screens */}
        <div className="hidden h-full lg:w-full lg:grid lg:col-span-2 lg:col-start-2 lg:col-end-4">
          <nav className="flex justify-center w-full ">
            <ul className="flex items-center space-x-4 text-lg font-bold 2xl:space-x-8 2xl:text-2xl">
              <li className="hover:text-secondaryAccent">
                <a href="/">HOME</a>
              </li>
              <li className="hover:text-secondaryAccent">
                <a href="/about">ABOUT</a>
              </li>
              <li className="hover:text-secondaryAccent">
                <a href="/services">SERVICES</a>
              </li>
              <li className="hover:text-secondaryAccent">
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* CTA Button */}
        <button className="w-full col-span-4 shadow-lg min-h-10 lg:col-start-4 justify-self-center lg:rounded-lg lg:p-4 bg-secondaryPrimary">
          {" "}
          <div className="flex items-center justify-center space-x-2">
            <span className="text-left text-white text-md 2xl:text-xl">
              Call Us Today
            </span>
            <BiSolidPhoneCall className="text-md lg:text-3xl animate-pulse text-primary" />
            <a
              href="tel:+61411367347"
              className="font-bold text-white text-md 2xl:text-lg"
            >
              411 367 347
            </a>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`z-10 fixed top-0 left-0 w-full bg-secondaryAccent py-8  transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <nav className="pt-8 pl-5">
          <ul className="space-y-2 text-lg font-bold text-white ">
            <li>
              <MdOutlineElectricalServices />
              <a href="/" className="block w-full pl-5 border-b">
                HOME
              </a>
            </li>
            <li>
              <MdOutlineElectricalServices />
              <a href="/about" className="block w-full pl-5 border-b">
                ABOUT
              </a>
            </li>
            <li>
              <MdOutlineElectricalServices />
              <a href="/services" className="block w-full pl-5 border-b">
                SERVICES
              </a>
            </li>
            <li>
              <MdOutlineElectricalServices />
              <a href="/contact" className="block w-full pl-5 border-b">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
