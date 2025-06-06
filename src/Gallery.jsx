import React, { useState, useEffect } from 'react';

const images = [
  './IMG-20250606-WA0000.jpg',
  './IMG-20250606-WA0001.jpg',
  './IMG-20250606-WA0002.jpg',
  './IMG-20250606-WA0003.jpg',
  './IMG-20250606-WA0004.jpg',
  './IMG-20250606-WA0005.jpg',
  './IMG-20250606-WA0006.jpg',
  './IMG-20250606-WA0007.jpg',
  './IMG-20250606-WA0008.jpg',
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
    setIsAnimating(false);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    if (currentIndex !== null) {
      // Trigger animation on next tick
      const timeout = setTimeout(() => setIsAnimating(true), 20);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 py-10 px-4 ">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Gallery ${idx}`}
            onClick={() => openModal(idx)}
            className="cursor-pointer rounded-lg hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Modal */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full px-4 sm:px-6 lg:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute -top-8 -right-4 cursor-pointer text-white text-3xl font-bold rounded-full hover:text-red-500"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Image with Transition */}
            <img
              src={images[currentIndex]}
              alt="Focused"
              className={`w-full max-h-[80vh] rounded-lg shadow-lg object-contain mx-auto transform transition duration-300 ${
                isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            />

            {/* Navigation Buttons */}
            {/* Previous Button */}
<button
  onClick={showPrev}
  className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-white text-black text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 cursor-pointer"
>
  ﹤
</button>

{/* Next Button */}
<button
  onClick={showNext}
  className="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-white text-black text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 cursor-pointer"
>
  ﹥
</button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
