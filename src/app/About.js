"use client";

import { CiDollar, CiBookmarkCheck, CiAlignBottom } from "react-icons/ci";

import Image from "next/image";
import Team from "../../public/team.svg";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const abouts = document.querySelectorAll(".about");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate");
            }, index * 150);
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.4 },
    );

    abouts.forEach((about) => observer.observe(about));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-4xl md:text-6xl text-center font-bold icon-gradient md:pb-24">Nosso Propósito</h1>

        <div className="grid md:grid-cols-2 md:pt-12">
          <div className="px-4">
            <h2 className="hidden md:block text-2xl md:text-4xl font-bold text-center md:text-start icon-gradient about">
              Criando experiências, proporcionando sucesso.
            </h2>
            <p className="max-w-md pt-6 text-center md:text-start text-white leading-7 about">
              Somos uma empresa de soluções digitais focada em desenvolver projetos sob medida para quem busca inovação,
              agilidade e resultados reais. Da ideia inicial ao produto final, trabalhamos lado a lado com nossos
              clientes para entender suas necessidades, superar expectativas e impulsionar o crescimento do negócio.
            </p>
            <div className="flex flex-col gap-6 text-white pt-12">
              <p className="flex gap-2 items-center about">
                <CiBookmarkCheck className="text-3xl" />
                Soluções digitais em um só lugar.
              </p>
              <p className="flex gap-2 items-center about">
                <CiAlignBottom className="text-3xl" />
                Estratégias adaptadas às necessidades do seu negócio.
              </p>
              <p className="flex gap-2 items-center about">
                <CiDollar className="text-3xl" />
                Preços competitivos para um valor excepcional.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-0 about">
            <Image src={Team} loading="lazy" alt="Equipe trabalhando" />
          </div>
        </div>
      </div>
    </>
  );
}
