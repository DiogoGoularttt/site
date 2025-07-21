import { MdStars } from "react-icons/md";

export default function Card(props) {
  const Icon = props.icon;

  return (
    <div className="card flex flex-col justify-start bg-gray-200 max-w-[404px] rounded-[20px] shadow-card">
      <div className="pt-[23px] pb-[32px]">
        <div className="px-[24px]">
          <div className="pb-4">{Icon && <Icon className={props.iconClass} />}</div>
          <h2 className="text-2xl font-semibold icon-gradient">{props.service}</h2>
          <p className="text-sm pt-4">{props.text}</p>
        </div>
      </div>
      <div className="pb-[23px] px-[24px]">
        <button className="flex items-center gap-1 text-xs text-[#7969C8]">
          <MdStars className="text-sm" />
          <span className="font-light">Saiba mais</span>
        </button>
      </div>
    </div>
  );
}
