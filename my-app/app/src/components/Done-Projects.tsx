'use client'

import Image from "next/image";
import Image1 from "../../../public/image1.jpg";
import Image2 from "../../../public/image2.jpg";
import Image3 from "../../../public/image3.jpg";
import Image4 from "../../../public/image4.jpg";
import Image5 from "../../../public/image5.jpg";
import Image6 from "../../../public/image6.jpg";
import Image7 from "../../../public/image7.jpg";
import Image8 from "../../../public/image8.jpg";
import anime from "animejs";
import { useEffect, useState, useRef } from "react";

export default function DoneProjects() {
  const pic1 = useRef(null);
  const pic2 = useRef(null);
  const pic3 = useRef(null);
  const pic4 = useRef(null);
  const pic5 = useRef(null);
  const pic6 = useRef(null);
  const pic7 = useRef(null);
  const pic8 = useRef(null);

  const images1: any[] = [
    { item: Image1, ref: pic1 },
    { item: Image2, ref: pic2 },
    { item: Image3, ref: pic3 },
    { item: Image4, ref: pic4 },
    { item: Image5, ref: pic5 },
    { item: Image6, ref: pic6 },
    { item: Image7, ref: pic7 },
    { item: Image8, ref: pic8 },
  ];

  useEffect(() => {
    const elementsToAnimate = [
      {
        name: 'pic1',
        nameCurrent: pic1.current,
        animated: false
      },{
        name: 'pic2',
        nameCurrent: pic2.current,
        animated: false
      },{
        name: 'pic3',
        nameCurrent: pic3.current,
        animated: false
      },{
        name: 'pic4',
        nameCurrent: pic4.current,
        animated: false
      },{
        name: 'pic5',
        nameCurrent: pic5.current,
        animated: false
      },{
        name: 'pic6',
        nameCurrent: pic6.current,
        animated: false
      },{
        name: 'pic7',
        nameCurrent: pic7.current,
        animated: false
      },{
        name: 'pic8',
        nameCurrent: pic8.current,
        animated: false
      },
    ];

    const animations: any = [
      {
        targets: pic1.current,
        scale: [0.9, 1],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1000,
      },{
        targets: pic2.current,
        scale: [0.9, 1],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 200
      },{
        targets: pic3.current,
        scale: [0.9, 1],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 400
      },{
        targets: pic4.current,
        scale: [0.9, 1],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 600
      },{
        targets: pic5.current,
        scale: [0.9, 1],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 800
      },{
        targets: pic6.current,
        scale: [0.9, 1],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 1000
      },{
        targets: pic7.current,
        scale: [0.9, 1],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 1200
      },{
        targets: pic8.current,
        scale: [0.9, 1],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 1400
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
    <div className="w-full min-h-[90vh] flex flex-col text-center text-[#535353] py-16 transition-all bg-white">
      <div className="font-semibold text-[#7DBF29]">PROJECTS</div>
      <h1 className="text-3xl mb-16 text-black">Done Projects</h1>
      <div className="flex w-full overflow-hidden flex-wrap">
        {images1.map((image, index) => (
          <div ref={image.ref} key={index} className="w-full sm:w-1/2 md:w-1/4 h-52 flex justify-center items-center">
            <Image
              src={image.item}
              alt={`image-` + index.toString}
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
