"use client";
export default function AboutSection() {
  return (
    <>
      <section
        id="about"
        className="py-20 px-4 md:px-8 lg:px-16 lg:mt-40 reveal-top"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-9 pb-2 border-b-2 border-green-600 reveal-left dark:text-white text-black">
            About <span className="text-green-600">Me</span>
          </h2>
          <p className="text-gray-700 mb-8 text-xl reveal-left">
            I am a passionate Frontend Developer with a strong foundation in
            HTML, CSS, JavaScript, and React.js. As a fresher, I am eager to
            apply my skills in building responsive and user-friendly web
            applications. I have a keen interest in UI/UX design and web
            performance optimization. I am a quick learner, problem-solver, and
            highly motivated to grow in a dynamic development environment.
          </p>

          <div className="space-y-8 reveal-left">
            <h3 className="text-3xl font-bold pb-2 border-b-2 border-green-600 reveal-left dark:text-white text-black">
              Education
            </h3>

            <div className="space-y-8 reveal">
              {[
                {
                  location: "Vadodara, India",
                  degree: "Bachelor of Technology (CSE)",
                  institution: "Parul University (6.72 CGPA) 2020-2024",
                },
                {
                  location: "Vijayawada, India",
                  degree: "12th Standard (MPC)",
                  institution: "Narayana Junior College (7.38 CGPA) 2018-2020",
                },
                {
                  location: "Guntur, India",
                  degree: "Secondary Education",
                  institution: "Oxford EM High School (8.5 CGPA) 2018",
                },
              ].map((edu, index) => (
                <div key={index} className="pl-4 border-l-4 border-gray-200">
                  <p className="font-bold dark:text-white text-black">
                    {edu.location}
                  </p>
                  <p className="text-lg dark:text-white text-black">
                    {edu.degree}
                  </p>
                  <p className="text-gray-600 italic">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
