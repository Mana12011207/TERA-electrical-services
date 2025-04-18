import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

// List of FAQs with their respective questions and answers
const faqs = [
  {
    question: "Are your electricians licensed and insured?",
    answer:
      "Yes, all our electricians are fully licensed and insured, ensuring high-quality, reliable service for our clients.",
  },
  {
    question: "What types of electrical services do you offer?",
    answer:
      "We offer a range of electrical services, including residential and commercial wiring, panel upgrades, lighting installations, electrical repairs, inspections, and emergency support.",
  },
  {
    question: "What is the cost of a service call?",
    answer:
      "Costs vary depending on the complexity and duration of the job. Contact us for a free quote, and we’ll provide an estimate tailored to your need.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "Simply use the contact form on our website, give us a call, or email us. We’ll get back to you as soon as possible to arrange a convenient time.",
  },
  {
    question: "Can you install energy-efficient lighting?",
    answer:
      "Absolutely! We specialize in energy-efficient solutions to help you save on electricity bills and reduce environmental impact.",
  },
  {
    question: "How do I know if I need to upgrade my electrical panel?",
    answer:
      "If your home is older, your lights flicker, or you frequently experience tripped breakers, it may be time to upgrade. We can assess your panel to ensure it meets current safety standards and fits your power needs.",
  },
  {
    question: "What should I do if an appliance trips the circuit breaker?",
    answer:
      "First, unplug the appliance and try to reset the breaker. If it trips again, it could indicate an overloaded circuit or faulty wiring. Contact us to diagnose the issue safely.",
  },
];

// State to track the visible FAQ answer based on the clicked question
function FAQs() {
  const [visibleIndex, setVisibleIndex] = useState(null);

  // Toggle the visibility of the FAQ answer when a question is clicked
  const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center ">
      {faqs.map((faq, index) => (
        <div key={index} className="w-full md:w-[70%] ">
          <div className="flex items-center justify-center w-full ">
            <p className="my-2 mr-2 tracking-wide text-center lg:text-xl">
              {faq.question}
            </p>
            <button onClick={() => toggleAnswer(index)}>
              {visibleIndex === index ? (
                <FaMinusCircle className="text-lg lg:text-2xl text-primaryAccent" />
              ) : (
                <FaPlusCircle className="text-lg lg:text-2xl text-primaryAccent" />
              )}
            </button>
          </div>
          <p
            className={`text-gray-500 text-sm text-center tracking-wide transition-all duration-700 ease-in-out lg:text-lg ${
              visibleIndex === index
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {faq.answer}
          </p>
          <hr className="my-4 border-t border-gray-300 border-solid" />
        </div>
      ))}
    </div>
  );
}

export default FAQs;
