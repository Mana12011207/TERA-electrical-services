import React from "react";
import BaseLayout from "../components/BaseLayout";
import FAQs from "../components/FAQs";
import { FcElectricity } from "react-icons/fc";
import EnquiryForm from "../components/EnquiryForm";

function About() {
  return (
    <BaseLayout>
      <div className="flex flex-col items-center w-full">
        <div className="relative w-full ">
          <img
            src="assets/images/AboutUS.svg"
            alt="About us"
            className="object-cover w-full h-32 md:min-h-64 "
          />
          <p className="absolute inset-0 flex items-center justify-center text-lg text-white bg-black bg-opacity-40 md:text-2xl">
            About Us
          </p>
        </div>
        <div className="w-full px-10 py-8 mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold text-center">Who We Are</h1>
          <p className="mt-2 tracking-wide text-gray-500 lg:text-lg">
            With over 15 years of hands-on experience in electrical services, We
            bring a wealth of expertise and commitment to quality and safety in
            every project. Our journey as an electrician has equipped us with
            the skills and knowledge to handle a wide range of electrical needs,
            from residential repairs to complex commercial installations. We
            believe in delivering efficient, reliable solutions tailored to each
            client’s unique requirements. Our dedication to staying updated with
            industry standards ensures that every job is done right the first
            time, providing peace of mind and long-lasting results.
          </p>
          <div className="flex flex-col items-center p-6 mt-8 border border-solid rounded-lg">
            <div className="flex justify-center">
              <FcElectricity className="mr-2 text-2xl" />
              <h2 className="text-2xl">FAQs</h2>
            </div>
            <FAQs />
          </div>
          <EnquiryForm />
        </div>
      </div>
    </BaseLayout>
  );
}

export default About;
