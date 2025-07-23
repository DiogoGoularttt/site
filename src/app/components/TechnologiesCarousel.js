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

export default function TechnologiesCarousel() {
  const isMobile = useIsMobile();

  const size = isMobile ? 64 : 128;
  return (
    <div className="pb-12">
      <div className="w-full overflow-hidden py-4 md:py-10 bg-gray-200">
        <div className="carousel-track">
          {Array(4)
            .fill(logos)
            .flat()
            .map((logo, index) => (
              <div key={index} className="carousel-item relative" style={{ width: size, height: size }}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={size}
                  height={size}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
