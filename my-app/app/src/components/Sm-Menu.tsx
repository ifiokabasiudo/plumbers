'use client'
import { useState } from "react"

export default function SmMenu () {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const navbarItems = [
        { item: "HOME" },
        { item: "ABOUT" },
        { item: "SERVICES" },
        { item: "PROJECTS" },
        { item: "TESTIMONIALS" },
        { item: "CONTACT US" },
      ];

    return(
        <div className="bg-black w-full flex md:hidden flex-col text-[#9b9b9b] p-3">
            <a className="px-5 hover:cursor-pointer w-fit font-semibold" onClick={handleClick}>MENU</a>
            <ul className={`transition-all duration-500 text-[.7rem] ${isOpen ? `h-[200px] opacity-100 mt-3`: `h-0 opacity-0`} w-full`}>
                {
                    navbarItems.map((navbarItem, index) => (
                        <li key={index} className="p-2 hover:text-[#297cbf] hover:cursor-pointer w-fit"><a href="#">{navbarItem.item}</a></li>
                    ))
                }
            </ul>
        </div>
    )
}