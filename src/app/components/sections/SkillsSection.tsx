"use client";
import Image from "next/image";

export default function SkillsSection() {
  return (
    <>
      <section
        id="skills"
        className="py-20 px-4 md:px-8 lg:px-16 lg:mt-44 reveal"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 pb-2 border-b-2 border-green-600 reveal-top">
            SKILLS
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                name: "HTML",
                image: "/html_1051277.png",
              },
              {
                name: "CSS",
                image: "/css-3_732190.png",
              },
              {
                name: "JavaScript",
                image:
                  "/javascript-logo-javascript-icon-transparent-free-png.webp",
              },
              {
                name: "React",
                image: "/molecule_10285707.png",
              },
              {
                name: "Next.js",
                image: "/nextjs-icon.webp",
              },
              {
                name: "Material UI",
                image: "/images (1).png",
              },
              {
                name: "Shadcn UI",
                image: "/shadcn-ui-logo-png_seeklogo-519786.png",
              },
              {
                name: "Tailwind CSS",
                image: "/images (3).png",
              },
              {
                name: "Power BI",
                image: "/power-bi.png",
              },
              {
                name: "Figma",
                image: "/figma-icon.webp",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-colors
                    hover:transform hover:-translate-y-2 duration-300 hover:shadow-green-600 reveal-left"
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="w-20 h-20 mx-auto mb-4 hover:scale-125 transition-transform"
                />
                <h3 className="text-center text-xl font-semibold reveal text-black">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
