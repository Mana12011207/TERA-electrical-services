import React from "react";
import BaseLayout from "../components/BaseLayout";

function Home() {
  return (
    <>
      <BaseLayout>
        <div flex flex-col>
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

          <div className="p-2">
            <h1 className="text-2xl font-bold text-center">
              Welcome to
              <br /> TERA Electrical Services
            </h1>
            <h2 className="font-semibold text-center text-md">
              Why We're the Best Choice{" "}
            </h2>
            <div>
              <h3>Experience and Expertise</h3>
              <p>
                For over 15 years, we have been involved in various electrical
                works, ranging from residential projects to large-scale
                commercial buildings and office installations. Our experienced
                technicians provide safe and reliable services, leveraging the
                latest technologies and knowledge to deliver tailored solutions
                that meet our clients' needs. We possess the expertise to handle
                any electrical task, including wiring, lighting installations,
                power supply system installation and maintenance, and much more.
                Our commitment to quality and safety ensures that we always
                deliver results that exceed expectations.
              </p>
            </div>

            <div>
              <h3>Transparent Pricing</h3>
              <p>
                We promise transparent pricing that earns our clients' trust. We
                provide detailed estimates upfront, ensuring there are no hidden
                costs or unexpected charges. All fees are clearly outlined, and
                we deliver high-quality services at prices that provide
                excellent value. Our pricing structure is competitive yet fair,
                offering the best solutions for each project's requirements. We
                also offer flexible plans to suit your budget, ensuring you can
                confidently rely on our services.
              </p>
            </div>
            <div>
              <h3>Customer Supports</h3>
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
              <h2>What Our Clients Say About Us</h2>
            </div>

            <img src="assets/images/TestimonyStars.svg" alt="TestimonyStarts" />
          </div>
        </div>
      </BaseLayout>
    </>
  );
}

export default Home;
