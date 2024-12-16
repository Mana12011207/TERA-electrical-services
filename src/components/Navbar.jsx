import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative grid items-center w-full h-full grid-cols-3 lg:py-6">
        {/* Branding Image */}
        <div className="flex items-center col-start-1 lg:justify-center">
          <img
            className="w-auto h-16 "
            src="assets/images/HeaderLogo.svg"
            alt="Company logo"
          ></img>
        </div>

        {/* Collapsed Hamburger */}
        <button
          className="z-20 col-start-3 p-2 mr-6 bg-white border rounded-full justify-self-end lg:hidden"
          onClick={toggleHamburgerMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <MdClose className="text-2xl font-bold" />
          ) : (
            <GiHamburgerMenu className="text-2xl font-bold" />
          )}
        </button>

        {/* Horizontal Menu for larger screens */}
        <div className="hidden h-full lg:w-full lg:grid lg:col-start-2">
          <nav className="flex justify-center w-full ">
            <ul className="flex items-center space-x-4 text-lg font-bold 2xl:space-x-8 2xl:text-2xl 3xl:text-3xl">
              <li className="hover:text-secondaryAccent">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-secondaryAccent">
                <a href="/services">Services</a>
              </li>
              <li className="hover:text-secondaryAccent">
                <a href="/about">About</a>
              </li>
              <li className="hover:text-secondaryAccent">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* CTA Button */}
        <button className="w-full col-start-1 col-end-4 lg:col-start-3 lg:w-[60%] lg:justify-self-center lg:rounded-lg lg:py-2 bg-primaryAccent-default shadow-lg">
          <div className="flex items-center justify-center space-x-4">
            <div className="p-1 bg-white border rounded-full">
              <LuPhoneCall className="text-2xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-left">Call Now</span>
              <a href="tel:+61411367347" className="text-sm font-bold">
                411 367 347
              </a>
            </div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`z-10 fixed top-0 left-0 w-full bg-secondaryAccent py-8 pl-5 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <nav className="pt-8">
          <ul className="space-y-2 text-lg font-bold text-white">
            <li>
              <a href="/" className="">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="">
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
