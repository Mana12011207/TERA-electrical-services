import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("メニューを開きました");
  };

  return (
    <>
      {/* Collapsed Hamburger */}
      <div className="w-full h-full lg:grid lg:grid-cols-3 lg:gap-4">
        <button
          className="z-10 w-8 h-8 mt-2 ml-2 bg-white rounded-full cursor-pointer bg-opacity-40 justify-items-center lg:hidden shrink-0"
          onClick={toggleHamburgerMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <GrFormClose className="text-lg" />
          ) : (
            <GiHamburgerMenu />
          )}
        </button>

        {/* Branding Image */}
        <img
          className="box-border w-auto h-auto max-h-8 lg:col-span-1"
          src="assets/images/TeraElectricalServices.png"
          alt="logo"
        ></img>

        {/* Horizontal Menu for larger screens */}
        <div className="hidden lg:grid lg:col-span-1">
          <nav className="w-auto lg:flex lg:items-end">
            <ul className="flex space-x-10 cursor-pointer sm:text-sm lg:text-xl xl:text-2xl">
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
        <button className="box-border flex-col items-center hidden w-auto h-auto font-bold rounded-lg lg:flex bg-secondaryAccent">
          <div className="p-4">
            <span className="border border-red-500">Call Now</span>
            <div className="flex items-center">
              <LuPhoneCall className="mr-2 text-lg font-bold" />
              <a href="tel:+61411367347">411 367 347</a>
            </div>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-primary-default py-8 pl-5 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <nav className="pt-8">
          <ul className="space-y-2 font-bold cursor-pointer">
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
