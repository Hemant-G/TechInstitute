import React from "react";

const WebDev = () => {
  return (
    <div className="bg-gray-100 ">
      {/* Hero Section */}
      <div className="h-120 w-screen bg-[url('https://media.istockphoto.com/id/2212360504/photo/holographic-ui-ux-display-icons-of-ux-ui-designer-creative-planning-data-visualization-web.jpg?s=2048x2048&w=is&k=20&c=Lcx7WupVOFhWObH51TlPlLkyS8yEcVgvCC10CQRSrFk=')] from-slate-700 to-slate-900 flex flex-col items-center justify-center">
        <div className="bg-gradient-to-r from-blue-200/10 to-blue-950/95 w-screen h-120 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-white mb-4">
          Best Web Development Course in Hoshiarpur
          </h1>
          <h3 className="text-xl text-gray-300">Home // Web Development</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 my-6 md:px-20">
        {/* Top Section */}
        <div className="mb-8 text-center">
          <p className=" font-medium text-gray-600 mb-2">
            Are you searching for the best web development course in Hoshiarpur?
            Look no more.
            <span className="font-semibold text-blue-700">
              SMG CADD CENTRE
            </span>{" "}
            provides the most effective web development course in Hoshiarpur,
            Punjab. This course is specially designed for Undergraduates (UG),
            Graduates, operating professionals, and freelancers. The aim of this
            course is to produce sensible information to the students together
            with theoretical and practical info so students will build wonderful
            websites and place their ability into action.
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mt-6 mb-4">
            What is <span className="text-blue-700">Web Development</span> ?
          </h2>
          <p className="text-gray-600 font-medium leading-relaxed mb-6">
            Web Development is that the backend work that's done to create a
            website on the internet. It involves the method of building,
            creating, and maintaining websites. To build your career in Web
            Development, register in the{" "}
            <span className="font-semibold text-blue-700">
              Web Development course at SMG CADD CENTRE
            </span>
            . The knowledgeable faculty at SMG CADD CENTRE would create the
            educational method terribly straightforward for you. In the{" "}
            <span className="font-semibold text-blue-700">
              Best web Development course at SMG CADD CENTRE
            </span>
            , you'd learn the way to make and style stunning websites like
            social sites, e-commerce websites, or blogs.
          </p>
          <p className="text-gray-600 font-medium leading-relaxed">
            There are various web developer jobs on the market the marketplace
            for people who have the relevant skill set. It is essential for
            developers to master technologies just as the web of Things,
            artificial intelligence, a computer game, and far additional, a lot
            of the newest programming languages, platforms, tools, and so on. If
            you plan to be web development skilled, ensure you learn these
            skills.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* PHP */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col min-w-48">
            {" "}
            {/* Added min-w-48 */}
            <div className="relative h-32 md:h-40 flex-shrink-0">
              <img
                src="../php2.png"
                alt="PHP Diagram"
                className="w-full h-full object-contain p-2"
              />
              <div className="absolute bottom-0 left-0 bg-blue-500 text-white py-1 px-2 rounded-tr-lg text-xs">
                PHP
              </div>
            </div>
            <p className="text-gray-600 text-sm p-4">
              PHP stands for hypertext Pre-processor, which earlier stood for
              Private Home Pages. PHP is a server-side scripting language.
            </p>
          </div>

          {/* MySQL */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col min-w-48">
            {" "}
            {/* Added min-w-48 */}
            <div className="relative h-32 md:h-40 flex-shrink-0">
              <img
                src="../mysql2.png"
                alt="MySQL Logo"
                className="w-full h-full object-contain p-2"
              />
              <div className="absolute bottom-0 left-0 bg-blue-500 text-white py-1 px-2 rounded-tr-lg text-xs">
                MYSQL
              </div>
            </div>
            <p className="text-gray-600 text-sm p-4">
              MySQL is AN Oracle-backed open-source online database management
              system. based on Structured command language (SQL).
            </p>
          </div>

          {/* AJAX */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col min-w-48">
            {" "}
            {/* Added min-w-48 */}
            <div className="relative h-32 md:h-40 flex-shrink-0">
              <img
                src="../ajax2.png"
                alt="AJAX Logo"
                className="w-full h-full object-contain p-2"
              />
              <div className="absolute bottom-0 left-0 bg-blue-500 text-white py-1 px-2 rounded-tr-lg text-xs">
                AJAX
              </div>
            </div>
            <p className="text-gray-600 text-sm p-4">
              AJAX calls, which represent Asynchronous JavaScript And XML, have
              become additional common as web applications.
            </p>
          </div>
        </div>

        {/* Technology Grid - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* API Integration */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col min-w-48">
            {" "}
            {/* Added min-w-48 */}
            <div className="relative h-48 md:h-64 flex-shrink-0">
              <img
                src="../api2.jpg"
                alt="API Integration"
                className="w-full h-full object-contain p-2"
              />
              <div className="absolute bottom-0 left-0 bg-blue-500 text-white py-1 px-2 rounded-tr-lg text-xs">
                API Integration
              </div>
            </div>
            <p className="text-gray-600 text-sm p-4">
              An API integration is the connection between two or more
              applications, via their APIs, that lets those systems exchange
              data. API integrations power processes throughout many
              high-performing businesses
              <a href="#" className="text-blue-500 hover:underline">
                Read More
              </a>
            </p>
          </div>

          {/* Domain/Hosting */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col min-w-48">
            {" "}
            {/* Added min-w-48 */}
            <div className="relative h-48 md:h-64 flex-shrink-0">
              <img
                src="../domainnew.png"
                alt="Domain and Hosting"
                className="w-full h-full object-contain p-2"
              />
              <div className="absolute bottom-0 left-0 bg-blue-500 text-white py-1 px-2 rounded-tr-lg text-xs">
                DOMAIN/HOSTING
              </div>
            </div>
            <p className="text-gray-600 text-sm p-4">
              A domain host provides a domain name, like www.yourdomain.com,
              that visitors can use to find you. A domain name refers to the URL
              people type in a web browser’s address bar to enter your site. In
              other words, domain names offer an accessible way for people to
              enter websites.
              <a href="#" className="text-blue-500 hover:underline">
                Read More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDev;
