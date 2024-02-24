import { Span } from "next/dist/trace";

export default function Navbar() {
  const navbarItems = [
    { item: "HOME" },
    { item: "ABOUT" },
    { item: "SERVICES" },
    { item: "PROJECTS" },
    { item: "TESTIMONIALS" },
    { item: "CONTACT US" },
  ];

  return (
    <div className="bg-white flex justify-center w-full shadow-lg">
    <div className=" items-center justify-between w-full h-[80px] hidden lg:flex text-black px-32">
      {/* <span className="h-full align-middle"> */}
        <ul className="flex justify-center items-center h-full">
          {navbarItems.map((item, index) => (
            <a
              key={index}
              className="flex justify-center items-center text-[.8rem] font-medium transition-all duration-300 ease-in-out hover:bg-[#7DBF29] h-full px-4"
              href="#"
            >
              <li>{item.item}</li>
            </a>
          ))}
        </ul>
      {/* </span> */}
      <span className="getQuoteHide flex justify-center items-center w-[35%] h-full bg-[#7DBF29] text-white border-t-2 border-white">
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
