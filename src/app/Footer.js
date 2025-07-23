import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-32">
        <div className="flex flex-col w-full max-w-68 text-center md:text-start">
          <h1 className="text-2xl font-semibold icon-gradient">Sobre nós</h1>
          <p className="text-xs leading-8">
            Inovação através de soluções em tecnologia para impulsionar seus resultados. O Grupo Fluxon Digital é uma
            empresa 100% brasileira.{" "}
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full max-w-68 text-center md:text-start">
          <h1 className="text-2xl font-semibold icon-gradient">Contato</h1>
          <a className="flex items-center justify-center md:justify-start gap-4 text-xs leading-8 cursor-pointer">
            <MdOutlineMailOutline size={20} className="icon-gradient" />
            contanto@fluxondigital.com.br
          </a>
          <a className="flex items-center justify-center md:justify-start gap-4 text-xs leading-8 cursor-pointer">
            <FiPhone size={20} />
            +55 (51) 98652-6016
          </a>
          <a className="flex items-center justify-center md:justify-start gap-4 text-xs leading-8 cursor-pointer">
            <LuMapPin size={20} />
            Alvorada, RS - Brasil
          </a>
        </div>

        <div className="flex flex-col gap-2 w-full max-w-68 text-center md:text-start">
          <h1 className="text-2xl font-semibold icon-gradient">Redes Sociais</h1>
          <div className="flex flex-col items-center md:items-start justify-center gap-4">
            <a className="flex items-center  gap-4 text-xs leading-8 cursor-pointer">
              <FaInstagram size={20} className="icon-gradient" /> Instagram
            </a>
            <a className="flex items-center  gap-4 text-xs leading-8 cursor-pointer">
              <FaWhatsapp size={20} />
              Whatsapp
            </a>
            <a className="flex items-center  gap-4 text-xs leading-8 cursor-pointer">
              <FaFacebook size={20} />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
