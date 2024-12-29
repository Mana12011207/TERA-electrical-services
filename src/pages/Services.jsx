import React from "react";
import BaseLayout from "../components/BaseLayout";

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
        <h1 className="mt-8 text-lg text-center">Residential and Commercial</h1>
        <div className="w-full px-10 py-8 mx-auto max-w-7xl">
          <div>
            <p className="text-center">Repair and Renewals</p>
            <img
              src="assets/images/RepairAndRenewals.svg"
              alt="RepairAndRenewals"
            />
            <ul>
              <li>Extensions</li>
              <li>Switchboard Upgrades</li>
              <li>New Sockets and more...</li>
            </ul>
          </div>
          <div>
            <p className="text-center">Installation</p>
            <img src="assets/images/Installation.svg" alt="Installation" />
            <ul>
              <li>All types Lighting</li>
              <li>Appliance Installation</li>
              <li>Security System Installation</li>
              <li>Network and Data Cabling and more...</li>
            </ul>
          </div>
          <div>
            <p className="text-center">Inspection and Testing</p>
            <img
              src="assets/images/InspectionAndTesting.svg"
              alt="InspectionAndTesting"
            />
            <ul>
              <li>Wiring Inspection</li>
              <li>Insulation Resistance Testing</li>
              <li>Electrical Load Testing</li>
              <li>Fault finding and more...</li>
            </ul>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Services;
