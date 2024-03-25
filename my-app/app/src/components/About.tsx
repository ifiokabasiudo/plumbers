"use client";

import GetAQuote from "./Get-A-Quote";
import { useState, useRef, useEffect } from "react";
import anime from "animejs";

export default function About() {
  const [motto1, setMotto] = useState("Our Mission");

  const mottos = [
    { name: "Our Mission" },
    { name: "Our Vision" },
    { name: "Our Value" },
  ];

  const aboutText = useRef(null);
  const cloud1 = useRef(null);

  useEffect(() => {
    const elementsToAnimate = [
      {
        name: 'aboutText',
        nameCurrent: aboutText.current,
        animated: false
      },
      // {
      //   name: "cloud1",
      //   nameCurrent: cloud1.current
      // }
    ];

    const animations: any = [
      {
        targets: aboutText.current,
        translateX: ['0', '0'],
        translateY: [100, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 700,
      },
      // {
      //   targets: cloud1.current,
      //   translateX: 0,
      //   translateY: [-100, 0],
      //   opacity: [0, 1],
      //   easing: "easeInOutQuad",
      //   duration: 1500,
      // }
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
    <div className="flex flex-col lg:flex-row w-full min-h-[80vh] relative px-8 lg:px-32 text-[#535353]">
      <div ref={aboutText} className="w-full lg:w-[65%] lg:pr-12 py-16">
        <div className="w-full">
          <h1 className="text-3xl font-semibold text-[#3f3f3f] w-[80%] mb-7">
            We&apos;ve been providing plumbing services for more than a Decade
          </h1>
          <p>
            From fixing leaky faucets to installing complex piping systems, we have been the go-to experts for all your plumbing needs. Our commitment to excellence and customer satisfaction has made us a trusted name in the industry. With our wealth of experience and dedication to quality workmanship, you can trust us to handle any plumbing issue efficiently and effectively.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 mt-16">
          {mottos.map((motto: any, index) => (
            <button
              className={`tranition-all duration-300 ${motto.name === motto1 ? "bg-[#297cbf] text-white" : "bg-white text-black"} p-4 w-full md:w-1/3 rounded-md font-medium`}
              key={index}
              onClick={() => {
                setMotto(motto.name);
              }}
            >
              {motto.name}
            </button>
          ))}
        </div>
        <div className="bg-white p-4 rounded-md w-full mt-2 min-h-28 text-[.8rem]">
          {motto1 === "Our Mission" ? (
            <span>
              

<b>Delivering Outstanding Plumbing Solutions.</b><br>We provide exceptional plumbing solutions that consistently surpass customer expectations. We prioritize prompt, reliable, and professional service, utilizing advanced training and technology to maintain our industry leadership.
            </span>
          ) : motto1 === "Our Vision" ? (
            <span>
              

<b>Leading Sustainable Plumbing Innovation.</b><br>Our vision is to pioneer sustainable plumbing practices, integrating innovative technologies for a greener future. We aim to minimize environmental impact while maximizing system efficiency, contributing positively to the communities we serve.
            </span>
          ) : (
            <span>
              

<b>Integrity, Excellence, Customer-Centricity.</b><br>Rooted in integrity, excellence, and customer focus, our values define our approach to business. We prioritize honesty, transparency, and ethical behavior, delivering the highest quality workmanship and service standards.
            </span>
          )}
        </div>
      </div>
      <GetAQuote />
    </div>
  );
}
