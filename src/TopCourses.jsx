import React from 'react';

const TopCourses = () => {
  const courses = [
    {
      imageUrl: 'https://via.placeholder.com/300/008080/FFFFFF?Text=Digital%20Marketing',
      title: 'Digital Marketing Courses',
      description: 'Digital marketing is the act of dealing products through channels similar as social media, SEO, mail, and mobile apps.',
    },
    {
      imageUrl: 'https://via.placeholder.com/300/8FBC8F/FFFFFF?Text=Accounting',
      title: 'Accounting Courses',
      description: 'Accounting refers to organizing pocket sales and records. We give top Accounting Courses in Hoshiarpur.',
    },
    {
      imageUrl: 'https://via.placeholder.com/300/4682B4/FFFFFF?Text=Graphic%20Design',
      title: 'Graphic Designing Courses',
      description: 'Graphic designers produce visual conceptions, using computer software at Techcadd Computer Institute.',
    },
    {
      imageUrl: 'https://via.placeholder.com/300/D2691E/FFFFFF?Text=Basic%20Computer',
      title: 'Basic Computer Courses',
      description: 'This course covers the history and present status of computers, figuring systems, and their operations.',
    },
    {
      imageUrl: 'https://via.placeholder.com/300/556B2F/FFFFFF?Text=Coding',
      title: 'Coding Languages Courses',
      description: 'Coding Language refers to the set of instructions, or a system of rules, written in a particular programming language.',
    },
    {
      imageUrl: 'https://via.placeholder.com/300/A0522D/FFFFFF?Text=Placeholder%206',
      title: 'Placeholder Course 6',
      description: 'This is a placeholder description for the sixth course card.',
    },
  ];

  const CourseCard = ({ imageUrl, title, description }) => {
    return (
      <div className="group relative bg-blue-100 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="relative h-48 md:h-56 w-full">
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
          </div>
        </div>
        <div className="p-6 text-center group-hover:opacity-0 group-hover:translate-y-full transition-all duration-300 absolute inset-x-0 bottom-0 bg-white py-4">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">{title}</h3>
          <p className="text-sm text-gray-700">{description.substring(0, 50)}...</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-8">Our Top Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCourses;