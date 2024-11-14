import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleHamburgerMenue = () => {
    setIsVisible(!isVisible);
    console.log("メニューを開きました");
  };

  return (
    <>
      <div className="flex justify-between items-center w-full pt-2 px-4 ">
        <img
          className="max-h-8"
          src="/assets/images/TeraElectricalServicesLogo.png"
          alt="logo"
        ></img>
        <button onClick={toggleHamburgerMenue}>
          <GiHamburgerMenu className="text-xl " />
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-full bg-red-100 py-8 pl-5 transform transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav>
          <button onClick={toggleHamburgerMenue} className="text-xl mb-4">
            <IoMdClose />
          </button>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-500">
                Home
              </a>
            </li>{" "}
            <li>
              <a href="#services" className="hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">
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
