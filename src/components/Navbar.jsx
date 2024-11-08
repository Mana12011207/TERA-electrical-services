import React from "react";

function Navbar() {
  return (
    <nav className="flex flex-direction: row">
      <ul>
        <img src="/assets/images/TeraElectricalServicesLogo.png" alt="" />
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
