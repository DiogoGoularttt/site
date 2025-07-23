"use client";

import { useEffect } from "react";
import Header from "./Header";
import Headline from "./Headline";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Copyright from "./Copyright";

export default function Home() {
  useEffect(() => {
    const pageElement = document.querySelector(".page");

    if (!pageElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.4, // 40% visível
      },
    );

    observer.observe(pageElement);

    // Cleanup para evitar leaks
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <header className="w-full">
        <Header />
      </header>
      <main className="view">
        <div className="flex flex-col justify-center items-center h-screen md:px-4 bg-[#101010]">
          <Headline />
        </div>

        <div id="services" className="max-w-7xl mx-auto py-8 md:py-22 px-4 bg-white">
          <Services />
        </div>

        <div id="projects" className="bg-[#101010] py-8 md:py-22 px-4">
          <About />
        </div>

        <div id="contact" className="bg-[#fff] pb-22">
          <Contact />
        </div>

        <div id="copyright" className="bg-[#101010] py-10 md:py-8 px-4">
          <Copyright />
        </div>
      </main>

      <template></template>
    </>
  );
}
