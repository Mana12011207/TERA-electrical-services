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
          <div className="w-full px-10 py-8 mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-center lg:text-3xl">
              Reach out TERA Electricians today
            </h2>
            <p className="mt-2 text-sm tracking-wide text-gray-500 md:text-xl">
              Our expert electricians are ready to answer any questions,
              schedule service, or provide estimates. Just leave us a message
              below, and we’ll get back to you soon.
            </p>
            <div className="flex">
              <form
                action=""
                method="get"
                className="items-center mt-2 space-y-2 text-center"
              >
                <input
                  type="text"
                  name="first name"
                  required
                  placeholder="Full name"
                  className="bg-yellow-500 border rounded-sm  bg-opacity-30 solid"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-yellow-500 border rounded-sm bg-opacity-30 solid"
                ></input>
                <input
                  type="number"
                  name="Phone"
                  placeholder="Phone"
                  className="bg-yellow-500 border rounded-sm bg-opacity-30 solid"
                ></input>
                <input
                  type="text"
                  name="address"
                  placeholder="Home Address"
                  className="bg-yellow-500 border rounded-sm bg-opacity-30 solid"
                ></input>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="bg-yellow-500 border rounded-sm bg-opacity-30 solid"
                />
                <input type="submit" className="border solid" />
              </form>
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  );
}

export default Contact;
