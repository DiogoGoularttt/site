import Image from "next/image";
import Logo from "../../public/Logo.png";

export default function About() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-4xl md:text-6xl text-center font-bold icon-gradient">Nosso Diferencial</h1>

        <div className="grid md:grid-cols-2 py-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-center md:text-start icon-gradient">Criando experiências, proporcionando sucesso.</h2>
            <p className="max-w-md pt-6 text-white leading-7">
              Nosso compromisso com qualidade e excelência é incomparável. Da primeira sessão de brainstorming à entrega
              do produto final, garantimos que cada etapa do processo seja executada com perfeição. Você não está apenas
              adquirindo um serviço; você está adquirindo um parceiro comprometido com o seu crescimento e sucesso.
            </p>
          </div>

          <div>
            <Image src={Logo} priority alt="Equipe trabalhando" />
          </div>
        </div>
      </div>
    </>
  );
}
