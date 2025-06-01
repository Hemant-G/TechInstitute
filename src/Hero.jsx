import React, { useState } from 'react';

const Hero = () => {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const backgrounds = [
    'bg-gradient-to-r from-gray-900 to-gray-800',
    'bg-gradient-to-r from-indigo-900 to-blue-700',
    'bg-gradient-to-r from-green-800 to-teal-700',
    'bg-gradient-to-r from-red-800 to-rose-700',
    
    'bg-gradient-to-r from-teal-900 to-green-700',   // Another green variant
    'bg-gradient-to-r from-rose-900 to-red-700',    // Another red variant
    'bg-gradient-to-r from-slate-900 to-gray-700',   // Another gray variant
    'bg-gradient-to-r from-fuchsia-800 to-purple-600', // A purple/pink mix
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
  <div className="bg-[#1C2541] flex flex-row w-1/4 items-center text-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
  <svg className="h-10 w-10 text-blue-700 mr-4"
  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
  <path d="M8 21h8" />
</svg>
    <div>
      <h3 className="text-xl md:text-2xl font-semibold mb-1">
        All Computer Courses
      </h3>
      <p className="text-base md:text-lg text-gray-300">
        Enjoy a variety of fresh topics
      </p>
    </div>
  </div>

  <div className="bg-[#1C2541] flex flex-row w-1/4 items-center text-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
  <svg className="h-10 w-10 text-blue-700 mr-4"
  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
</svg>
    <div>
      <h3 className="text-xl md:text-2xl font-semibold mb-1">Expert Instruction</h3>
      <p className="text-base md:text-lg text-gray-300">
        Find the right instructor
      </p>
    </div>
  </div>

  <div className="bg-[#1C2541] flex flex-row w-1/4 items-center text-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
    <svg
      className="h-10 w-10 text-blue-700 mr-4"
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
    <div>
      <h3 className="text-xl md:text-2xl font-semibold mb-1">Flexible Timings</h3>
      <p className="text-base md:text-lg text-gray-300">
        Learn on your schedule
      </p>
    </div>
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