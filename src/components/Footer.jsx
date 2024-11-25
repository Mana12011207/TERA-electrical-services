import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <>
      <div>
        <img
          src="assets/images/TeraElectricalServices.png"
          alt="Company logo"
        ></img>
        <div>
          {/* Services */}
          <p>Services</p>
          <ul>
            <li>Repair and Renewal</li>
            <li>Installation</li>
            <li>Inspection and Testing</li>
          </ul>
        </div>
        {/* Quick links */}
        <div>
          <p>Quick links</p>
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/Services">Services</a>
          <a href="/Contact">Contact</a>
        </div>

        {/* CTA button */}
        <div>
          <p>Contact us</p>
          <button>
            <FaPhoneSquareAlt />
            <a href="tel:+61411367347">411 367 347</a>
          </button>

          <button>
            <MdEmail />
            <a href="mailto:j_huy@hotmail.com">j_huy@hotmail.com</a>
          </button>
        </div>
      </div>
    </>
  );
}
export default Footer;
