import React, { useEffect, useState } from "react";
import BaseLayout from "../components/BaseLayout";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/EnquiryForm";

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
              src="assets/images/HeroImage.svg"
              alt="Hero"
              className={`w-full ${isMounted ? "animate-fadeIn" : ""}`}
            ></img>
          </div>

          <div className="px-10 mt-8">
            <h1 className="mt-2 text-4xl font-bold text-center xl:text-7xl 3xl:text-9xl">
              Welcome to
              <br /> TERA Electrical Services
            </h1>
            <p className="mt-8 text-3xl font-bold text-center xl:text-5xl 3xl:text-8xl">
              Why We're the Best Choice
            </p>

            <div className="w-full grid-cols-3 gap-6 py-8 mx-auto xl:grid max-w-7xl">
              {/* Experience and Expertices */}
              <WhyChooseUs
                imgSrc="/assets/images/ExperienceAndExpertise.svg"
                altText="Expert Experience"
                imgSrc2="/assets/images/LightBulbIcon (64 x 64 px).svg"
                title="Expert Experience"
                text="With over 15 years of experienc across Sydney, we handle a range of electrical work from residential projects to large-scale commercial buildings. Our skilled technicians ensure safe and reliable services, using the latest technologies to meet our clients' specific needs."
              />
              {/* Transparent Pricing */}
              <WhyChooseUs
                imgSrc="/assets/images/TransparentPricing.svg"
                altText="Transparent Pricing"
                imgSrc2="/assets/images/LightBulbIcon (64 x 64 px).svg"
                title="Transparent Pricing"
                text="We promise transparent pricing that earns our clients' trust.
                  We provide detailed estimates upfront, ensuring there are no
                  hidden costs or unexpected charges. All fees are clearly
                  outlined, and we deliver high-quality services at prices that
                  provide excellent value."
              />
              {/* Customer Supports */}
              <WhyChooseUs
                imgSrc="/assets/images/CustomerSupports.svg"
                altText="Customer supports"
                imgSrc2="/assets/images/LightBulbIcon (64 x 64 px).svg"
                title="Customer supports"
                text="We are committed to prompt and courteous service, efficiently addressing your questions and concerns. Your satisfaction is our top priority. We maintain open communication, keeping you updated on project progress and plans."
              />
            </div>

            {/* Testimonials */}
            <Testimonials />
            <p className="text-lg font-bold text-center">Contact Us Now!</p>
            <ContactForm />
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
      <p className="m-2 tracking-wide text-center text-gray-500 text-md">
        {text}
      </p>
    </div>
  );
}
export default Home;
