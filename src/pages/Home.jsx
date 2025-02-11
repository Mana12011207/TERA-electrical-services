import React, { useEffect, useState } from "react";
import BaseLayout from "../components/BaseLayout";
import Testimonials from "../components/Testimonials";
import EnquiryForm from "../components/EnquiryForm";

function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <BaseLayout>
        <div className="flex flex-col w-full">
          {/* Hero Image */}
          <div className="relative w-full">
            <img
              src="assets/images/HeroImage.png"
              alt="Hero"
              className={`w-full ${isMounted ? "animate-zoomIn" : ""}`}
            ></img>
          </div>

          <div className="w-full px-10 pb-8 m-auto mt-8 mb-10 max-w-7xl">
            <h1 className="mt-2 text-3xl font-bold text-center lg:text-5xl xl:text-7xl">
              Welcome to
              <br /> <span className=" text-primary">TERA</span> Electrical
              Services
            </h1>
            <p className="mt-8 mb-4 text-2xl font-bold text-center lg:text-3xl xl:text-5xl">
              Why We're <span className="underline"> the Best</span> Choice
            </p>

            <div className="w-full grid-cols-3 gap-6 md:grid">
              {/* Experience and Expertices */}
              <WhyChooseUs
                imgSrc="assets/images/ExperienceAndExpertise.png"
                altText="Expert Experience"
                imgSrc2="/assets/images//icons/LightBulbIcon.svg"
                title="Expert Experience"
                text="With over 15 years of experienc across Sydney, we handle a range of electrical work from residential projects to large-scale commercial buildings. Our skilled technicians ensure safe and reliable services, using the latest technologies to meet our clients' specific needs."
              />
              {/* Transparent Pricing */}
              <WhyChooseUs
                imgSrc="/assets/images/TransparentPricing.png"
                altText="Transparent Pricing"
                imgSrc2="/assets/images/icons/LightBulbIcon.svg"
                title="Transparent Pricing"
                text="We promise transparent pricing that earns our clients' trust.
                  We provide detailed estimates upfront, ensuring there are no
                  hidden costs or unexpected charges. All fees are clearly
                  outlined, and we deliver high-quality services at prices that
                  provide excellent value."
              />
              {/* Customer Supports */}
              <WhyChooseUs
                imgSrc="/assets/images/CustomerSupports.png"
                altText="Customer supports"
                imgSrc2="/assets/images/icons/LightBulbIcon.svg"
                title="Customer supports"
                text="We are committed to prompt and courteous service, efficiently addressing your questions and concerns. Your satisfaction is our top priority. We maintain open communication, keeping you updated on project progress and plans."
              />
            </div>

            {/* Testimonials */}
            <div className="w-full p-8 mt-10 bg-gray-100 rounded-sm lg:flex">
              <div className="lg:w-1/2">
                <Testimonials />
              </div>
              <div className="lg:w-1/2">
                <p className="text-2xl font-bold text-center lg:text-3xl xl:text-5xl">
                  Contac Us Today!
                </p>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  );
}

function WhyChooseUs({ imgSrc, altText, title, text, imgSrc2 }) {
  return (
    <div className="mt-2 rounded-lg ">
      <img
        src={imgSrc}
        alt={altText}
        className="object-cover w-full rounded-md"
      />
      <div className="flex items-center">
        <img src={imgSrc2} alt="bulb-icon" className="animate-bounce" />
        <h3 className="mt-4 text-lg font-bold 3xl:text-3xl">{title}</h3>
      </div>
      <p className="m-2 mb-8 tracking-wide text-center text-gray-500 text-md lg:text-lg">
        {text}
      </p>
    </div>
  );
}
export default Home;
