import { useState } from "react";
import React from "react";
import BaseLayout from "../components/BaseLayout";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

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

          <div className="flex flex-col items-center justify-center w-full px-10 py-8 mx-auto bg-gray-200 max-w-7xl">
            <h2 className="text-2xl font-bold text-center lg:text-3xl">
              Reach out TERA Electricians today
            </h2>
            <p className="mt-2 text-sm tracking-wide text-center text-gray-500 md:text-xl">
              Our expert electricians are ready to answer any questions,
              schedule service, or provide estimates. <br /> Just leave us a
              message below, and we’ll get back to you soon.
            </p>

            {/*  Conditional rendering based on the submitted state*/}
            {submitted ? (
              <div className="w-full bg-white bg-opacity-80">
                <p className="font-bold text-center">
                  Thank you for your enquiry. <br />
                  We'll get back to you soon!
                </p>
              </div>
            ) : (
              <div className="flex justify-center mt-6">
                <form
                  onSubmit={handleSubmit}
                  className="items-center mt-2 space-y-4"
                >
                  <div className="flex flex-col items-start ">
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-bold text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="full name"
                      required
                      placeholder="Full name"
                      size="30"
                      className="w-full p-1 border rounded-sm focus:outline-none focus:border-blue-500 solid focus:border-4"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-bold text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      size="30"
                      className="w-full p-1 border rounded-sm focus:outline-none focus:border-blue-500 solid focus:border-4"
                    ></input>
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-bold text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="Phone"
                      placeholder="Phone"
                      size="30"
                      className="w-full p-1 border rounded-sm focus:outline-none focus:border-blue-500 solid focus:border-4"
                    ></input>
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-bold text-gray-700"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Home Address"
                      size="30"
                      className="w-full p-1 border rounded-sm focus:outline-none focus:border-blue-500 solid focus:border-4"
                    ></input>
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-bold text-gray-700"
                    >
                      Enter Your Message Here
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      placeholder="Message"
                      rows="5"
                      cols="29"
                      className="w-full p-1 border rounded-sm solid focus:outline-none focus:border-blue-500 focus:border-4"
                    />
                  </div>
                  <div className="text-center">
                    <input
                      type="submit"
                      className="p-2 bg-blue-500 border rounded-sm shadow-md bg-opacity-80 solid"
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </BaseLayout>
    </>
  );
}

export default Contact;
