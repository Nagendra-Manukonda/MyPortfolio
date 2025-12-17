"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#1c1b1a] z-50">
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-20 py-4">
        <a href="#" className="text-2xl md:text-3xl font-bold text-white">
          NAGENDRA.
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:flex gap-6 lg:gap-12">
          {["HOME", "ABOUT", "SERVICES", "SKILLS", "PROJECT", "CONTACT"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-gray-300 transition-colors hover:border-y-4 hover:border-y-green-600 hover:rounded-full"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </div>

      <nav
        className={`md:hidden fixed top-[60px] left-0 w-full h-screen bg-[#1c1b1a]
        transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center pt-8 gap-6">
          {["HOME", "ABOUT", "SERVICES", "SKILLS", "PROJECT", "CONTACT"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
