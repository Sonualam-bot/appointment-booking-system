import { generateDate, months } from "../utils/calender";
import cn from "./cn";
import { useContext } from "react";

import leftArrow from "../assets/Chevron-left.svg";
import rightArrow from "../assets/Chevron-right.svg";
import { CalenderContext } from "../context/CalenderContext";

function CalenderComponent() {
  const { today, setToday, selectDate, setSelectDate } =
    useContext(CalenderContext);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getPrevMonth = () => {
    setToday(today.month(today.month() - 1));
  };
  const getNextMonth = () => {
    setToday(today.month(today.month() + 1));
  };

  return (
    <div className="w-96 h-[365px] ">
      <div className="flex justify-between items-center  border border-b-[#F2F2F5] py-[10px] px-5  ">
        <img
          src={leftArrow}
          alt="/left-arrow"
          className=" w-5 h-5 cursor-pointer "
          onClick={getPrevMonth}
        />
        <p className="text-[#333] font-Poppins text-[18px] font-medium leading-normal ">
          {months[today.month()]}, {today.year()}{" "}
        </p>
        <img
          src={rightArrow}
          alt="/right-arrow"
          className=" w-5 h-5 cursor-pointer "
          onClick={getNextMonth}
        />
      </div>

      <div className="grid grid-cols-7 text-[#378760]">
        {days.map((day, index) => {
          return (
            <h1
              key={index}
              className="h-8 grid place-content-center text-sm font-Poppins text-[14px] font-normal leading-normal  "
            >
              {day}
            </h1>
          );
        })}
      </div>

      <div className="w-full grid grid-cols-7  ">
        {generateDate(today.month(), today.year()).map(
          ({ date, currentMonth, today }, index) => {
            return (
              <div
                key={index}
                className="h-12 border-t grid place-content-center text-sm "
              >
                <h1
                  className={cn(
                    currentMonth ? "" : "text-gray-400",
                    today ? "font-[900]  " : "",
                    selectDate.toDate().toDateString() ===
                      date.toDate().toDateString()
                      ? "bg-[#378760]  text-white"
                      : "",
                    "h-10 w-14 grid place-content-center rounded-[99px] hover:bg-[#378760] hover:text-white transition-all cursor-pointer "
                  )}
                  onClick={() => {
                    setSelectDate(date);
                  }}
                >
                  {" "}
                  {date.date()}{" "}
                </h1>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default CalenderComponent;
