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
                image: "/Portfolio IMG.png",
                title: "Personal Portfolio",
                description:
                  "A personal portfolio to showcase my work and skills",
                link: "https://my-portfolio-nagendra.vercel.app",
              },
              {
                image: "/Vivanta.png",
                title: "Business Website",
                description:
                  "Developed a responsive business website for a client",
                link: "https://www.vivantahotels.com/en-in/offers/breakfast-inclusive-rate?gad_source=1&gad_campaignid=1771654502&gbraid=0AAAAADhl-__fQBBm3Y0yFpqc54VHjXXMD&gclid=Cj0KCQiA6Y7KBhCkARIsAOxhqtOl_snc4klQ0DE0uPZVmdoiCbs7bVTyEwqmhkqpYWUwljVC78m3OjcaAq9wEALw_wcB",
              },
              {
                image: "/Ecommerces.png",
                title: "E-commerce Platform",
                description: "Built a modern e-commerce platform with React",
                link: "https://login-ecommerce-tgue.vercel.app",
              },
              {
                image: "/Food.png",
                title: "GoodFood Dashboard",
                description:
                  "Interactive dashboard analyzing food sales, customer trends, and performance insights.",
                link: "https://goodfood-dashboard-murex.vercel.app",
              },
              {
                image: "/DashBoard.png",
                title: "Community Dashboard",
                description:
                  "Next.JS, Tailwind CSS, Shadcn UI dashboard visualizing community data.",
                link: "https://community-dashboard-six.vercel.app",
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
                    href={project.link}
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
