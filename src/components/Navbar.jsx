import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full pt-2 px-4">
      <img
        className="max-h-8"
        src="/assets/images/TeraElectricalServicesLogo.png"
        alt="logo"
      ></img>
      <GiHamburgerMenu className="text-xl" />
    </nav>
  );
}

export default Navbar;
