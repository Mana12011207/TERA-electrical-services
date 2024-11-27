import React from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <>
      <footer className="w-full bg-black">
        <div className="grid w-full grid-cols-1 gap-4 py-4 justify-items-center sm:grid-cols-2 xl:grid-cols-4 ">
          <div className="flex items-center  sm:col-start-1 sm:row-start-1">
            <img
              className="rounded-xl"
              src="assets/images/TeraElectricalServices.png"
              alt="Company logo"
            ></img>
          </div>

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
          <div className="flex flex-col items-center w-full mt-4 text-white sm:col-start-2 sm:row-start-1 sm:mt-0">
            <p className="text-xl font-bold">Quick links</p>
            <div className="flex flex-col mt-2 text-sm">
              <a href="/" className="hover:text-secondaryAccent">
                Home
              </a>
              <a href="/About" className="hover:text-secondaryAccent">
                About
              </a>
              <a href="/Services" className="hover:text-secondaryAccent">
                Services
              </a>
              <a href="/Contact" className="hover:text-secondaryAccent">
                Contact
              </a>
            </div>
          </div>

          {/* CTA button */}
          <div className="w-full mt-4 text-white justify-items-center">
            <p className="text-xl font-bold">Contact us</p>
            <button className="flex flex-col items-center mt-2 hover:text-secondaryAccent">
              <BsFillTelephoneForwardFill className="box-border p-1 text-2xl text-black bg-white rounded-full" />
              <a href="tel:+61411367347" className="mt-1 text-sm">
                411 367 347
              </a>
            </button>

            <button className="flex flex-col items-center mt-4 hover:text-secondaryAccent">
              <MdEmail className="box-border p-1 text-2xl text-black bg-white rounded-full" />
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
