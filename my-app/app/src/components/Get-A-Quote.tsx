"use client";

import { useState } from "react";

export default function GetAQuote() {
  // Event handler to update the selected time
  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  };

  const formattedDate = getCurrentDate();

  const getCurrentTime = (): string => {
    const currentDate = new Date();
    const hours = ("0" + currentDate.getHours()).slice(-2); // Ensures two digits for hours
    const minutes = ("0" + currentDate.getMinutes()).slice(-2); // Ensures two digits for minutes

    return `${hours}:${minutes}`;
  };

  const currentTime = getCurrentTime();

  const [selectedTime, setSelectedTime] = useState<string>(currentTime);
  const [date, setDate] = useState<string>(formattedDate);

  return (
    <div className="flex flex-col w-full lg:w-[35%] h-[full]">
      <div className="getQuoteShow w-full flex justify-center items-center h-[70px] bg-[#297cbf] text-white">
        <h1 className="text-lg font-medium">GET A QUOTE</h1>
      </div>
      <div className="flex w-full px-7 py-16 bg-white h-full">
        <form className="w-full">
          <div className="flex flex-col w-full">
            <select
              className="w-full h-12 border border-[#b8b7b7] rounded-md focus:border-[#b8b7b7] p-3 font-medium text-[#2c2c2c]"
              name="Services"
              id="services"
            >
              <option value="">Select services</option>
              <option value="dog">Skylights</option>
              <option value="cat">Waterproofing</option>
              <option value="hamster">Industrial Roofing</option>
              <option value="parrot">Residential Roofing</option>
              <option value="spider">Gutter Cleaning</option>
              <option value="goldfish">Commercial Roofing</option>
            </select>
            <div className="flex gap-2 justify-between mt-2">
              <input
                type="text"
                className="h-12 w-[50%]  border border-[#b8b7b7] text-[#2c2c2c] font-medium rounded-md p-3 placeholder:font-medium placeholder:text-[#2c2c2c]"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="h-12 w-[50%]  border border-[#b8b7b7] text-[#2c2c2c] font-medium rounded-md p-3 placeholder:font-medium placeholder:text-[#2c2c2c]"
                placeholder="Email Adresss"
              />
            </div>
            <div className="flex gap-2 justify-between mt-2 w-full">
              <input
                type="date"
                className="h-12 w-[50%]  border border-[#b8b7b7] text-[#2c2c2c] font-medium rounded-md p-3 placeholder:font-medium placeholder:text-[#2c2c2c]"
                id="date"
                value={date} // Value bound to the state
                onChange={handleDateChange}
              />
              <input
                type="time"
                className="h-12 w-[50%]  border border-[#b8b7b7] text-[#2c2c2c] font-medium rounded-md p-3 placeholder:font-medium placeholder:text-[#2c2c2c]"
                id="time"
                name="trip-start"
                value={selectedTime} // Value bound to the state
                onChange={handleTimeChange}
              />
            </div>
            <textarea
              className="w-full min-h-36 mt-2 border border-[#b8b7b7] text-[#2c2c2c] font-medium rounded-md p-3 placeholder:font-medium placeholder:text-[#2c2c2c]"
              placeholder="message"
            ></textarea>
          </div>
          <button className="bg-[#297cbf] hover:bg-[#326186] text-white w-full text-[.8rem] h-12 px-4 p-2 rounded-[4px] font-semibold mt-7">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
