import ChatNowButton from "./components/ChatNowButton";
import TechnologiesCarousel from "./components/TechnologiesCarousel";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <div>
        <div>
          <TechnologiesCarousel />
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center py-24 md:py-48">
              <ChatNowButton />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
