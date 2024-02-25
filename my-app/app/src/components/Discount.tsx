"use client";
import { useState } from "react";

export default function Discount() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const navbarItems = [
    { item: "HOME" },
    { item: "ABOUT" },
    { item: "SERVICES" },
    { item: "PROJECTS" },
    { item: "TESTIMONIALS" },
    { item: "CONTACT US" },
  ];

  return (
    <div className="bg-black w-full flex text-[white] p-3 text-center items-center justify-center">
      {/* <a className="px-5 hover:cursor-pointer w-fit font-semibold" onClick={handleClick}>MENU</a>
            <ul className={`transition-all duration-500 text-[.7rem] ${isOpen ? `h-[200px] opacity-100 mt-3`: `h-0 opacity-0`} w-full`}>
                {
                    navbarItems.map((navbarItem, index) => (
                        <li key={index} className="p-2 hover:text-[#7DBF29] hover:cursor-pointer w-fit"><a href="#">{navbarItem.item}</a></li>
                    ))
                }
            </ul> */}
      <p className="font-semibold flex items-center">
        First-time customer special
        <span className="w-[2px] h-[20px] mx-3 inline-block bg-[#297cbf]"></span>
        <span className="text-[#297cbf]">New customers get a free</span>
        <span className="font-bold inline-block ml-1 text-rose-600">10% off</span>
      </p>
    </div>
  );
}
