import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const openHamburgerMenue = () => {
    console.log("メニューを開きました");
  };

  return (
    <nav className="flex justify-between items-center w-full pt-2 px-4">
      <img
        className="max-h-8"
        src="/assets/images/TeraElectricalServicesLogo.png"
        alt="logo"
      ></img>
      <button onClick={openHamburgerMenue}>
        <GiHamburgerMenu className="text-xl" />
      </button>
    </nav>
  );
}

export default Navbar;
