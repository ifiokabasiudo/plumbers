"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ManStanding from "../../../public/man-standing.png";
import anime from "animejs";

export default function OurServices() {
  const [heading, setHeading] = useState("Changing Gyser Element");
  const animateHeading = useRef(null);
  const text = useRef(null);
  const text2 = useRef(null);

  const items = [
    {
      item: "Changing Gyser Element",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut magna laoreet, facilisis turpis vitae, tempor ligula. Aenean id sem non libero facilisis sagittis eget ac arcu. Donec porttitor, libero nec pulvinar porta, nisi urna faucibus quam, vel semper metus sapien et leo. Aliquam eleifend massa id aliquet tincidunt. ",
      lists: [
        { pos: "Nunc interdum velit ut magna fringilla" },
        { pos: "Sed vitae scelerisque lorem" },
        { pos: "Praesent ultrices nulla sed sagittis porttitor" },
        { pos: "Vestibulum blandit odio quis nulla laoreet" },
        { pos: "Curabitur ornare ante at mi interdum iaculis" },
      ],
    },
    {
      item: "Trenchless Sewer Replacement",
      content:
        "Integer ut magna laoreet, facilisis turpis vitae, tempor ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sem non libero facilisis sagittis eget ac arcu. Donec porttitor, libero nec pulvinar porta, nisi urna faucibus quam, vel semper metus sapien et leo. Aliquam eleifend massa id aliquet tincidunt. ",
      lists: [
        { pos: "Vestibulum blandit odio quis nulla laoreet" },
        { pos: "Curabitur ornare ante at mi interdum iaculis" },
        { pos: "Nunc interdum velit ut magna fringilla" },
        { pos: "Sed vitae scelerisque lorem" },
      ],
    },
    {
      item: "Sewer Pipe Lining",
      content:
        "Aliquam eleifend massa id aliquet tincidunt. Integer ut magna laoreet, facilisis turpis vitae, tempor ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sem non libero facilisis sagittis eget ac arcu. Donec porttitor, libero nec pulvinar porta, nisi urna faucibus quam, vel semper metus sapien et leo. ",
      lists: [
        { pos: "Nunc interdum velit ut magna fringilla" },
        { pos: "Vestibulum blandit odio quis nulla laoreet" },
        { pos: "Curabitur ornare ante at mi interdum iaculis" },
        { pos: "Integer ut magna laoreet, facilisis" },
        { pos: "Sed vitae scelerisque lorem" },
      ],
    },
    {
      item: "Drain Cleaning",
      content:
        "Libero nec pulvinar porta, nisi urna faucibus quam, Integer ut magna laoreet, facilisis turpis vitae, tempor ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sem non libero facilisis sagittis eget ac arcu. Donec porttitor, libero nec pulvinar porta, nisi urna faucibus quam, vel semper metus sapien et leo. Aliquam eleifend massa id aliquet tincidunt. ",
      lists: [
        { pos: "Vestibulum blandit odio quis nulla laoreet" },
        { pos: "Curabitur ornare ante at mi interdum iaculis" },
        { pos: "Nunc interdum velit ut magna fringilla" },
        { pos: "Sed vitae scelerisque lorem" },
      ],
    },
    {
      item: "Hydro Jetting",
      content:
        "Donec porttitor, libero nec pulvinar porta, nisi urna faucibus quam, vel semper metus sapien et leo. Integer ut magna laoreet, facilisis turpis vitae, tempor ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sem non libero facilisis sagittis eget ac arcu. Aliquam eleifend massa id aliquet tincidunt. ",
      lists: [
        { pos: "Nunc interdum velit ut magna fringilla" },
        { pos: "Sed vitae scelerisque lorem" },
        { pos: "Praesent ultrices nulla sed sagittis porttitor" },
        { pos: "Vestibulum blandit odio quis nulla laoreet" },
        { pos: "Curabitur ornare ante at mi interdum iaculis" },
      ],
    },
    {
      item: "Camara Inspection",
      content:
        "Integer ut magna laoreet, facilisis turpis vitae, tempor ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id sem non libero facilisis sagittis eget ac arcu. Donec porttitor, libero nec pulvinar porta, nisi urna faucibus quam, vel semper metus sapien et leo. Aliquam eleifend massa id aliquet tincidunt. ",
      lists: [
        { pos: "Vestibulum blandit odio quis nulla laoreet" },
        { pos: "Curabitur ornare ante at mi interdum iaculis" },
        { pos: "Nunc interdum velit ut magna fringilla" },
        { pos: "Sed vitae scelerisque lorem" },
      ],
    },
  ];

  const handleClick = (item: any) => {
    setHeading(item);
  };

  useEffect(() => {
    const elementsToAnimate = [
      {
        name: 'animateHeading',
        nameCurrent: animateHeading.current,
        animated: false
      },{
        name: 'text',
        nameCurrent: text.current,
        animated: false
      },{
        name: 'text2',
        nameCurrent: text2.current,
        animated: true
      }
    ];

    const animations: any = [
      {
        targets: animateHeading.current,
        translateX: ['0', '0'],
        translateY: [100, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 700,
      },{
        targets: text.current,
        translateX: ['0', '0'],
        translateY: [100, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 700,
        delay: 200
      },{
        targets: text2.current,
        translateX: ['0', '0'],
        translateY: [100, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 700,
        delay: 200
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
    <div className="w-full min-h-[90vh] flex flex-col text-center text-[#535353] py-16 px-8 lg:px-32 transition-all bg-white">
      <h1 ref={animateHeading} className="text-3xl font-medium">Our Best Services</h1>
      <div className="flex flex-col md:flex-row text-left font-medium mt-16 gap-10">
        <ul ref={text} className="md:w-[25%] text-black">
          {items.map((item, index) => (
            <li
              onClick={() => handleClick(item.item)}
              key={index}
              className={`${index !== 0 ? `` : `border-t`} ${
                item.item === heading ? `` : `border-r`
              } border-b border-[#b8b7b7] p-7 hover:cursor-pointer`}
            >
              {item.item}
            </li>
          ))}
        </ul>
        <div ref={text2} className="flex flex-col md:w-[75%] lg:w-[50%]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`transition-opacity duration-700 ease-in-out ${heading === item.item ? `opacity-1` : `opacity-0`}`}
            >
              {heading === item.item && (
                <div key={index}>
                  <h1 className="text-3xl text-black">{item.item}</h1>
                  <p className="mt-5">{item.content}</p>
                  <ul className="mt-5 text-center">
                    {item.lists?.map((list, index) => (
                      <li
                        key={index}
                        className="border border-[#b8b7b7] p-3 my-3"
                      >
                        {list.pos}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-[25%] hidden lg:block">
          <Image
            className="h-full w-[70%]"
            src={ManStanding}
            width={1440}
            alt="man standing, folded arms"
            // layout="fill" // or layout="fill" depending on your use case
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
