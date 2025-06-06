import React from 'react';

const TopCourses = () => {
  const courses = [
    {
      imageUrl: 'https://via.placeholder.com/300/ADD8E6/FFFFFF?Text=AutoCAD',
      title: 'AutoCAD Courses',
      description: 'Master the fundamentals and advanced techniques of 2D and 3D CAD using AutoCAD software.',
    },
    {
      imageUrl: 'https://via.placeholder.com/300/87CEEB/FFFFFF?Text=CATIA',
      title: 'CATIA Courses',
      description: 'Learn the powerful CAD, CAE, and CAM capabilities of CATIA, essential for automotive and aerospace design.',
    },
    {
      imageUrl: 'https://via.placeholder.com/300/6495ED/FFFFFF?Text=SolidWorks',
      title: 'SolidWorks Courses',
      description: 'Explore solid modeling and design with SolidWorks, a user-friendly software for various engineering applications.',
    },
    {
      imageUrl: 'https://via.placeholder.com/300/4169E1/FFFFFF?Text=Autodesk%20Fusion%20360',
      title: 'Autodesk Fusion 360 Courses',
      description: 'Dive into the integrated CAD, CAM, CAE, and PCB platform of Autodesk Fusion 360 for modern product development.',
    },
    {
      imageUrl: 'https://via.placeholder.com/300/1E90FF/FFFFFF?Text=Digital%20Marketing',
      title: 'Digital Marketing Courses',
      description: 'Learn the strategies and tactics to succeed in the online world, from SEO to social media and content marketing.',
    },
    {
      imageUrl: 'https://via.placeholder.com/300/0000CD/FFFFFF?Text=IT%20Related',
      title: 'IT Related Courses',
      description: 'Explore a wide range of courses in information technology, including programming, networking, cybersecurity, and more.',
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
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Top Courses</h2>
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