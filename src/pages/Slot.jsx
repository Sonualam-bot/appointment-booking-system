import { useContext } from "react";
import dayjs from "dayjs";
import { CalenderContext } from "../context/CalenderContext";
import divider from "../assets/divider.svg";
import circleCheck from "../assets/circle-check.svg";

function Slot() {
  const {
    selectDate,
    availableSlots,
    selectedSlotIndex,
    setSelectedSlotIndex,
  } = useContext(CalenderContext);

  const selectedDateString = selectDate.format("YYYY-MM-DD");

  const selectedDateSlots = availableSlots?.find(
    (item) => item.date === selectedDateString
  );

  const timeVariants =
    selectedDateSlots?.slots?.map((slot) => {
      const startTime = dayjs(slot.start_time);
      const endTime = dayjs(slot.end_time);
      const duration = endTime.diff(startTime, "minutes");
      return { duration, label: `${duration} min` };
    }) || [];

  const formattedDate = selectedDateSlots
    ? dayjs(selectedDateSlots.date).format("dddd, MMM D").toUpperCase() +
      " - Available Slots"
    : "";

  const handleSlotClick = (index) => {
    setSelectedSlotIndex(index === selectedSlotIndex ? null : index);
  };

  return (
    <>
      {!selectedDateSlots ? (
        <div className="flex p-10 flex-col items-start gap-5 flex-1 self-stretch bg-white text-lg text-green-600 ">
          {" "}
          <p>No Slots Available</p> <p>Please Choose Another Date</p>
        </div>
      ) : (
        <section className="flex p-10 flex-col items-start gap-5 flex-1 self-stretch bg-white ">
          <div className="flex flex-col items-start gap-[6px] self-stretch  ">
            <p className="text-[#555770] font-Poppins text-[12px] font-normal leading-[21px] uppercase">
              Select FROM Variants
            </p>
            <select className="flex h-12 py-2 px-3 justify-between items-center self-stretch rounded-[10px] border border-[#C7C9D9] bg-[#FAFAFC] ">
              {timeVariants.map((variant, index) => (
                <option
                  key={index}
                  className="text-[#378760] font-Poppins text-[14px] font-semibold leading-[21px]"
                >
                  {variant.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <img
              src={divider}
              alt="/divider"
              className="self-stretch stroke-[1px] stroke-[#C7C9D9]"
            />
          </div>
          <div className="flex flex-col items-start gap-[6px] self-stretch">
            <p className="text-[#555770] font-Poppins text-[12px] font-normal leading-[21px] uppercase">
              {formattedDate}
            </p>
            <div className="flex flex-col items-start gap-[15px] self-stretch overflow-scroll overflow-x-hidden h-[280px]">
              {timeVariants.map((slot, index) => (
                <div
                  key={index}
                  className={`flex h-12 w-full px-3 py-2 justify-center items-center self-stretch rounded-[10px] border cursor-pointer ${
                    selectedSlotIndex === index
                      ? "bg-[#378760] text-white border-[#378760]"
                      : "bg-white border-[#378760]"
                  }`}
                  onClick={() => handleSlotClick(index)}
                >
                  <p
                    className={`text-${
                      selectedSlotIndex === index ? "white" : "#378760"
                    } font-Poppins text-[14px] font-semibold leading-[21px]`}
                  >
                    {dayjs(slot.start_time).format("hh:mm A")} -{" "}
                    {dayjs(slot.end_time).format("hh:mm A")}
                  </p>
                  {selectedSlotIndex === index && (
                    <img
                      src={circleCheck}
                      alt="/check"
                      className="w-5 h-5 ml-auto "
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Slot;
