import { FaPhoneVolume } from "react-icons/fa6";

export default function ChatNowButton() {
  return (
    <>
      <a href="https://wa.me/5551986526016" target="_blank"
        className="flex items-center gap-4 w-56 p-6 text-white font-thin rounded-2xl cursor-pointer hover:opacity-90 transition"
        style={{
          background: "linear-gradient(90deg, #7969c8, #bc4bc4, #ff2cc0)",
        }}
      >
        <FaPhoneVolume size={20}/>
        Conversar agora
      </a>
    </>
  );
}
