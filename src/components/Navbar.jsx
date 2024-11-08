import React from "react";
import BaseLayout from "./BaseLayout";

function Navbar() {
  return (
    <BaseLayout>
      <nav id="navbar">
        <ul>
          <img src="/assets/images/TeraElectricalServicesLogo.png" alt="" />
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </BaseLayout>
  );
}

export default Navbar;
