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
          className="z-10 w-8 h-8 mt-2 ml-2 bg-white rounded-full cursor-pointer bg-opacity-40 justify-items-center md:hidden"
          onClick={toggleHamburgerMenu}
        >
          {isMenuOpen ? (
            <GrFormClose className="text-lg" />
          ) : (
            <GiHamburgerMenu />
          )}
        </button>
        <img
          className="box-border w-auto h-auto mt-2 mr-2 max-h-8 sm:max-h-36"
          src="/assets/images/TeraElectricalServicesLogo.png"
          alt="logo"
        ></img>

        {/* Horizontal Menu for larger screens */}
        <div className="hidden md:flex">
          <nav className="w-auto border border-yellow-500 tems-center md:flex md:items-end">
            <ul className="flex space-x-10 cursor-pointer sm:text-sm md:text-xl xl:text-2xl">
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
        <button className="box-border items-center hidden w-auto h-auto font-bold rounded-lg md:max-h-36 md:flex bg-secondaryAccent">
          <LuPhoneCall />
          <a href="tel:+61411367347"> Call Now</a>
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
