import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <>
      <footer className="w-full bg-gray-200 ">
        <div className="grid w-full grid-cols-1 gap-4 py-4 justify-items-center">
          <img
            className=""
            src="assets/images/TeraElectricalServices.png"
            alt="Company logo"
          ></img>

          {/* Services */}
          <div className="w-full justify-items-center">
            <p className="text-lg font-bold">Services</p>
            <ul>
              <li>Repair and Renewal</li>
              <li>Installation</li>
              <li>Inspection and Testing</li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center w-full">
            <p className="text-lg font-bold">Quick links</p>
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/Services">Services</a>
            <a href="/Contact">Contact</a>
          </div>

          {/* CTA button */}
          <div className="w-full justify-items-center">
            <p className="text-lg font-bold">Contact us</p>
            <button className="flex items-center border border-red-600">
              <FaPhoneSquareAlt />
              <a href="tel:+61411367347">411 367 347</a>
            </button>

            <button className="flex items-center">
              <MdEmail />
              <a href="mailto:j_huy@hotmail.com">j_huy@hotmail.com</a>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
