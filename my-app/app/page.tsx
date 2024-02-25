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
