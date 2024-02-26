"use client";

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
import { Helmet } from "react-helmet";

declare global {
  interface Window {
    codySettings: { widget_id: string };
    attachEvent(event: string, listener: EventListener): boolean;
    detachEvent(event: string, listener: EventListener): void;
  }
}

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("#");
  }, []);

  useEffect(() => {
    // Define codySettings
    window.codySettings = { widget_id: "9b6c40f5-2a7b-4c3b-b68c-1b354ac81a23" };

    // Load Cody Widget script
    const loadCodyScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://trinketsofcody.com/cody-widget.js";
      const firstScript = document.getElementsByTagName("script")[0];
      firstScript?.parentNode?.insertBefore(script, firstScript);
    };

    // Check document ready state and load the script
    const onDocumentReady = () => {
      if (document.readyState === "complete") {
        loadCodyScript();
      } else {
        if (window.addEventListener) {
          window.addEventListener("load", loadCodyScript, false);
        } else if (window.attachEvent) {
          // For IE 8 and earlier versions
          window.attachEvent("onload", loadCodyScript);
        }
      }
    };

    onDocumentReady();
  }, []);

  return (
    <>
      {/* <iframe src="https://embed.cody.bot/9b6c40f5-2a7b-4c3b-b68c-1b354ac81a23" style={{ border: '0px' }} name="codyai" scrolling="no" frameBorder="1" marginHeight={0} marginWidth={0} height="800px" width="100%" allowFullScreen></iframe> */}
      <Discount />
      <main className="flex relative min-h-screen flex-col items-center font-montserrat tracking-wide text-[.9rem]">
        <Helmet>
          <script>
            {`window.codySettings = { widget_id: '9b6c40f5-2a7b-4c3b-b68c-1b354ac81a23' };
          !function(){var t=window,e=document,a=function(){var t=e.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://trinketsofcody.com/cody-widget.js";var a=e.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)};"complete"===document.readyState?a():t.attachEvent?t.attachEvent("onload",a):t.addEventListener("load",a,!1)}();`}
          </script>
        </Helmet>
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
