import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

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

function FAQs() {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index}>
          <div className="flex items-center">
            <p className="my-4 mr-4">{faq.question} </p>
            <button onClick={() => toggleAnswer(index)}>
              {visibleIndex === index ? (
                <FaMinusCircle className="text-lg" />
              ) : (
                <FaPlusCircle className="text-lg" />
              )}
            </button>
          </div>
          <p
            className={`text-gray-500 text-sm ${
              visibleIndex === index ? "" : "hidden"
            }`}
          >
            {faq.answer}
          </p>
          <hr className="border border-solid" />
        </div>
      ))}
    </div>
  );
}

export default FAQs;
