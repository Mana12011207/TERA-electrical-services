import React from "react";
import BaseLayout from "../components/BaseLayout";

function Contact() {
  return (
    <>
      <BaseLayout>
        <div className="flex flex-col items-center w-full">
          <div className="relative w-full ">
            <img
              src="assets/images/ContactUs.svg"
              alt="Contact us"
              className="object-cover w-full h-32 md:min-h-64 "
            />
            <p className="absolute inset-0 flex items-center justify-center text-lg text-white bg-black bg-opacity-40 md:text-2xl">
              Contact Us
            </p>
          </div>
        </div>
      </BaseLayout>
    </>
  );
}

export default Contact;
