import React from "react";
import BaseLayout from "../components/BaseLayout";

function Home() {
  return (
    <>
      <BaseLayout>
        <div className="flex flex-col">
          <div className="w-full">
            <img
              src="assets/images/HeroImage.svg"
              alt="Hero"
              className="w-full"
            ></img>
          </div>
          <div className="hidden bg-primaryAccent-default">
            <button>Get in Touch Now</button>
          </div>

          <div className="px-6 mt-2">
            <h1 className="text-2xl font-bold text-center">
              Welcome to
              <br /> TERA Electrical Services
            </h1>
            <h2 className="mt-2 font-bold text-center text-md">
              Why We're the Best Choice
            </h2>

            <div>
              <img
                src="assets/images/ExperienceAndExpertise.svg"
                alt="Experience and Expertise"
                className="rounded-lg"
              ></img>
              <h3 className="font-semibold text-center">
                Experience and Expertise
              </h3>
              <p>
                For over 15 years, we have been involved in various electrical
                works, ranging from residential projects to large-scale
                commercial buildings and office installations. Our experienced
                technicians provide safe and reliable services, leveraging the
                latest technologies and knowledge to deliver tailored solutions
                that meet our clients' needs.
              </p>
            </div>

            <div>
              <img
                src="assets/images/TransparentPricing.svg"
                alt="Transparent Pricing"
                className="rounded-lg"
              ></img>
              <h3 className="font-semibold text-center">Transparent Pricing</h3>
              <p>
                We promise transparent pricing that earns our clients' trust. We
                provide detailed estimates upfront, ensuring there are no hidden
                costs or unexpected charges. All fees are clearly outlined, and
                we deliver high-quality services at prices that provide
                excellent value. Our pricing structure is competitive yet fair,
                offering the best solutions for each project's requirements.
              </p>
            </div>
            <div>
              <img
                src="assets/images/CustomerSupports.svg"
                alt="Customer supports"
                className="rounded-lg"
              ></img>
              <h3 className="font-semibold text-center">Customer Supports</h3>
              <p>
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
            <div>
              {/* Testimonials */}
              <h2 className="font-bold text-center">
                What Our Clients Say About Us
              </h2>
            </div>
            <img src="assets/images/TestimonyStars.svg" alt="TestimonyStarts" />
            <p>Slider here</p>
          </div>
        </div>
      </BaseLayout>
    </>
  );
}

export default Home;
