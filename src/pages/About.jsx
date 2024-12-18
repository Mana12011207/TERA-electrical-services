import React from "react";
import BaseLayout from "../components/BaseLayout";

function About() {
  return (
    <BaseLayout>
      <div className="flex flex-col">
        <div className="w-full">
          <img
            src="assets/images/AboutUS.svg"
            alt="About us"
            className="object-cover w-full h-32"
          />
        </div>
        <p>
          With over 15 years of hands-on experience in electrical services, We
          bring a wealth of expertise and commitment to quality and safety in
          every project. Our journey as an electrician has equipped us with the
          skills and knowledge to handle a wide range of electrical needs, from
          residential repairs to complex commercial installations. We believe in
          delivering efficient, reliable solutions tailored to each client’s
          unique requirements. Our dedication to staying updated with industry
          standards ensures that every job is done right the first time,
          providing peace of mind and long-lasting results.
        </p>
        <h2>FAQs</h2>
      </div>
    </BaseLayout>
  );
}

export default About;
