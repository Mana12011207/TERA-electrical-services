import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleHamburgerMenue = () => {
    setIsVisible(!isVisible);
    console.log("メニューを開きました");
  };

  return (
    <>
      <div className="flex justify-between items-center w-full pt-2 px-4">
        <img
          className="max-h-8"
          src="/assets/images/TeraElectricalServicesLogo.png"
          alt="logo"
        ></img>
        <button onClick={toggleHamburgerMenue}>
          <GiHamburgerMenu className="text-xl" />
        </button>
        {isVisible && (
          <nav>
            <ul className="bg-red-100">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        )}
      </div>
      <nav></nav>
    </>
  );
}

export default Navbar;
