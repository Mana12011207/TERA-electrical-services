import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import React from "react";
import BaseLayout from "../components/BaseLayout";
import "/Users/manamisumi/tera-electrical-services/src/Contact.css";

function Contact() {
  const form = useRef();

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setSubmitted(true);
        },
        (error) => {
          console.log("FAILED", error.text);
        }
      );
  };

  return (
    <>
      <BaseLayout>
        <div
          className={`flex flex-col items-center w-full ${
            submitted ? "submitted" : ""
          }`}
        >
          <div className="relative w-full">
            <img
              src="assets/images/ContactUs.svg"
              alt="Contact us"
              className="object-cover w-full h-32 md:min-h-64 "
            />
            <p className="absolute inset-0 flex items-center justify-center text-lg text-white bg-black bg-opacity-40 md:text-2xl">
              Contact Us
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-full px-10 py-8 mx-auto bg-gray-200 contact-page max-w-7xl">
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
              <div className="thank-you-message">
                <p>
                  Thank you for contacting us! <br />
                  We'll get back to you at the earliest opportunity.
                </p>
              </div>
            ) : (
              <div className="flex justify-center mt-6">
                <form
                  onSubmit={handleSubmit}
                  className="items-center mt-2 space-y-4"
                  ref={form}
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
                      name="name"
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
                      name="phone"
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
                      value="Send"
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
