"use client";

import React, { useState, useEffect, useRef } from "react";
import anime from "animejs";

export default function Numbers() {
  const [counted, setCounted] = useState<number>(0);
  const nums1 = useRef(null);
  const nums2 = useRef(null);
  const nums3 = useRef(null);
  const nums4 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const counterElement = document.getElementById("counter");
      if (counterElement) {
        const oTop = counterElement.offsetTop - window.innerHeight;
        if (counted === 0 && window.scrollY > oTop) {
          const countElements = document.querySelectorAll(".count");
          countElements.forEach((element) => {
            const countTo = parseInt(
              element.getAttribute("data-count") || "0",
              10
            );
            const countDuration = 2000;
            const startCount = parseInt(element.textContent || "0", 10);
            let startTime: number;

            const updateCount = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = timestamp - startTime;
              const increment = Math.floor(
                (countTo - startCount) * (progress / countDuration)
              );

              if (progress < countDuration) {
                element.textContent = (startCount + increment).toLocaleString();
                requestAnimationFrame(updateCount);
              } else {
                element.textContent = countTo.toLocaleString();
              }
            };

            requestAnimationFrame(updateCount);
          });

          setCounted(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [counted]);

  const items = [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={"30px"} height={"30px"}>
          <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" fill="#7DBF29"/>
        </svg>
      ),
      numbers: "45",
      title: "YEARS OF EXPERIENCE",
      ref: nums1
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={"30px"} height={"30px"}>
          <path d="M176 88v40H336V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V88c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V304H384V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H192V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H0V227.9c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1H128zM0 416V336H128v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H320v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H512v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" fill="#7DBF29"/>
        </svg>
      ),
      numbers: "8500",
      title: "PROJECTS COMPLETED",
      ref: nums2
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={"30px"} height={"30px"}>
          <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" fill="#7DBF29"/>
        </svg>
      ),
      numbers: "2342",
      title: "HAPPY CLIENTS",
      ref: nums3
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={"30px"} height={"30px"}>
          <path d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" fill="#7DBF29"/>
        </svg>
      ),
      numbers: "30",
      title: "BUSINESS PARTNERS",
      ref: nums4
    },
  ];

  useEffect(() => {
    const elementsToAnimate = [
      {
        name: 'nums1',
        nameCurrent: nums1.current,
        animated: false
      },{
        name: 'nums2',
        nameCurrent: nums2.current,
        animated: false
      },{
        name: 'nums3',
        nameCurrent: nums3.current,
        animated: false
      },{
        name: 'nums4',
        nameCurrent: nums4.current,
        animated: false
      },
    ];

    const animations: any = [
      {
        targets: nums1.current,
        translateX: ['0', '0'],
        translateY: [100, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 700,
      },{
        targets: nums2.current,
        translateX: ['0', '0'],
        translateY: [100, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 700,
        delay: 200
      },{
        targets: nums3.current,
        translateX: ['0', '0'],
        translateY: [100, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 700,
        delay: 400
      },{
        targets: nums4.current,
        translateX: ['0', '0'],
        translateY: [100, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 700,
        delay: 600
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
    <div className="w-full bg-[#7DBF29] min-h-[40vh] flex flex-col md:flex-row justify-between items-center flex-wrap gap-12 lg:gap-5 py-16 lg:px-36">
      {items.map((item, index) => (
        <div ref={item.ref} key={index} id="counter" className="flex flex-col items-center gap-3 text-center sm:w-full md:w-[45%] lg:w-[23%]">
          <div className="w-[85px] h-[85px] bg-white flex justify-center items-center rounded-full">{item.svg}</div>
          <div className="text-5xl text-white count font-medium" data-count={item.numbers}>0</div>
          <div className="font-semibold">{item.title}</div>
        </div>
      ))}
    </div>
    
  );
}
