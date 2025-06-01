// TestimonialCard.js
import React from 'react';

const TestimonialCard = ({ testimonial, name, role }) => (
    <div className="bg-darkOverlay bg-opacity-80 rounded-lg shadow-md p-8 text-center relative">
        <div className="text-orange-500 text-5xl font-bold absolute top-4 left-4">“</div>
        <p className="text-gray-300 mb-6 italic">{testimonial}</p>
        <div className="flex items-center justify-center mt-6">
            <div className="rounded-full bg-indigo-500 text-white font-bold w-10 h-10 flex items-center justify-center uppercase mr-3">{name.charAt(0)}</div>
            <div>
                <h4 className="text-white font-semibold">{name}</h4>
                <p className="text-gray-400 text-sm">{role}</p>
            </div>
        </div>
    </div>
);

export default TestimonialCard;