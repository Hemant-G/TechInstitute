import React from "react";

const RegisterNow = () => {
  return (
    <div className="flex flex-row items-center min-h-[400px]">
      <div className="flex-1">
        <img
          alt="Computer Training"
          className="block w-full h-auto object-cover min-h-[400px]"
        />
      </div>
      <div className="flex-1 bg-gradient-to-r from-gray-700 to-gray-900 bg-opacity-60 p-6 md:p-10 min-h-[400px] flex flex-col justify-center">
        <div className="container mx-auto">
          <div className="row">
            <div className="md:col-span-6 md:col-start-7">
              <div className="sec-title3">
                <h3 className="title text-white text-xl md:text-2xl lg:text-3xl font-bold mx-3 mb-4">
                  <b className="text-blue-600">
                    LEADING COMPUTER EDUCATION CENTER
                  </b>{" "}
                  PROVIDES EXCITING OPPORTUNITIES FOR{" "}
                  <br className="hidden lg:block" />
                  YOU TO LEARN
                </h3>
                <div className="desc text-white text-sm md:text-base text-justify mx-3 mb-6">
                  Our established computer training institute is dedicated to
                  learning, application, and growth. Since our inception, we
                  have achieved significant milestones and continue to advance
                  in providing quality education, which is essential in today's
                  world. Many individuals are keen to learn but lack clarity on
                  where to begin. This is where our institute plays a crucial
                  role. We aim to offer in-demand courses that ensure you gain
                  practical skills, not just theoretical knowledge. Our training
                  focuses on making students technically and theoretically
                  proficient. We aspire to be recognized as a{" "}
                  <b className="text-blue-600">
                    Top Computer Training Institute
                  </b>
                  . As a leading{" "}
                  <b className="text-blue-600">
                    Computer Training Institute in a prominent region
                  </b>
                  , we bring years of experience in the IT industry. Our center
                  provides practical, hands-on training using real-world
                  systems, regular doubt-clearing sessions, career guidance,
                  live projects, case studies, and comprehensive tools. We offer
                  a range of courses including{" "}
                  <b className="text-blue-600">
                    Web Design, Web Development, Java, Python, HTML, CSS,
                    Advanced Excel, Digital Marketing, Graphic Design,
                    Accounting, Tally ERP 9,
                  </b>{" "}
                  and many more. Our institute is committed to being a{" "}
                  <b className="text-blue-500">
                    Premier Software Training Institute
                  </b>
                  , preparing students to excel confidently in their
                  professional journeys.
                </div>
              </div>
              <div className="btn-part mx-3">
                <a
                  className="inline-block bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md w-full text-center"
                  href="#"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterNow;
