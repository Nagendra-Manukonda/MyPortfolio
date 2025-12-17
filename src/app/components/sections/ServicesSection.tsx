"use client";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <>
      <section
        id="services"
        className=" py-20 px-10 md:px-8 lg:px-16 lg:mt-44dfs,m>A?,,,,mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm,fadsaf,m>??"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 pb-2 border-b-2 border-green-600 dark:text-white text-black reveal-top">
            My <span className="text-green-600 text-4xl">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-left">
            {[
              {
                title: "Frontend Development",
                description:
                  "Frontend Developer skilled in building responsive and interactive web applications using modern technologies.Focused on creating clean, performant, and user-friendly interfaces.",
                image: "/frontend-developer-illustration-concept-vector.jpg",
              },
              {
                title: "UI/UX Design",
                description:
                  "UI/UX Designer with a strong eye for clean design and intuitive user experiences.Focused on creating visually appealing, user-centered, and accessible interfaces..",
                image: "/UI&UX.webp",
              },
              {
                title: "Power BI Reporting",
                description:
                  "Power BI Developer skilled in creating interactive dashboards and reports using DAX and Power Query.",
                image: "/Power Bi illustration-svg-download-png-11461630.webp",
              },
            ].map((service, index) => (
              <div
                key={index}
                className=" relative bg-white p-6 rounded-lg overflow-hidden shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300
                    hover:shadow-[0px_4px_6px_rgba(255,0,234,0.815),0px_6px_12px_rgba(255,72,0,0.83),6px_0px_15px_rgb(5,247,247)]"
              >
                <h3 className=" text-xl font-bold mb-4 flex justify-center text-black align-middle reveal-top">
                  {service.title}
                </h3>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-50% h-48 object-contain rounded-lg transition-all  duration-500 hover:opacity-0 reveal"
                />
                <div
                  className="absolute inset-0 bg-white flex flex-col justify-center items-center p-6 
                    opacity-0 transition-opacity duration-500 hover:opacity-100"
                >
                  <h3 className="text-xl font-bold text-black mb-10 text-center">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-8 text-center text-xl">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
