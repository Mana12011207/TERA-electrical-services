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
          <h1 className="mt-6 text-2xl font-bold text-center lg:text-3xl xl:text-5xl">
            Residential and Commercial
          </h1>
          <div className="w-full grid-cols-3 mb-6 lg:grid lg:gap-6">
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
          <h2 className="mt-16 text-2xl font-bold text-center lg:text-3xl xl:text-5xl">
            Start in 3 Simple Steps
          </h2>
          <p className="tracking-wide text-center">
            Our streamlined approach ensures you receive top-notch support at
            every phase, delivering exceptional service from the initial
            consultation to project completion.
          </p>
          <img src="assets/images/GetInTouchIcon.svg" alt="Get in touch"></img>
          <h3 className="mt-8 text-lg font-bold text-center lg:text-2xl xl:text-4xl">
            Reach Out
          </h3>
          <p className="tracking-wide text-center">
            Contact us via phone or fill out our online form. We're here to
            listen to your electrical needs and provide solutions. Your path to
            a secure and efficient electrical system begins with just one step.
          </p>
          <img src="assets/images/InspectionIcon.svg" alt="Inspection"></img>
          <h3 className="mt-8 text-lg font-bold text-center lg:text-2xl xl:text-4xl">
            Inspection & Quote
          </h3>
          <p className="tracking-wide text-center">
            We'll visit your location for a comprehensive inspection to
            determine your electrical needs. Afterwards, we’ll provide a
            detailed estimate for the required services.
          </p>
          <img
            src="assets/images/StartWorkingIcon.svg"
            alt="We start working"
          ></img>
          <h3 className="mt-8 text-lg font-bold text-center lg:text-2xl xl:text-4xl">
            Our Team Starts Working
          </h3>
          <p className="tracking-wide text-center">
            After finalizing the details, our team will begin the work. We
            guarantee that all electrical installations and repairs will be
            conducted safely and efficiently, meeting the highest standards.
          </p>
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
          className="object-cover border rounded-lg shadow-lg"
        />
        <p className="absolute w-full pl-2 text-lg font-bold text-blue-900 bg-white bg-opacity-90 bottom-2 md:text-2xl">
          {title}
        </p>
      </div>
      <ul className="mt-2 text-sm tracking-wide text-gray-500 md:text-xl">
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
