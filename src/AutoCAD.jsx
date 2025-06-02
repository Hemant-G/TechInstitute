import React from 'react';

const AutoCADPage = () => {
  return (
    <div className="bg-white ">
        {/* Hero Section */}
        <div className="h-100 w-screen bg-[url('https://media.istockphoto.com/id/892043004/photo/architect-working-on-blueprints.jpg?s=2048x2048&w=is&k=20&c=t140Pr3ezLfXdALgTsDACQzSHDuxysV-9h-qzdF1ILo=')] from-slate-700 to-slate-900 flex flex-col items-center justify-center">
        <div className='bg-gradient-to-r from-blue-200/10 to-blue-950/90 w-screen h-100 flex flex-col items-center justify-center'>
            <h1 className="text-6xl font-bold text-white mb-4">Best AutoCAD Course in Hoshiarpur</h1>
        <h3 className="text-xl text-gray-300">Home // AutoCAD</h3>
        </div>
        
      </div>
      {/* Content Section */}
      <div className="container bg-white rounded-lg  py-8 px-25">
        {/* Introduction of AutoCAD */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 text-center mb-4">
            Introduction of <span className="text-gray-800">AutoCAD</span>
          </h1>
          <p className="text-gray-600 leading-relaxed font-semibold">
            AutoCAD is a computer-supported design software developed by the company Autodesk (hence the name AutoCAD). In the old days, the only way that
            masterminds and engineers could illustrate their ideas as if they drew them out by hand. These days, pen and paper have been replaced by computers
            and design software like AutoCAD. With digital designs, those ideas are brought to life much quickly and more efficiently. So who uses AutoCAD and
            why is it important? Perhaps you! And then are just a many reasons it's so important. It allows you to draw and edit digital 2D and 3D designs more
            rapidly and fluently than you could by hand. The lines can also be fluently saved and stored in the cloud, so they're entered anywhere at any time.
            Then are a many other benefits of AutoCAD Before the age of computers, a developer would have to manually revise designs. You would have to produce
            an entirely new draft or edit the draft you had, which could come messy and delicate to interpret. With AutoCAD, you can fluently change and manipulate
            designs. You can only draw individuality so small by hand, but AutoCAD allows you to design down to fractions. This creates a more accurate design in
            all scope.
          </p>
        </section>

        {/* What Mainly is AutoCAD */}
        <section className="mb-8 ">
          <h2 className="text-3xl font-bold text-blue-800  text-center mb-4">
            What Mainly is <span className="text-gray-800">AutoCAD</span>
          </h2>
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <img
                src='../src/assets/autocad.jpg' // Replace with your actual image URL
                alt="AutoCAD Interface"
                className="rounded-md shadow-md"
              />
            </div>
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed font-semibold">
                As a CAD Drafter, you could use AutoCAD across a variety of industriousness. In mechanical engineering, you might use it to produce
                manufacturing processes as well as to design motor zone, robots, and other innovative objects. In electrical engineering, you might use it to
                design out electrical systems, and in civil engineering, you might use it as you help to design mainlands and roads. Then are other professionals
                who use AutoCAD The capabilities of AutoCAD are so wide-ranging that truly artists use it to draft figures, wood forms, representations, and
                experimental art pieces. AutoCAD is frequently used to produce architectural plans, innovation plans, and electrical and mechanical engineering
                plans. Because the software is so protean, it's a great tool for anyone who's interested in design. It's also a great way to prepare for a career
                in design, because it's a standard in the industriousness.
              </p>
            </div>
          </div>
        </section>

        {/* Why We Need AutoCAD */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-800  text-center mb-4">
            Why We Need <span className="text-gray-800">AutoCAD</span>
          </h2>
          <p className="text-gray-600 leading-relaxed font-semibold">
            AutoCAD provides best-in- class drafting and design, whether you're working in 2D or 3D. With features to automatically work a plan, elevation,
            and isometric views, tool palettes to save your favorite blocks, and machine knowledge features to help you learn new ways to produce designs, AutoCAD
            provides an unmatched user experience trusted by millions of users each over the world. Save time with assembled-in workflows, thousands of
            standard zone, and features. Across seven studies, the average productivity gain was about 63 for tasks completed using a technical tool set.
            User- specialized tool settings can be done to view and design products in wireframe and face modeling. Extensively preferred in the industries of
            mechanical, telecom, civil, and architectural engineering. It stands in demand by students and industriousness because of its conditions. In this
            software, originally, we can produce designs fluently using commands afterward icons were added to the software. With the use Of AutoCAD, we can
            design a product with great accurateness.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AutoCADPage;