'use client'

import anime from "animejs"
import { useState, useRef, useEffect } from "react";


export default function Hero() {
  const heroText = useRef(null);

  useEffect(() => {
    const elementsToAnimate = [
      {
        name: 'heroText',
        nameCurrent: heroText.current,
        animated: false
      },
    ];

    const animations: any = [
      {
        targets: heroText.current,
        translateX: ['0', '0'],
        translateY: [100, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 700,
      },
    ];

    const handleScroll = () => {
      elementsToAnimate.forEach((element: any, index: string | number | any) => {
        if (element && !element.animated) {
          const rect = (element.nameCurrent)?.getBoundingClientRect();
          // console.log("rectangle top " + element.name + ": " + rect.top)
          // console.log("rectangle bottom: " + rect.bottom)
          // console.log("inner window height: " + window.innerHeight)
          const isVisible = rect?.top < window?.innerHeight && rect?.bottom >= 0;

          if (isVisible) {
            anime(animations[index]).play;
            elementsToAnimate[index].animated = true;
            // setAnimationCompleted(true)
          }
      }
    });
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

  return (
    <div
      id="Hero"
      className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-[url('/hero-bg.png')] bg-no-repeat bg-cover bg-center px-8"
    >
      <a className="absolute top-10 right-10 ml-6 font-bold text-[1rem] sm:hidden bg-[#7DBF29] rounded-md py-1 px-3 z-[51]">+1 xxx xxx xxx</a>
      <div ref={heroText} className="heroText w-full h-full flex flex-col justify-center items-center">
      <h3 className="text-xl md:text-3xl text-[#7DBF29]">LOREM IPSUM DOLOR SIT AMET</h3>
      <h1 className="text-2xl md:text-5xl mt-3 w-[60%] font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
      <button className="bg-[#7DBF29] hover:transition-all  hover:-translate-y-1 text-[.7.5rem] px-4 p-2 rounded-md font-medium mt-16">
        BOOK AN APPOINTMENT
      </button>
      </div>
    </div>
  );
}
