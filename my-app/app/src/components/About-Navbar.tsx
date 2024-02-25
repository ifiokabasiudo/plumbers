import { Span } from "next/dist/trace";
import { useState } from "react";

export default function Navbar() {
  const [hover, setHover] = useState(false)
  const [chosen, setChosen] = useState("")

  const navbarItems = [
    { item: "HOME" },
    { item: "ABOUT" },
    { item: "SERVICES" },
    { item: "PROJECTS" },
    { item: "TESTIMONIALS" },
    { item: "CONTACT US" },
  ];

  const handleMouseOver = (item: string) => {
    setChosen(item)
    setHover(true)
  }
  const handleMouseLeave = (item: string) => {
    setChosen("")
    setHover(false)
  }

  return (
    <div className="bg-white flex justify-center w-full shadow-lg">
    <div className=" items-center justify-between w-full h-[80px] hidden lg:flex text-black px-32">
      {/* <span className="h-full align-middle"> */}
        <ul className="flex justify-center items-center h-full z-20">
          {navbarItems.map((item, index) => (
            <a
              key={index}
              onMouseOver={() => handleMouseOver(item.item)}
              onMouseLeave={() => handleMouseLeave(item.item)}
              className="relative flex justify-center items-center text-[.8rem] font-medium transition-all duration-300 ease-in-out hover:text-white h-full px-4"
              href="#"
            >
              <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 origin-left transition-all duration-500 ${hover && chosen === item.item ? `w-full opacity-100` : `w-0 opacity-0`} h-full bg-[#297cbf] -z-10`}></div>
              <li className="bg-transparent">{item.item}</li>
            </a>
          ))}
        </ul>
      {/* </span> */}
      <span className="getQuoteHide flex justify-center items-center w-[35%] h-full bg-[#297cbf] text-white border-t-2 border-white">
        <h1 className="text-lg font-medium">GET A QUOTE</h1>
      </span>
    </div>
    </div>
  );
}

// export default function AboutNavbar () {
//     return (
//         <div className="bg-white w-full h-[80px] shadow-lg">

//         </div>
//     )
// }
