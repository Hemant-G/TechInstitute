import React, { useState } from 'react';

const Hero = () => {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const backgrounds = [
    'bg-gradient-to-l from-blue-950 to-blue-900 ',
  ];

  const nextBackground = () => {
    setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  const prevBackground = () => {
    setCurrentBackgroundIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length);
  };

  return (
    <section className={`h-150 py-16 md:py-24 text-white w-full relative transition-colors duration-500 ease-in-out ${backgrounds[currentBackgroundIndex]}`}>
      <div className="container mx-auto px-6 text-center w-full relative z-10 flex flex-col justify-between h-full">
        {/* Top Content */}
        <div>
          {/* Left Arrow */}
          <button
            onClick={prevBackground}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Best Computer & IT Courses
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Computer Education. Provide Best top Computer Course & IT
            Courses in Hoshiarpur
          </p>
        </div>

        {/* Bottom Content (Why Us Divs) */}
        <div className="flex flex-row w-full justify-center items-end gap-6">
        <div className="flex flex-row w-full justify-center items-end gap-6">
  <div className="flex flex-col md:flex-row w-full justify-center items-stretch gap-6 mt-8">
  {[
    {
      title: 'All Computer Courses',
      description: 'Enjoy a variety of fresh topics',
      icon: (
        <svg className="h-10 w-10 text-blue-700 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <path d="M8 21h8" />
        </svg>
      ),
    },
    {
      title: 'Expert Instruction',
      description: 'Find the right instructor',
      icon: (
        <svg className="h-10 w-10 text-blue-700 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
    },
    {
      title: 'Flexible Timings',
      description: 'Learn on your schedule',
      icon: (
        <svg className="h-10 w-10 text-blue-700 mr-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ].map((card, idx) => (
    <div
      key={idx}
      className="bg-[#1C2541] flex flex-row items-start text-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg basis-0 flex-1 min-h-[150px]"
    >
      {card.icon}
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-1">{card.title}</h3>
        <p className="text-base md:text-lg text-gray-300">{card.description}</p>
      </div>
    </div>
  ))}
</div>
        </div>

        </div>

        {/* Right Arrow */}
        <button
          onClick={nextBackground}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;