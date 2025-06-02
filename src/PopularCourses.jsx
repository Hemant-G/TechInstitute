import React from 'react';

const PopularCourses = () => {
  const courses = [
    { title: 'Autocad', image: '/autocad.jpg' },
    { title: 'Catia', image: '/catia.jpg' },
    { title: 'Solidworks', image: '/solidworks.jpg' },
    { title: 'Autodesk Fusion 360', image: '/autodesk-fusion.jpg' },
    { title: 'Digital Marketing', image: '/digital-marketing.jpg' },
    { title: 'IT Related Courses', image: '/it-related.jpg' },
    // You can add more specific IT courses here if you like
    // { title: 'Programming Fundamentals', image: '/programming.jpg' },
    // { title: 'Network Administration', image: '/networking.jpg' },
    // { title: 'Cybersecurity Basics', image: '/cybersecurity.jpg' },
  ];

  return (
    <section className="py-12 bg-[#F9F9F9]">
      <div className="container mx-auto px-6 text-center">
        <h3 className='text-2xl md:text-lg font-bold text-gray-600 '>SELECT COURSES</h3>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8">Explore Our Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1C2541] mb-2">{course.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;