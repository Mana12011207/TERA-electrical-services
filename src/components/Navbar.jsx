import React from "react";

function Navbar() {
  return (
    <nav className="flex flex-row">
      <ul className="flex space-x-4">
        <img
          className="min-w-max"
          src="/assets/images/TeraElectricalServicesLogo.png"
          alt=""
        />
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
