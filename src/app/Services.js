import { useEffect } from "react";
import Card from "./components/card";
import { VscGlobe, VscGraph } from "react-icons/vsc";
import { RxMobile } from "react-icons/rx";
import { MdOutlineContentCopy, MdOutlineMailOutline } from "react-icons/md";
import { LuUsers } from "react-icons/lu";

export default function Services() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

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

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <h1 className="text-4xl sm:text-4xl md:text-6xl text-center font-bold icon-gradient">Serviços</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-14 gap-y-20 md:gap-y-26 py-16 md:py-24">
        <Card
          service="Desenvolvimento Web"
          icon={VscGlobe}
          iconClass="text-4xl text-blue-700"
          text="Criamos sites modernos e responsivos que fortalecem sua marca e garantem uma experiência excelente em qualquer dispositivo."
        />
        <Card
          service="Planejamento Estratégico"
          icon={VscGraph}
          iconClass="text-4xl text-green-700"
          text="Planejamos estratégias para definir metas claras, identificar oportunidades e gerar crescimento sustentável para seu negócio."
        />
        <Card
          service="Desenvolvimento Mobile"
          icon={RxMobile}
          iconClass="text-4xl text-indigo-700"
          text="Construímos apps móveis rápidos e intuitivos para Android e iOS, adaptados às necessidades dos seus usuários."
        />
        <Card
          service="Copywriting"
          icon={MdOutlineContentCopy}
          iconClass="text-4xl text-red-700"
          text="Produzimos textos criativos e persuasivos que chamam a atenção, engajam e convertem o seu público."
        />
        <Card
          service="E-mail Marketing"
          icon={MdOutlineMailOutline}
          iconClass="text-4xl text-teal-700"
          text="Criamos modelos de e-mails bonitos e eficazes, projetados para evitar filtros de SPAM e alcançar mais pessoas."
        />
        <Card
          service="Marketing e Relatórios"
          icon={LuUsers}
          iconClass="text-4xl text-sky-700"
          text="Desenvolvemos estratégias com relatórios claros para medir resultados e tomar decisões baseadas em dados."
        />
      </div>
    </>
  );
}
