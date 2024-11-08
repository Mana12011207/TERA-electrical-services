import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="w-full h-8">
      <img
        className="h-full"
        src="/assets/images/TeraElectricalServicesLogo.png"
      ></img>
      <Navbar />
    </header>
  );
}

export default Header;
