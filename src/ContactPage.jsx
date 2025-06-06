import React from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-gray-100 ">
        <div className="h-120 w-screen bg-gradient-to-r from-slate-700 to-slate-900 flex flex-col items-center justify-center mb-24">
        <h1 className="text-6xl font-bold text-white mb-4">Contact Us</h1>
        <h3 className="text-xl text-gray-300">Home // Contact</h3>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Address */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-gray-200 rounded-full p-2 mb-2">
              <MdLocationOn className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600 text-sm">
                Office 370 , Eminent Mall , Hoshiarpur  <br />
                146001
              </p>
            </div>
          </div>

          {/* Email Address */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-gray-200 rounded-full p-2 mb-2">
              <MdEmail className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Email Address</h3>
              <p className="text-gray-600 text-sm">
                smgcadd@gmail.com
              </p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-gray-200 rounded-full p-2 mb-2">
              <MdPhone className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Phone Number</h3>
              <p className="text-gray-600 text-sm">+1882 318 705</p>
            </div>
          </div>
        </div>

        {/* Map and Form */}
        <div className="flex flex-col md:flex-row w-full gap-6 mb-24">
          {/* Google Map */}
          <div className="bg-white rounded-lg shadow-md p-4 mt-8 md:w-1/2">
            <div className="rounded-md overflow-hidden shadow-sm">
               {" "}
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBpQgwigp3DjPajYTFvfah20aLhS1aM41M&q=place_id:ChIJZ83UIgPjGjkRsbHvlhCFMNM"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-4 mt-8 md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-600 mb-6">
              Get In Touch With Us
            </h2>
            <p className="text-gray-700 mb-4">
              For more information you can call us on the given number or more.
              Grab opportunity for enroll in{" "}
              <span className="font-bold text-blue-800">
                BEST COMPUTER COURSES
              </span>{" "}
              near your town. Even we are also providing{" "}
              <span className="font-bold text-blue-800">FREE DEMO CLASS</span>.
              So, what are you waiting for come and join now.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="phone"
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Phone"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Subject"
                />
              </div>
              <div className="col-span-2">
                <textarea
                  id="message"
                  rows="4"
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-3 px-6 rounded  focus:outline-none focus:shadow-outline"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
