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
      <div className="grid w-full h-full grid-cols-2">
        {/* Branding Image */}
        <img
          className="w-auto h-auto"
          src="assets/images/HeaderLogo.png"
          alt="Company logo"
        ></img>

        {/* Collapsed Hamburger */}
        <button
          className=""
          onClick={toggleHamburgerMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <GrFormClose className="text-lg" />
          ) : (
            <GiHamburgerMenu />
          )}
        </button>

        {/* Horizontal Menu for larger screens */}
        <div className="hidden">
          <nav className="">
            <ul className="">
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

        {/* CTA Button */}
        <button className="hidden border border-green-900">
          <div className="">
            <span className="">Call Now</span>
            <div className="">
              <LuPhoneCall className="" />
              <a href="tel:+61411367347">411 367 347</a>
            </div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-primary-default py-8 pl-5 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <nav className="pt-8">
          <ul className="space-y-2 font-bold text-white">
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
