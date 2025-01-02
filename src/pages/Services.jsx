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
        <div className="w-full px-10 py-8 mx-auto max-w-7xl">
          <h1 className="mt-6 text-2xl font-bold text-center">
            Residential and Commercial
          </h1>
          <div className="w-full grid-cols-3 px-6 mb-6 lg:space-x-6 lg:grid">
            <ServiceSection
              imgSrc="assets/images/RepairAndRenewals.svg"
              altText="Repair and Renewals"
              title="Repair and Renewals"
              items={[
                "Extensions",
                "Switchboard Upgrades",
                "New Sockets and more...",
              ]}
            />
            <ServiceSection
              imgSrc="assets/images/Installation.svg"
              altText="Installation"
              title="Installation"
              items={[
                "All types Lighting",
                "Appliance Installation",
                "Security System Installation",
                "Network and Data Cabling and more...",
              ]}
            />
            <ServiceSection
              imgSrc="assets/images/InspectionAndTesting.svg"
              altText="Inspection and Testing"
              title="Inspection and Testing"
              items={[
                "Wiring Inspection",
                "Insulation Resistance Testing",
                "Fault finding and more...",
              ]}
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

function ServiceSection({ imgSrc, altText, title, items }) {
  return (
    <div className="mt-4">
      <div className="relative w-full">
        <img
          src={imgSrc}
          alt={altText}
          className="object-cover h-full border rounded-lg shadow-lg"
        />
        <p className="absolute w-full pl-2 text-lg font-bold text-blue-900 bg-white bg-opacity-80 bottom-2">
          {title}
        </p>
      </div>
      <ul className="mt-2 text-sm tracking-wide text-gray-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ImCheckmark className="mr-1 text-xs text-yellow-400 " />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
