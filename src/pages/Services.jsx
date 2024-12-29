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
        <h1>Residential and Commercial</h1>
      </div>
    </BaseLayout>
  );
}

export default Services;
