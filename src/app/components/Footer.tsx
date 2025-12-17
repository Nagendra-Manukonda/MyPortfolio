"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1c1b1a] text-white py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm opacity-70">
          © 2025 NAGENDRA REDDY. All rights reserved.
        </p>

        <div className="flex flex-col justify-between items-center gap-2">
          <a
            href="mailto:manukondanagendrareddy@gmail.com"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Mail size={20} />
            manukondanagendrareddy@gmail.com
          </a>
          <a
            href="tel:+917075660441"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Phone size={20} />
            +91 7075660441
          </a>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/share/1CES5gd9uT/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-120 transition-transform"
          >
            <Image
              src="/icons8-facebook-logo-48.png"
              alt="facebook"
              width={100}
              height={50}
              className="size-8"
            />
          </a>

          <a
            href="https://www.instagram.com/nagendra.___.13?igsh=MTk0MGlqcDBoZGc4aw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-120 transition-transform"
          >
            <Image
              src="/icons8-instagram-logo-48.png"
              alt="instagram"
              width={100}
              height={50}
              className="size-8"
            />
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-120 transition-transform"
          >
            <Image
              src="/icons8-github-logo-50.png"
              alt="GitHub"
              width={140}
              height={80}
              className="size-8"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/nagendra-reddy-7b58982a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-120 transition-transform"
          >
            <Image
              src="/icons8-linkedin-logo-48.png"
              alt="linkedin"
              width={100}
              height={50}
              className="size-8"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
