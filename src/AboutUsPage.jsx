import React, { useState, useEffect, useRef } from "react";
import {
  FaBuilding,
  FaUsers,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import {
  AcademicCapIcon,
  ClockIcon,
  LightBulbIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

const AnimatedStatistic = ({ finalValue, duration = 2000, inView }) => {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false); // To ensure animation runs only once

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      let startTime;
      let animationFrameId;

      const animateValue = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setValue(Math.floor(progress * finalValue));
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animateValue);
        } else {
          hasAnimated.current = true; // Mark as animated
        }
      };

      animationFrameId = requestAnimationFrame(animateValue);

      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    } else if (!inView) {
      setValue(0); // Reset value when not in view
      hasAnimated.current = false; // Allow animation to run again if viewed
    }
  }, [finalValue, duration, inView]);

  return <h3 className="font-bold text-3xl text-gray-800">{value}+</h3>;
  {
    /* Increased font size */
  }
};

const AboutUsPage = () => {
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsInView(true);
          } else {
            setStatsInView(false);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white ">
      <div className="h-screen w-screen bg-gradient-to-r from-slate-700 to-slate-900 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-white mb-4">About Us</h1>
        <h3 className="text-xl text-gray-300">Home // About Us</h3>
      </div>
      <div className="container mx-auto px-6 md:px-12">
        {/* Introduction Section (same as before) */}
        <section className="mb-16 px-20 gap-6 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold text-gray-700 mb-2">ABOUT</h2>
            <h1 className="text-3xl lg:text-4xl font-bold  text-gray-800 mb-6">
              Welcome to <span className="text-blue-800">TECHCADD</span>{" "}
              <span className="text-blue-800">COMPUTER EDUCATION</span>
            </h1>
            <p className="text-gray-600 font-semibold text-lg mb-4">
              Our Institute provides students with a quality Education. We
              always try to put our smart works to educate our students. We know
              actually well how to educate students with innovative and fluently
              adaptable ways. We're giving Quality education to students since
              2016.
            </p>
            <p className="text-gray-600">
              We give 100 % Practical Training to our Students in every course
              with our long term Experience. Moreover with new techniques of
              Computer's we try to keep update ourselves. Always Focused on
              Practical knowledge. Always Designed course according to the need
              of students.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            {/* Placeholder for About Image */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-400 italic">About Image</span>
            </div>
          </div>
        </section>

        {/* Animated Statistics Section */}
        <section className="py-12" ref={statsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <FaBuilding className="text-blue-800 text-4xl mx-auto mb-2" />
              <AnimatedStatistic finalValue={5} inView={statsInView} />
              <p className="text-gray-500">Branches</p>
            </div>
            <div>
              <FaUsers className="text-blue-800 text-4xl mx-auto mb-2" />
              <AnimatedStatistic finalValue={35} inView={statsInView} />
              <p className="text-gray-500">Employees</p>
            </div>
            <div>
              <FaGraduationCap className="text-blue-800 text-4xl mx-auto mb-2" />
              <AnimatedStatistic finalValue={5000} inView={statsInView} />
              <p className="text-gray-500">Students</p>
            </div>
            <div>
              <FaBriefcase className="text-blue-800 text-4xl mx-auto mb-2" />
              <AnimatedStatistic finalValue={1000} inView={statsInView} />
              <p className="text-gray-500">Placements</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us? Section (Corrected Implementation) */}
        <section className="py-16 bg-gray-50 rounded-lg">
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-800 text-center mb-8">
            <span className="font-semibold text-gray-700">WHY </span>CHOOSE US ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start">
              <AcademicCapIcon className="w-8 h-8 text-blue-900 mr-4" />
              <div>
                <h3 className="font-semibold text-lg text-blue-900 mb-1">
                  Best Teachers
                </h3>
                <p className="text-gray-600 text-sm">
                  we have well-endured and largely educated coaches who have
                  in-depth knowledge of the software and the courses.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start">
              <ClockIcon className="w-8 h-8 text-blue-900 mr-4" />
              <div>
                <h3 className="font-semibold text-lg text-blue-900 mb-1">
                  Flexible Timings
                </h3>
                <p className="text-gray-600 text-sm">
                  A student’s pace is appreciated. We do not follow the batch
                  system. Any student can drop in at any time available to them.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start">
              <LightBulbIcon className="w-8 h-8 text-blue-900 mr-4" />
              <div>
                <h3 className="font-semibold text-lg text-blue-900 mb-1">
                  Active Learning
                </h3>
                <p className="text-gray-600 text-sm">
                  Our learning methodology is based on educating the students in
                  theoretical as well as practical implementation of the
                  knowledge, which will improve their skills.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start">
              <BriefcaseIcon className="w-8 h-8 text-blue-900 mr-4" />
              <div>
                <h3 className="font-semibold text-lg text-blue-900 mb-1">
                  Placement assistance
                </h3>
                <p className="text-gray-600 text-sm">
                  Every course comes with an ISO-recognized certification that
                  can hold great value in the professional world. We provide
                  profile building support in terms of resume building, mock
                  interview preparation, soft skills and much more.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;