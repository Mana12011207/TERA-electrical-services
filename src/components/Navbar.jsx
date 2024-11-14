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
      <div className="flex justify-between items-center w-full pt-2 px-4 relative">
        <button
          className="w-8 h-8  bg-white  bg-opacity-40 rounded-full justify-items-center cursor-pointer"
          onClick={toggleHamburgerMenue}
        >
          {isVisible ? <GrFormClose /> : <GiHamburgerMenu />}
        </button>
        <img
          className="max-h-8"
          src="/assets/images/TeraElectricalServicesLogo.png"
          alt="logo"
        ></img>
      </div>
      <div
        className={`fixed top-0 left-0 w-full bg-primary-default bg-opacity-50 py-8 pl-5 transform transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav>
          <ul className="space-y-2 cursor-pointer">
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
            </li>{" "}
          </ul>{" "}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
