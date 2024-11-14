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
        {isVisible && (
          <div className="fixed top-0 left-0 bg-red-100   w-full py-8 pl-5 transform transition-transform duration-300 ${isVisible ? 'translate-x-0' :">
            <nav>
              <button onClick={toggleHamburgerMenue}>
                <IoMdClose className="text-xl" />
              </button>
              <ul className="space-y-2">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
        )}
      </div>
      <nav></nav>
    </>
  );
}

export default Navbar;
