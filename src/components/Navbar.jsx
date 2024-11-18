import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleHamburgerMenue = () => {
    setIsVisible(!isVisible);
    console.log("メニューを開きました");
  };

  return (
    <>
      <div className="flex justify-between items-center w-full pt-3 px-4 relative">
        <button
          className="w-8 h-8  bg-white  bg-opacity-40 rounded-full justify-items-center cursor-pointe z-10 sm:hidden"
          onClick={toggleHamburgerMenue}
        >
          {isVisible ? (
            <GrFormClose className="text-lg" />
          ) : (
            <GiHamburgerMenu />
          )}
        </button>
        <img
          className="max-h-8"
          src="/assets/images/TeraElectricalServicesLogo.png"
          alt="logo"
        ></img>
      </div>

      <div
        className={`fixed sm:relative top-0 left-0 w-full sm:w-auto bg-primary-default sm:bg-secondaryPrimary-default py-8 sm:py-0 sm:pl-0 pl-5 transform transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        } sm:flex sm:justify-center`}
      >
        <nav className="pt-8 sm:py-0">
          <ul className="space-y-2 cursor-pointer sm: sm:space-y-0 sm:flex sm:space-x-14 sm:text-2xl">
            <li>
              <a href="/" className="hover:text-secondaryPrimary-default ">
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
