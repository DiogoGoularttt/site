"use client";

import Image from "next/image";
import { useIsMobile } from "../hooks/useIsMobile";

const logos = [
  { src: "/github.svg", alt: "GitHub" },
  { src: "/netlify.svg", alt: "Netlify" },
  { src: "/chatgpt.svg", alt: "ChatGPT" },
  { src: "/zoho.svg", alt: "Zoho Mail" },
  { src: "/google.svg", alt: "Google" },
  { src: "/react.svg", alt: "React" },
  { src: "/tailwind.svg", alt: "Tailwind CSS" },
  { src: "/figma.svg", alt: "Figma" },
  { src: "/mysql.svg", alt: "MySQL" },
  { src: "/mongodb.svg", alt: "MongoDB" },
  { src: "/nodejs.svg", alt: "NodeJS" },
];

const duplicatedLogos = [...logos, ...logos]; // duplica

export default function TechnologiesCarousel() {
  return (
    <div className="pb-12">
      <div className="w-full overflow-hidden py-4 md:py-10 bg-gray-200">
        <div className="carousel-track">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="carousel-item relative w-16 h-16 md:w-32 md:h-32">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
