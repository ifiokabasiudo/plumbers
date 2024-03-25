"use client";

import anime from "animejs";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Image1 from "../../../public/hero-bg.png";
import Image2 from "../../../public/hero-bg-2.png";
import Image3 from "../../../public/hero-bg-3.png";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState<any>();
  const heroText = useRef(null);

  useEffect(() => {
    const elementsToAnimate = [
      {
        name: "heroText",
        nameCurrent: heroText.current,
        animated: false,
      },
    ];

    const animations: any = [
      {
        targets: heroText.current,
        translateX: ["0", "0"],
        translateY: [100, 0],
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 700,
      },
    ];

    const handleScroll = () => {
      elementsToAnimate.forEach(
        (element: any, index: string | number | any) => {
          if (element && !element.animated) {
            const rect = element.nameCurrent?.getBoundingClientRect();
            // console.log("rectangle top " + element.name + ": " + rect.top)
            // console.log("rectangle bottom: " + rect.bottom)
            // console.log("inner window height: " + window.innerHeight)
            const isVisible =
              rect?.top < window?.innerHeight && rect?.bottom >= 0;

            if (isVisible) {
              anime(animations[index]).play;
              elementsToAnimate[index].animated = true;
              // setAnimationCompleted(true)
            }
          }
        }
      );
    };

    // Attach event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check when the component mounts
    handleScroll();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const images = [{ name: Image1 }, { name: Image2 }, { name: Image3 }];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        id="Hero"
        className="relative w-full h-screen flex flex-col justify-center items-center text-center px-8"
      >
        {/* {images.map((image, index) => ( */}
        {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-[1500ms] ${
            index === currentImageIndex ? 'transform scale-[1] opacity-100' : 'transform scale-[0.92] opacity-0'
          }`}
          style={{ zIndex: index === currentImageIndex ? -10 : -20 }}
        >
          <Image
            className="w-full h-full"
            src={image.name}
            layout="fill"
            objectFit="cover"
            alt={`Image ${index}`}
          />
        </div>
      ))}
        {/* ))} */}
        <a className="absolute top-10 right-10 ml-6 font-bold text-[1rem] sm:hidden bg-[#297cbf] rounded-md py-1 px-3 z-[51]">
          +1 xxx xxx xxx
        </a>
        <div
          ref={heroText}
          className="heroText w-full h-full flex flex-col justify-center items-center"
        >
          <h3 className="text-2xl font-bold md:text-5xl text-rose-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            BEST PLUMBER EVER
          </h3>
          <h1 className="text-xl md:text-3xl mt-3 w-[60%] font-light">
          We specialize in changing gyser element, Rooter service, Drains and Plumbing.
          </h1>
          <button className="bg-[#297cbf] hover:transition-all  hover:-translate-y-1 text-[.7.5rem] px-4 p-2 rounded-md font-medium mt-16">
            BOOK AN APPOINTMENT
          </button>
        </div>
          
          <div className="w-full flex justify-center items-center py-5 gap-3">
            {images.map((image, index) => (
              <div key={index} className={`w-4 h-4 ${currentImageIndex === index ? `border-white` : `border-slate-400`} border bg-transparent flex justify-center items-center rounded-full`}><div className={`w-3 h-3 ${currentImageIndex === index ? `bg-white` : `bg-slate-400`} border-transparent border rounded-full`}/></div>
            ))}
          </div>
      </div>
    </div>
  );
}
