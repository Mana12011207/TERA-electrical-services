import React from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <>
      <footer className="w-full bg-black">
        <div className="grid w-full grid-cols-1 gap-4 py-4 justify-items-center md:grid-cols-2 xl:grid-cols-4 ">
          <img
            className="rounded-xl"
            src="assets/images/TeraElectricalServices.png"
            alt="Company logo"
          ></img>

          {/* Services */}
          <div className="flex flex-col items-center w-full mt-4 text-white">
            <p className="text-xl font-bold">Services</p>
            <ul className="flex flex-col items-center mt-2 text-sm">
              <li>Repair and Renewal</li>
              <li>Installation</li>
              <li>Inspection and Testing</li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center w-full mt-4 text-white">
            <p className="text-xl font-bold">Quick links</p>
            <div className="flex flex-col mt-2 text-sm">
              <a href="/">Home</a>
              <a href="/About">About</a>
              <a href="/Services">Services</a>
              <a href="/Contact">Contact</a>
            </div>
          </div>

          {/* CTA button */}
          <div className="w-full mt-4 text-white justify-items-center">
            <p className="text-xl font-bold">Contact us</p>
            <button className="flex flex-col items-center mt-2">
              <BsFillTelephoneForwardFill className="box-border p-1 text-2xl text-black bg-white rounded-full" />
              <a href="tel:+61411367347" className="mt-1 text-sm">
                411 367 347
              </a>
            </button>

            <button className="flex flex-col items-center mt-4">
              <AiOutlineMail className="box-border p-1 text-2xl text-black bg-white rounded-full" />
              <a href="mailto:j_huy@hotmail.com" className="text-sm">
                j_huy@hotmail.com
              </a>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
