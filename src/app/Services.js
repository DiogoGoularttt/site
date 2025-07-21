import Card from "./components/card";
import { VscGlobe, VscGraph } from "react-icons/vsc";
import { RxMobile } from "react-icons/rx";
import { MdOutlineContentCopy, MdOutlineMailOutline } from "react-icons/md";
import { LuUsers } from "react-icons/lu";

export default function Services() {
  return (
    <>
      <h1 className="text-4xl sm:text-4xl md:text-6xl text-center font-bold icon-gradient">Nossos Serviços</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-14 gap-y-20 md:gap-y-26 py-16 md:py-24">
        <Card
          service="Web Development"
          icon={VscGlobe}
          iconClass="text-4xl text-blue-700"
          text="We design and develop modern, responsive websites that elevate your brand and deliver an exceptional user experience across all devices."
        />
        <Card
          service="Business Strategy"
          icon={VscGraph}
          iconClass="text-4xl text-green-700"
          text="Our strategic planning helps you define clear goals, identify opportunities, and create sustainable growth for your business."
        />
        <Card
          service="Mobile Development"
          icon={RxMobile}
          iconClass="text-4xl text-indigo-700"
          text="We build high-performance mobile applications for Android and iOS that are intuitive, scalable, and tailored to your users’ needs."
        />
        <Card
          service="Copywriting"
          icon={MdOutlineContentCopy}
          iconClass="text-4xl text-red-700"
          text="Compelling and persuasive content that captures attention, engages your audience, and drives them to take action."
        />
        <Card
          service="Email Marketing"
          icon={MdOutlineMailOutline}
          iconClass="text-4xl text-teal-700"
          text="Beautiful and effective email marketing templates designed to minimize the risk of ending up in SPAM filters."
        />
        <Card
          service="Marketing & Reporting"
          icon={LuUsers}
          iconClass="text-4xl text-sky-700"
          text="Comprehensive marketing strategies combined with insightful reporting to help you measure success and make data-driven decisions."
        />
      </div>
    </>
  );
}
