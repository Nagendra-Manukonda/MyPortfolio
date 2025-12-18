"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollRevealProvider from "./components/ScrollRevealProvider";

import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectSection from "./components/sections/ProjectSection";
import ContactSection from "./components/sections/ContactSection";

export default function Page() {
  return (
    <ScrollRevealProvider>
      <div
        className="min-h-screen bg-center bg-[length:70%] bg-opacity-10 bg-white dark:bg-[#121212] text-black dark:text-white transition-colors duration-300"
        style={{ backgroundImage: "url('/images/Background image.png')" }}
      >
        <Header />

        <main>
          <HomeSection />
          <AboutSection />
          <ServicesSection />
          <SkillsSection />
          <ProjectSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </ScrollRevealProvider>
  );
}
