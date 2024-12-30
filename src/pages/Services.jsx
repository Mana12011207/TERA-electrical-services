import React from "react";
import BaseLayout from "../components/BaseLayout";
import { ImCheckmark } from "react-icons/im";

function Services() {
  return (
    <BaseLayout>
      <div className="w-full">
        <div className="relative w-full">
          <img
            src="assets/images/Services.svg"
            alt="Services"
            className="object-cover w-full h-32 md:min-h-60"
          />
          <p className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white bg-black bg-opacity-40 md:text-2xl">
            Our Services
          </p>
        </div>
        <h1 className="mt-6 text-lg font-bold text-center">
          Residential and Commercial
        </h1>
        <div className="w-full px-6 py-4 ">
          <div>
            <div className="relative">
              <img
                src="assets/images/RepairAndRenewals.svg"
                alt="RepairAndRenewals"
                className="border rounded-lg shadow-lg"
              />
              <p className="absolute w-full text-lg font-bold text-blue-700 bg-white bg-opacity-80 bottom-2">
                Repair and Renewals
              </p>
            </div>
            <ul className="mt-2 text-sm tracking-wide text-gray-500">
              <li className="flex items-center">
                <ImCheckmark className="mr-1 text-sm" /> Extensions
              </li>
              <li className="flex items-center">
                <ImCheckmark className="mr-1 text-sm" />
                Switchboard Upgrades
              </li>
              <li className="flex items-center">
                <ImCheckmark className="mr-1 text-sm" />
                New Sockets and more...
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <div className="relative">
              <img
                src="assets/images/Installation.svg"
                alt="Installation"
                className="border rounded-lg shadow-lg"
              />
              <p className="absolute w-full text-lg font-bold text-blue-700 bg-white bg-opacity-80 bottom-2">
                Installation
              </p>
            </div>
            <ul className="mt-2 text-sm tracking-wide text-gray-500">
              <li className="flex items-center">
                {" "}
                <ImCheckmark className="mr-1 text-sm" />
                All types Lighting
              </li>
              <li className="flex items-center">
                {" "}
                <ImCheckmark className="mr-1 text-sm" />
                Appliance Installation
              </li>
              <li className="flex items-center">
                {" "}
                <ImCheckmark className="mr-1 text-sm" />
                Security System Installation
              </li>
              <li className="flex items-center">
                {" "}
                <ImCheckmark className="mr-1 text-sm" />
                Network and Data Cabling and more...
              </li>
            </ul>
          </div>
          <div className="mt-4 ">
            <div className="relative">
              <img
                src="assets/images/InspectionAndTesting.svg"
                alt="InspectionAndTesting"
                className="border rounded-lg shadow-lg"
              />
              <p className="absolute w-full text-lg font-bold text-blue-700 bg-white bg-opacity-80 bottom-2">
                Inspection and Testing
              </p>
            </div>
            <ul className="mt-2 text-sm tracking-wide text-gray-500">
              <li className="flex items-center">
                {" "}
                <ImCheckmark className="mr-1 text-sm" />
                Wiring Inspection
              </li>
              <li className="flex items-center">
                {" "}
                <ImCheckmark className="mr-1 text-sm" />
                Insulation Resistance Testing
              </li>
              <li className="flex items-center">
                {" "}
                <ImCheckmark className="mr-1 text-sm" />
                Electrical Load Testing
              </li>
              <li className="flex items-center">
                {" "}
                <ImCheckmark className="mr-1 text-sm" />
                Fault finding and more...
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Services;
