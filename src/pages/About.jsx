import React from "react";
import BaseLayout from "../components/BaseLayout";
import FAQs from "../components/FAQs";
import EnquiryForm from "../components/EnquiryForm";

function About() {
  return (
    <BaseLayout>
      <div className="flex flex-col items-center w-full">
        <div className="relative w-full ">
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="/assets/images/small/about-hero-image-small.jpg"
            />
            <source
              media="(max-width: 1024px)"
              srcSet="/assets/images/medium/about-hero-image-medium.jpg"
            />
            <img
              src="/assets/images/large/about-hero-image-large.jpg"
              alt="About us"
              className="object-cover object-center w-full h-32 md:min-h-64 lg:h-72"
            />
          </picture>
          <p className="absolute inset-0 flex items-center justify-center text-lg text-white bg-black bg-opacity-40 lg:text-3xl xl:text-5xl">
            About Us
          </p>
        </div>
        <div className="w-full px-10 py-8 mx-auto mt-8 max-w-7xl">
          <h1 className="text-2xl font-bold text-center lg:text-3xl xl:text-5xl">
            Who We Are
          </h1>
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

          {/* FAQS section */}
          <div className="my-12 lg:flex">
            <div className="flex flex-col items-center p-6 border rounded-lg shadow-lg lg:w-1/2 border-secondaryPrimary">
              <div className="flex">
                <img
                  src="assets/images/icons/FaqsIcon.svg"
                  alt="faqs"
                  className="pr-2"
                />
                <h2 className="self-end text-2xl font-bold lg:text-3xl xl:text-5xl">
                  FAQs
                </h2>
              </div>
              <FAQs />
            </div>

            {/* EnquiryForm */}
            <div className="flex flex-col lg:w-1/2">
              <h3 className="mt-12 mb-2 text-xl font-bold text-center lg:mt-4 lg:text-2xl xl:text-3xl">
                Have a question? Contact us.
              </h3>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default About;
