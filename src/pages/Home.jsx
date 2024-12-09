import React from "react";
import BaseLayout from "../components/BaseLayout";

function Home() {
  return (
    <>
      <BaseLayout>
        <div className="w-full">
          <img
            src="assets/images/HeroImage.svg"
            alt="Hero"
            className="w-full"
          ></img>
        </div>
      </BaseLayout>
    </>
  );
}

export default Home;
