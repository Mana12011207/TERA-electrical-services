import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "/Users/manamisumi/tera-electrical-services/src/enquiry.css";

const EnquiryForm = () => {
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
    <div className="flex justify-center ">
      {submitted ? (
        <div className="thank-you-message">
          <p>
            Thank you for contacting us! <br />
            We'll get back to you at the earliest opportunity.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="items-center mt-4 space-y-4"
          ref={form}
        >
          <div className="flex flex-col items-start ">
            <label
              htmlFor="full-name"
              className="block text-sm font-bold text-gray-700 xl:text-lg"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Full name"
              size="30"
              className="w-full p-1 border rounded-md border-secondaryPrimary focus:outline-none focus:border-primary solid focus:border-4"
            />
          </div>
          <div className="flex flex-col items-start">
            <label
              htmlFor="full-name"
              className="block text-sm font-bold text-gray-700 xl:text-lg"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              size="30"
              className="w-full p-1 border rounded-md border-secondaryPrimary focus:outline-none focus:border-primary solid focus:border-4"
            ></input>
          </div>
          <div className="flex flex-col items-start">
            <label
              htmlFor="full-name"
              className="block text-sm font-bold text-gray-700 xl:text-lg"
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              size="30"
              className="w-full p-1 border rounded-md border-secondaryPrimary focus:outline-none focus:border-primary solid focus:border-4"
            ></input>
          </div>
          <div className="flex flex-col items-start">
            <label
              htmlFor="full-name"
              className="block text-sm font-bold text-gray-700 xl:text-lg"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Home Address"
              size="30"
              className="w-full p-1 border rounded-md border-secondaryPrimary focus:outline-none focus:border-primary solid focus:border-4"
            ></input>
          </div>
          <div className="flex flex-col items-start">
            <label
              htmlFor="full-name"
              className="block text-sm font-bold text-gray-700 xl:text-lg"
            >
              Enter Your Message Here
            </label>
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              rows="5"
              cols="29"
              className="w-full p-1 border rounded-md border-secondaryPrimary solid focus:outline-none focus:border-primary focus:border-4"
            />
          </div>
          <div className="text-center">
            <input
              type="submit"
              value="Send message"
              className="p-2 font-bold text-white border rounded-md shadow-lg cursor-pointer xl:text-lg bg-secondaryPrimary bg-opacity-80 solid hover:bg-slate-800"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default EnquiryForm;
