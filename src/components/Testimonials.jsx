import React, { useState, useEffect } from "react";

const reviews = [
  {
    name: "Jane H",
    review:
      "The team at TERA Electrical Services was outstanding! They were prompt, professional, and their work was top-notch. I had some complex wiring issues at my home, and they resolved everything quickly and efficiently. Highly recommended!",
  },
  {
    name: "Patric K",
    review:
      "I hired TERA Electrical Services for a commercial project, and they exceeded all my expectations. Their attention to detail and commitment to safety were evident throughout the entire process. Great job!",
  },
  {
    name: "Liam D",
    review:
      "TERA Electrical Services provided excellent customer service and high-quality work. They installed new lighting fixtures in my home, and the results are fantastic. I'll definitely use them again for future projects.",
  },
  {
    name: "Ava M",
    review:
      "I had an emergency situation with my electrical system, and TERA Electrical Services responded quickly and resolved the issue in no time. Their quick response and expert handling of the situation were greatly appreciated.",
  },
  {
    name: "John S",
    review:
      "The electricians from TERA were very knowledgeable and efficient. They helped us upgrade our electrical panel and made sure everything was up to code. I appreciate their professionalism and expertise.",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center w-full my-12">
        <p className="text-3xl font-bold text-center xl:text-4xl 3xl:text-7xl">
          What Our Clients Say About Us
        </p>

        <div className="relative w-full max-w-xl mt-6 overflow-hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="flex-shrink-0 w-full">
                  <div className="flex flex-col items-center p-8 bg-yellow-500 rounded-lg shadow-md ">
                    <p className="">{review.review}</p>
                    <p className="mt-4 font-bold text-center">{review.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
