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
      <div className="flex justify-between w-full h-full">
        <button
          className="z-10 w-8 h-8 mt-2 ml-2 bg-white rounded-full cursor-pointer bg-opacity-40 justify-items-center md:hidden shrink-0"
          onClick={toggleHamburgerMenu}
        >
          {isMenuOpen ? (
            <GrFormClose className="text-lg" />
          ) : (
            <GiHamburgerMenu />
          )}
        </button>
        <img
          className="box-border w-auto h-auto mt-2 ml-2 max-h-8 sm:max-h-36 xl:ml-32"
          src="assets/images/Tera-electrical-services.png"
          alt="logo"
        ></img>

        {/* Horizontal Menu for larger screens */}
        <div className="hidden md:flex">
          <nav className="w-auto md:flex md:items-end md:mx-2">
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
        <button className="box-border flex-col items-center hidden h-auto mt-2 mr-2 font-bold rounded-lg md:flex -auto md:max-h-36 bg-secondaryAccent xl:mr-32 2xl:h-auto 2xl:w-80">
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
