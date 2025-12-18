"use client";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="pt-24 md:pt-32 px-4 md:px-8 lg:px-28 reveal-left"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="lg:text-5xl reveal-top dark:text-white text-black">
            Hi,<span className="text-green-600">Myself</span>
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 reveal-left ">
            <span>NAGENDRA REDDY MANUKONDA</span>
          </h1>
          <h3 className="text-xl md:text-2xl reveal-left dark:text-white text-black">
            And I&apos;m a{" "}
            <span className="text-green-600 ">Frontend Developer</span>
          </h3>
          <p className="text-gray-600 text-xl reveal-left">
            I&apos;m seeking a challenging software development role where I can
            leverage my skills to contribute to innovative projects. I&apos;m
            eager to join a dynamic team and utilize my technical expertise to
            develop high-quality software solutions. My goal is to contribute to
            technological advancements and drive positive outcomes in the field.
          </p>

          <div className="flex gap-4 py-6 reveal-left">
            <a
              href="https://github.com/Nagendra-Manukonda"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform hover:forced-colors:blue "
            >
              <Image
                src="/icons8-github-logo-50.png"
                alt="gitHub"
                width={100}
                height={50}
                className="size-11 bg-white rounded-full"
              />
            </a>
            <a
              href="https://www.facebook.com/share/1CES5gd9uT/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform hover:forced-colors:blue cursor-pointer"
            >
              <Image
                src="/icons8-facebook-logo-48.png"
                alt="facebook"
                width={100}
                height={50}
                className="size-12"
              />
            </a>
            <a
              href="https://www.instagram.com/nagendra.___.13?igsh=MTk0MGlqcDBoZGc4aw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              <Image
                src="/icons8-instagram-logo-48.png"
                alt="instagram"
                width={100}
                height={50}
                className="size-12 "
              />
            </a>
            <a
              href="https://wa.me/917075660441?text=Hi%20Nagendra,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              <Image
                src="/icons8-whatsapp-logo-48.png"
                alt="Whatsapp"
                width={100}
                height={50}
                className="size-12  rounded-md"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/nagendra-reddy-7b58982a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              <Image
                src="/icons8-linkedin-logo-48.png"
                alt="linkedin"
                width={100}
                height={50}
                className="size-12"
              />
            </a>
          </div>

          <a
            href="/Nagendra_Frontend_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#80ff80] cursor-pointer hover:bg-[#3ffdb1] text-black px-8 py-3 rounded-full transition-colors reveal-left"
          >
            Download CV
          </a>
        </div>

        <div className="hidden md:block reveal-top">
          <Image
            src="/nagendra img.png"
            alt="Profile"
            width={350}
            height={300}
            className="w-8rem h-1rem  object-contain rounded-full mx-auto bg-gray-50 dark:bg-black dark:brightness-50 brightness-100
                 shadow-[0px_9px_12px_rgba(255,0,134,0.815),0px_6px_12px_rgba(245,121,5,0.83),6px_0px_15px_rgb(5,247,247)]"
          />
        </div>
      </div>
    </section>
  );
}
