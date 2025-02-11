import React from "react";
import BaseLayout from "../components/BaseLayout";
import { ImCheckmark } from "react-icons/im";

function Services() {
  return (
    <BaseLayout>
      <div className="w-full">
        <div className="relative w-full">
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="/assets/images/small/service-hero-image-small.jpg"
            />
            <source
              media="(max-width: 1024px)"
              srcSet="/assets/images/medium/service-hero-image-medium.jpg"
            />
            <img
              src="/assets/images/large/service-hero-image-large.jpg"
              alt="About us"
              className="object-cover object-center w-full h-32 md:min-h-64 lg:h-72"
            />
          </picture>
          <p className="absolute inset-0 flex items-center justify-center text-lg text-white bg-black bg-opacity-40 lg:text-3xl xl:text-5xl">
            Our Services
          </p>
        </div>
        <div className="w-full px-10 py-8 mx-auto max-w-7xl">
          <h1 className="mt-6 text-2xl font-bold text-center lg:text-3xl xl:text-5xl">
            Commercial and Residential
          </h1>
          <p className="my-6 tracking-wide text-center lg:text-lg ">
            With years of experience as professionals, we handle a wide range of
            electrical work, from commercial facilities to private homes. <br />
            If you have any questions, please feel free to contact us.
          </p>

          {/* Services */}
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

          {/* Start in 3 simple steps */}
          <div className="w-full">
            <h2 className="mt-16 text-2xl font-bold text-center lg:text-3xl xl:text-5xl">
              Start in 3 Simple Steps
            </h2>
            <p className="my-6 tracking-wide text-center lg:text-lg">
              Our streamlined approach ensures you receive top-notch support at
              every phase, <br />
              delivering exceptional service from the initial consultation to
              project completion.
            </p>

            {/* Get in touch */}
            <div className="w-full lg:grid lg:grid-cols-3 lg:gap-6">
              <div className="flex flex-col items-center">
                <img
                  src="assets/images/icons/GetInTouchIcon.svg"
                  alt="Get in touch"
                  className="mt-8 mb-2 "
                ></img>
                <h3 className="text-lg font-bold text-center lg:text-2xl xl:text-3xl">
                  Reach Out
                </h3>
                <p className="tracking-wide text-center text-gray-500">
                  Contact us via phone or fill out our online form. We're here
                  to listen to your electrical needs and provide solutions. Your
                  path to a secure and efficient electrical system begins with
                  just one step.
                </p>
              </div>
              {/* Inspection */}
              <div className="flex flex-col items-center">
                <img
                  src="assets/images/icons/InspectionIcon.svg"
                  alt="Inspection"
                  className="mt-8 mb-2"
                ></img>
                <h3 className="text-lg font-bold text-center lg:text-2xl xl:text-3xl">
                  Inspection & Quote
                </h3>
                <p className="tracking-wide text-center text-gray-500">
                  We'll visit your location for a comprehensive inspection to
                  determine your electrical needs. Afterwards, we’ll provide a
                  detailed estimate for the required services.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="assets/images/icons/StartWorkingIcon.svg"
                  alt="We start working"
                  className="mt-8 mb-2"
                ></img>
                <h3 className="text-lg font-bold text-center lg:text-2xl xl:text-3xl">
                  Our Team Starts Working
                </h3>
                <p className="tracking-wide text-center text-gray-500">
                  After finalizing the details, our team will begin the work. We
                  guarantee that all electrical installations and repairs will
                  be conducted safely and efficiently, meeting the highest
                  standards.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <a href="/contact">
              <button className="p-8 mt-20 mb-10 font-bold text-white shadow-2xl rounded-3xl bg-primaryAccent lg:text-2xl hover:animate-bounce ">
                CONTACT US NOW
              </button>
            </a>
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
          className="object-cover border rounded-lg shadow-lg"
        />
        <p className="absolute w-full pl-2 text-lg font-bold text-blue-900 bg-white bg-opacity-90 bottom-2 md:text-2xl">
          {title}
        </p>
      </div>
      <ul className="mt-2 text-sm tracking-wide text-gray-500 md:text-xl">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ImCheckmark className="mr-1 text-yellow-400 text-md " />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
