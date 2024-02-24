'use client'

import { useEffect, useState, useRef } from "react";
import anime from "animejs";

export default function ContactUs() {
  const animateSocials = useRef(null);

  const services = [
    { name: "Skylights" },
    { name: "Waterproofing" },
    { name: "Industrial Roofing" },
    { name: "Residential Roofing" },
    { name: "Gutter Cleaning" },
    { name: "Commercial Roofing" },
  ];

  const socials = [
    {
      name: "instagram",
      link: "#",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="25"
          height="25"
        >
          <path
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: "facebook",
      link: "#",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          width="25"
          height="25"
        >
          <path
            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: "x",
      link: "#",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="25"
          height="25"
        >
          <path
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: "linkedin",
      link: "#",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="25"
          height="25"
        >
          <path
            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const elementsToAnimate = [
      {
        name: 'animateSocials',
        nameCurrent: animateSocials.current,
        animated: false
      },
    ];

    const animations: any = [
      {
        targets: animateSocials.current,
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
    <div className="w-full min-h-[50vh] bg-[#1E3941] px-8 lg:px-32 py-16 text-center">
      <div className="flex justify-center lg:justify-between w-full gap-5 text-left flex-wrap lg:flex-nowrap">
        <div className="flex flex-col gap-5 w-full md:w-[40%] lg:w-1/4 py-5 lg:pr-5">
          <h1 className="flex items-end">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width={"25px"}
              height={"25px"}
            >
              <path
                d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5V480c0 17.7-14.3 32-32 32H120c-17.7 0-32-14.3-32-32V441.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3h19.5c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3h19.5c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6h19.5c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5V480c0 17.7-14.3 32-32 32H472c-17.7 0-32-14.3-32-32V441.5l-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5V400c0 17.7-14.3 32-32 32H296c-17.7 0-32-14.3-32-32V345.5l-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z"
                fill="#7DBF29"
              />
            </svg>
            <span className="ml-3 text-xl font-semibold">ROOFING</span>
          </h1>
          <p className="">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <span ref={animateSocials} className="flex items-center mt-3">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] rounded-full bg-[#2a5461] flex justify-center items-center hover:transition-all hover:-translate-y-1 mx-2 p-2"
              >
                {social.svg}
              </a>
            ))}
          </span>
        </div>
        <div className="flex flex-col w-full md:w-[40%] lg:w-1/4 p-5 gap-5">
          <h1 className="font-semibold text-xl">Services</h1>
          <ul>
            {services.map((service, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width={"20"}
                  height={"15"}
                >
                  <path
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    fill="#7DBF29"
                  />
                </svg>
                {service.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col w-full md:w-[40%] lg:w-1/4 p-5 gap-5">
          <h1 className="font-semibold text-xl">Business Hours</h1>
          <div>
            <h3 className="text-[#7DBF29]">OPENING DAYS:</h3>
            <ul className="pl-4">
              <li>Monday - Friday : 9am to 20 pm</li>
              <li>Saturday : 9am to 17 pm</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#7DBF29]">VACATIONS:</h3>
            <p className="pl-4">All Sunday Days All Official Holidays</p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[40%] lg:w-1/4 pl-5 py-5 gap-5">
          <h1 className="font-semibold text-xl">Contact Information</h1>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center gap-4">
              <svg
                className=" self-start"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width={"20"}
                height={"20"}
              >
                <path
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                  fill="#FFFFFF"
                />
              </svg>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className="flex items-center gap-4 hover:text-[#7DBF29] hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={"20"}
                height={"12"}
              >
                <path
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                  fill="#FFFFFF"
                />
              </svg>
              <p>+2 392 3929 210</p>
            </div>
            <div className="flex items-center gap-4 hover:text-[#7DBF29] hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={"20"}
                height={"15"}
              >
                <path
                  d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                  fill="#FFFFFF"
                />
              </svg>
              <p>info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-24 pt-16">
        <p>
          Copyright © 2024 All rights reserved | This template is made with Love
          by OakWeb
        </p>
      </div>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z" />
      </svg> */}
    </div>
  );
}
