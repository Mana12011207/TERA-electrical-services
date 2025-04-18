import React from "react";
import BaseLayout from "../components/BaseLayout";
import "/Users/manamisumi/tera-electrical-services/src/contact-us.css";
import EnquiryForm from "../components/EnquiryForm";

function Contact() {
  return (
    <>
      <BaseLayout>
        <div className="flex flex-col w-full">
          <div className="relative w-full">
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/assets/images/small/contact-hero-image-small.jpg"
              />
              <source
                media="(max-width: 1024px)"
                srcSet="/assets/images/medium/contact-hero-image-medium.jpg"
              />
              <img
                src="/assets/images/large/contact-hero-image-large.jpg"
                alt="Contact us"
                className="object-cover object-center w-full h-32 md:min-h-64 lg:h-72"
              />
            </picture>
            <p className="absolute inset-0 flex items-center justify-center text-lg text-white bg-black bg-opacity-40 lg:text-3xl xl:text-5xl">
              Contact Us
            </p>
          </div>

          {/* EnquiryForm */}
          <div className="flex flex-col items-center justify-center w-full px-10 py-8 mx-auto bg-gray-200 contact-page max-w-7xl">
            <h2 className="text-2xl font-bold text-center lg:text-3xl">
              Reach out TERA Electricians today
            </h2>
            <p className="mt-2 text-sm tracking-wide text-center text-gray-500 md:text-xl">
              Our expert electricians are ready to answer any questions,
              schedule service, or provide estimates. <br /> Just leave us a
              message below, and we’ll get back to you soon.
            </p>
            <EnquiryForm />
          </div>
        </div>
      </BaseLayout>
    </>
  );
}

export default Contact;
