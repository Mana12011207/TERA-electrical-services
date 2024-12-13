import React from "react";
import BaseLayout from "../components/BaseLayout";
import Testimonials from "../components/Testimonials";
import { IoPersonCircle } from "react-icons/io5";

function Home() {
  return (
    <>
      <BaseLayout>
        <div className="flex flex-col">
          {/* Hero Image */}
          <div className="w-full">
            <img
              src="assets/images/HeroImage.svg"
              alt="Hero"
              className="w-full"
            ></img>
          </div>
          <div className="mx-6">
            <h1 className="mt-2 text-2xl font-bold text-center">
              Welcome to
              <br /> TERA Electrical Services
            </h1>
            <p className="mt-8 text-xl font-bold text-center">
              Why We're the Best Choice
            </p>
            {/* Experience and Expertices */}
            <div className="mt-4 border rounded-md">
              <img
                src="assets/images/ExperienceAndExpertise.svg"
                alt="Experience and Expertise"
                className=""
              ></img>
              <h3 className="mt-2 text-lg font-semibold text-center underline">
                Experience and Expertise
              </h3>
              <p className="m-2">
                For over 15 years, we have been involved in various electrical
                works, ranging from residential projects to large-scale
                commercial buildings and office installations. Our experienced
                technicians provide safe and reliable services, leveraging the
                latest technologies and knowledge to deliver tailored solutions
                that meet our clients' needs.
              </p>
            </div>
            {/* Transparent Pricing */}
            <div className="mt-4 border rounded-md">
              <img
                src="assets/images/TransparentPricing.svg"
                alt="Transparent Pricing"
                className="rounded-lg"
              ></img>
              <h3 className="mt-2 text-lg font-semibold text-center underline">
                Transparent Pricing
              </h3>
              <p className="m-2">
                We promise transparent pricing that earns our clients' trust. We
                provide detailed estimates upfront, ensuring there are no hidden
                costs or unexpected charges. All fees are clearly outlined, and
                we deliver high-quality services at prices that provide
                excellent value. Our pricing structure is competitive yet fair,
                offering the best solutions for each project's requirements.
              </p>
            </div>
            {/* Customer Supports */}
            <div className="mt-4 border rounded-md">
              <img
                src="assets/images/CustomerSupports.svg"
                alt="Customer supports"
                className="rounded-lg"
              ></img>
              <h3 className="mt-2 text-lg font-semibold text-center underline">
                Customer Supports
              </h3>
              <p className="m-2">
                We are dedicated to providing prompt and courteous service,
                responding to your questions and concerns with efficiency. Your
                satisfaction is our top priority, and we strive to deliver the
                best service possible. We value open communication with our
                clients, keeping you informed about the progress and plans of
                your project. When you reach out to us, we offer tailored advice
                to meet your specific needs, ensuring you feel secure and
                supported throughout the process.
              </p>
            </div>
            {/* Testimonials */}
            <Testimonials />
          </div>
        </div>
      </BaseLayout>
    </>
  );
}

export default Home;
