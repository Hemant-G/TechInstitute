import React from 'react';
import InstructorCard from './InstructorCard';

function TeamPage() {
  const instructors = [
    {
      id: 1,
      name: 'GURPREET SINGH',
      specialty: 'CAD HOD',
      imageUrl: 'https://media.istockphoto.com/id/1636023306/photo/portrait-of-young-hispanic-businessman-inside-office-boss-in-business-suit-smiling-and.jpg?s=612x612&w=0&k=20&c=3aC2P0heBBWlaVdFq6P711W3TMw7Lqgb5Wru6xwH8_w=', // Replace with actual path
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        google: '#',
      },
    },
    {
      id: 2,
      name: 'AMIT SHARMA',
      specialty: 'MEP INSTRUCTOR',
      imageUrl: 'https://media.istockphoto.com/id/1262964438/photo/success-happens-the-moment-you-believe-it-will.jpg?s=612x612&w=0&k=20&c=tpjbR4aaaiB43sneEWgatyFIQOmN3E-3nB5CBE5Idyg=', // Replace with actual path
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        google: '#',
      },
    },
    {
      id: 3,
      name: 'SIMRAN KAUR',
      specialty: 'CIVIL INSTRUCTOR',
      imageUrl: 'https://img.freepik.com/free-photo/medium-shot-woman-posing-indoors_23-2149915935.jpg?semt=ais_hybrid&w=740', // Replace with actual path
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        google: '#',
      },
    },
    {
      id: 4,
      name: 'RAHUL VERMA',
      specialty: 'ARCH INSTRUCTOR',
      imageUrl: 'https://img.freepik.com/free-photo/young-successful-businessman-posing_176420-1162.jpg?semt=ais_items_boosted&w=740', // Replace with actual path
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        google: '#',
      },
    },
    // Add more instructors
  ];

  return (
    <div className="flex flex-wrap justify-center p-5 bg-gray-200"> {/* Changed justify-start to justify-center */}
      <h2 className="w-full text-2xl font-bold text-gray-800 mb-5 text-center">Our Expert Teachers</h2> {/* Centered the heading */}
      <div className="flex flex-wrap justify-center mx-16"> {/* Adjusted negative margin */}
        {instructors.map(instructor => (
          <div key={instructor.id} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6"> {/* Decreased padding and margin */}
            <InstructorCard
              name={instructor.name}
              specialty={instructor.specialty}
              imageUrl={instructor.imageUrl}
              social={instructor.social}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamPage;