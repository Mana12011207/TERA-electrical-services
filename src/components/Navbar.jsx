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
      <div className="flex justify-between w-full h-full sm:border sm:border-blue-500">
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
          className="max-h-8  sm:pb-4"
          src="/assets/images/TeraElectricalServicesLogo.png"
          alt="logo"
        ></img>

        {/* Horizontal Menu for larger screens */}
        <div className="flex sm:border sm:border-green-500">
          <nav className="hidden  sm:flex sm:pb-4">
            <ul className="flex cursor-pointer sm:text-sm sm:border sm:border-pink-500 2xl:text-2xl">
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
        <button className="hidden sm:flex rounded-lg pr-10 text-center bg-secondaryAcctent">
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
