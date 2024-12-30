import React from "react";
import BaseLayout from "../components/BaseLayout";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <BaseLayout>
        <div className="flex flex-col w-full">
          {/* Hero Image */}
          <div className="w-full">
            <img
              src="assets/images/HeroImage.svg"
              alt="Hero"
              className="w-full"
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
            {/* Experience and Expertices */}
            <div className="w-full grid-cols-3 space-x-3 xl:grid">
              <div className="mt-4 border rounded-lg shadow-md">
                <img
                  src="assets/images/ExperienceAndExpertise.svg"
                  alt="Experience and Expertise"
                  className="object-cover w-full border rounded-lg"
                ></img>
                <h3 className="mt-4 text-2xl font-semibold text-center underline 3xl:text-3xl">
                  Experience and Expertise
                </h3>
                <p className="m-4 md:text-lg">
                  For over 15 years, we have been involved in various electrical
                  works, ranging from residential projects to large-scale
                  commercial buildings and office installations. Our experienced
                  technicians provide safe and reliable services, leveraging the
                  latest technologies and knowledge to deliver tailored
                  solutions that meet our clients' needs.
                </p>
              </div>
              {/* Transparent Pricing */}
              <div className="mt-4 border rounded-lg shadow-md">
                <img
                  src="assets/images/TransparentPricing.svg"
                  alt="Transparent Pricing"
                  className="object-cover w-full border rounded-lg"
                ></img>
                <h3 className="mt-4 text-2xl font-semibold text-center underline xl:text-3xl">
                  Transparent Pricing
                </h3>
                <p className="m-4 text-xl">
                  We promise transparent pricing that earns our clients' trust.
                  We provide detailed estimates upfront, ensuring there are no
                  hidden costs or unexpected charges. All fees are clearly
                  outlined, and we deliver high-quality services at prices that
                  provide excellent value.
                </p>
              </div>
              {/* Customer Supports */}
              <div className="mt-4 border rounded-lg shadow-md">
                <img
                  src="assets/images/CustomerSupports.svg"
                  alt="Customer supports"
                  className="object-cover w-full border rounded-lg "
                ></img>
                <h3 className="mt-4 text-2xl font-semibold text-center underline 3xl:text-3xl">
                  Customer Supports
                </h3>
                <p className="m-4 text-xl">
                  We are dedicated to providing prompt and courteous service,
                  responding to your questions and concerns with efficiency.
                  Your satisfaction is our top priority, and we strive to
                  deliver the best service possible. We value open communication
                  with our clients, keeping you informed about the progress and
                  plans of your project.
                </p>
              </div>
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
