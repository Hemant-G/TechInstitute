  import React, { useState } from "react";

  const Testimonials = () => {
    const testimonials = [
      {
        id: 1,
        name: "Tarampreet Singh",
        role: "Student",
        content: [
          "I am mechanical cad student at Techcadd computer education. It's been one month to me while learning here. The environment is very friendly and teachers are very helpful with great knowledge. I'd like to recommend to all of you that you should come here and enhance your skills. Last but not the least Techcadd computer education is the best institute in Hoshiarpur.",
          "The institute provides one to one teaching with flexible timings. Currently, I'm pursuing 6 months digital marketing course here as it provides you with variety of fascinating courses at affordable prices. TechCadd hoshiarpur is not only limited to teaching but provides great placement offers as well to make their students career bright."
        ],
        initial: "T"
      },
      {
        id: 2,
        name: "Ashima Madhwa",
        role: "Student",
        content: [
          "I have seen this institute while I was on my path to some place. Since I was thinking to join computer course since long so I have decided to go for this training institute. The ambience of this institute is amazing. The staff is very cooperative. I have joined here for basic computer course. I have completed my studies so decided to learn computer skills. I am fully satisfied. Best computer training and accounting training institute."
        ],
        initial: "A"
      },
      {
        id: 3,
        name: "Sharanjit Kaur",
        role: "Student",
        content: [
          "I came to know about this institution through my friend. My name is Sharanjit Kaur Lately! I have completed my graduation in BA Hons . My teacher's name is Preeti , the way of her teaching style is best as she is able to make me understand everything very easily. I study basic computer course at Techcadd Computer Institute. Would recommend this center. Best accounting training in Hoshiarpur."
        ],
        initial: "S"
      },
      {
        id: 4,
        name: "Vandana Sharma",
        role: "Student",
        content: [
          "I'm doing web designing here and the institute staff is very good and teachers are very experienced and have excellent knowledge and good teaching skills. According to me this is the best institute in hoshiarpur. I recommend to all to visit this computer center in Hoshiarpur once and get a bright opportunity to bright their future.",
          "I have seen this institute while I was on my path to some place. Since I was thinking to join computer course since long so I have decided to go for this training institute. The ambience of this institute is amazing. The staff is very cooperative. I have joined here for basic computer course. I have completed my studies so decided to learn computer skills. I am fully satisfied. Best computer training and accounting training institute."
        ],
        initial: "V"
      },
      {
        id: 5,
        name: "DIKSHA",
        role: "Student",
        content: [
          "The institute provides one to one teaching with flexible timings. Currently, I'm pursuing 6 months digital marketing course here as it provides you with variety of fascinating courses at affordable prices. TechCadd hoshiarpur is not only limited to teaching but provides great placement offers as well to make their students career bright."
        ],
        initial: "D"
      }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const testimonialsPerSlide = 2;
    const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

    const goToSlide = (index) => {
      setCurrentSlide(index);
    };

    const goToNextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const goToPrevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const getVisibleTestimonials = () => {
      const startIndex = currentSlide * testimonialsPerSlide;
      return testimonials.slice(startIndex, startIndex + testimonialsPerSlide);
    };

    return (
      <div className="h-screen py-12 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-8">
            <h2 className=" text-indigo-700 font-bold tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What our students say
            </p>
          </div>

          <div className="relative">
            {/* Carousel container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {getVisibleTestimonials().map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-lg shadow-lg h-full"
                >
                  <h1 className="text-6xl font-extrabold text-blue-900">❝</h1>
                  <div className="mt-4 space-y-4">
                    {testimonial.content.map((paragraph, index) => (
                      <p key={index} className="text-gray-600">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="flex items-center my-4">
                    <div className="flex flex-row justify-center bg-indigo-100 w-16 rounded-full p-4">
                      <span className="text-indigo-600 text-xl font-bold">
                        {testimonial.initial}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-600">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={goToPrevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none z-10"
              aria-label="Previous slide"
              disabled={currentSlide === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${currentSlide === 0 ? 'text-gray-400' : 'text-indigo-600'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none z-10"
              aria-label="Next slide"
              disabled={currentSlide === totalSlides - 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${currentSlide === totalSlides - 1 ? 'text-gray-400' : 'text-indigo-600'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-indigo-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Testimonials;