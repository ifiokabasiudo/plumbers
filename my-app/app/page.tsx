'use client'

import Image from "next/image";
import Navbar from "./src/components/Navbar";
import Hero from "./src/components/Hero";
import AboutNavbar from "./src/components/About-Navbar";
import About from "./src/components/About";
import Numbers from "./src/components/Numbers";
import OurServices from "./src/components/Our-Services";
import DoneProjects from "./src/components/Done-Projects";
import Testimonials from "./src/components/Testimonals";
import ContactUs from "./src/components/Contact-Us";
import MdMenu from "./src/components/Md-Menu";
import SmMenu from "./src/components/Sm-Menu";
import Blog from "./src/components/Blog";
import Discount from "./src/components/Discount";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("#");
  }, []);

  return (
    <>
    <iframe src="https://embed.cody.bot/9b6c40f5-2a7b-4c3b-b68c-1b354ac81a23" style={{ border: '0px' }} name="codyai" scrolling="no" frameBorder="1" marginHeight={0} marginWidth={0} height="800px" width="100%" allowFullScreen></iframe>
      <Discount />
      <main className="flex relative min-h-screen flex-col items-center font-montserrat tracking-wide text-[.9rem]">
      <Navbar />
      <SmMenu />
      <Hero />
      <MdMenu />
      <AboutNavbar />
      <About />
      <Numbers />
      <OurServices />
      <DoneProjects />
      <Blog />
      <Testimonials />
      <ContactUs />
    </main>
    </>
  );
}
