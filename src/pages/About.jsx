import React from "react";
import BaseLayout from "../components/BaseLayout";

function About() {
  return (
    <BaseLayout>
      <div className="w-full">
        <img
          src="assets/images/AboutUS.svg"
          alt="About us"
          className="w-full"
        />
      </div>
    </BaseLayout>
  );
}

export default About;
