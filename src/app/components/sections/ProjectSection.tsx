"use client";
import Image from "next/image";
import { ArrowUpRightFromSquareIcon } from "lucide-react";

export default function ProjectSection() {
  return (
    <>
      <section
        id="project"
        className=" py-20 px-4 md:px-8 lg:px-16 lg:mt-44 reveal"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 pb-2 border-b-2 border-green-600 dark:text-white text-black reveal-top">
            LATEST <span className="text-green-600">PROJECT</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:mt-8 gap-8">
            {[
              {
                image: "/images/my portfolio.jpeg",
                title: "Personal Portfolio",
                description:
                  "A personal portfolio to showcase my work and skills",
              },
              {
                image: "/images/hotel booking.jpeg",

                title: "Business Website",
                description:
                  "Developed a responsive business website for a client",
              },
              {
                image: "/images/developer.jpg",
                title: "E-commerce Platform",
                description: "Built a modern e-commerce platform with React",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg reveal-left"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-fill transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-white  bg-opacity-50 flex flex-col items-center justify-center
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <h3 className="text-black text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-black text-center px-4 mb-4">
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="text-black hover:text-blue-400 transition-colors"
                  >
                    <ArrowUpRightFromSquareIcon size={24} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
