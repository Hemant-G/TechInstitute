import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set the first item as initially open

  const faqItems = [
    {
      question: (
        <div className="flex items-center">
          <svg
            className="mr-3 text-white h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-7" />
            <path d="M15 2v7" />
            <path d="M9 6v1" />
          </svg>
          <span className="text-white">Stuck on what course to study?</span>
        </div>
      ),
      answer:
        "We offer a wide range of certifiable training courses, with flexible timings.",
    },
    {
      question: (
        <div className="flex items-center">
          <svg
            className="mr-3 text-gray-600 h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>Is it certified courses?</span>
        </div>
      ),
      answer:
        "Every course comes with an ISO-recognized certification that can hold great value in the professional world.",
    },
    {
      question: (
        <div className="flex items-center">
          <svg
            className="mr-3 text-gray-600 h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span>What about teachers & staff?</span>
        </div>
      ),
      answer:
        "we have well-endured and largely educated coaches who have in- depth knowledge of the software and the courses.",
    },
    {
      question: (
        <div className="flex items-center">
          <svg
            className="mr-3 text-gray-600 h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>What is Timings?</span>
        </div>
      ),
      answer:
        "A student’s pace is appreciated. We do not follow the batch system. Any student can drop in at any time available to them.",
    },
    // ... more FAQs
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-3/5 py-12 m-auto bg-[#F9F9F9]">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2B3A8C] mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-md shadow-sm ${
                index === 0 ? "rounded-t-md" : ""
              }`}
            >
              <button
                className={`flex items-center justify-between w-full py-4 px-6 font-semibold text-[#1C2541] focus:outline-none ${
                  index === 0 ? "bg-blue-600 text-white rounded-t-md" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  } ${index === 0 ? "text-white" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="py-4 px-6 text-gray-700 bg-gray-100 rounded-b-md">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
