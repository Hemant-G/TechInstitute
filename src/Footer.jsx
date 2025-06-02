import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div>
          <img
            src="../src/assets/logo.jpg"
            alt="Tech CADD Logo"
            className="h-8 mb-2"
          />{" "}
          {/* Replace */}
          <p className="text-sm">
            Shop No 4, City Center Near Bus Stand Hoshiarpur, Punjab 146001
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="/" className="hover:text-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V10c0-2.501 1.491-3.89 3.777-3.89 1.094.196 2.278.361 2.278.361v2.54h-1.26c-1.247 0-1.651.931-1.651 1.862v2.39h2.828v2.89h-2.828v6.987C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="/" className="hover:text-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.315 2h-.632C5.428 2 2 5.428 2 11.662c0 3.485 1.704 6.524 4.452 8.336a1.187 1.187 0 0 0 1.656.066L12 18.777l3.892 1.287a1.187 1.187 0 0 0 1.656-.066c2.748-1.812 4.452-4.851 4.452-8.336C22 5.428 18.572 2 12.315 2zm0 5.485a4.715 4.715 0 1 0 0 9.43 4.715 4.715 0 0 0 0-9.43zm-3.98 3.08a1.08 1.08 0 1 0 0 2.16 1.08 1.08 0 0 0 0-2.16z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="/" className="hover:text-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.707 8.293l-4 4a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 1.414zM9 12a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-400 mb-2">Address</h3>
          <p className="text-sm">
            Shop No 4, City Center Near Bus Stand Hoshiarpur, Punjab 146001
          </p>
          <p className="text-sm">6284347710</p>
          <p className="text-sm">info.techcaddjalandhar@gmail.com</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-400 mb-2">Courses</h3>
          <ul className="text-sm space-y-2">
            <li>Best Computer Courses in Hoshiarpur</li>
            <li>Web Designing Course in Hoshiarpur</li>
            <li>Web Development Course in Hoshiarpur</li>
            <li>Best Digital Marketing Course in Hoshiarpur</li>
            {/* Add more courses */}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-400 mb-2">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Training</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        <p>
          &copy; {new Date().getFullYear()} Tech CADD Computer Education. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
