import { useContext } from "react";
import rightArr from "../assets/chevron-right.svg";
import { CalenderContext } from "../context/CalenderContext";

import toast from "react-hot-toast";

const confirmBooking = (index) => {
  return index !== undefined && index !== null
    ? toast.success("Booking Confirmed")
    : toast.error("Slot not Selected");
};

function Footer() {
  const { selectedSlotIndex } = useContext(CalenderContext);

  return (
    <div className="flex sm:w-[100%] px-[30px] py-[10px] items-center md:self-stretch justify-between bg-[#378760] rounded-b-lg ">
      <p className="text-white  font-Poppins text-[15px] font-semibold leading-[21px] text-uppercase  ">
        Powered By <span className="underline ">Appointo</span>{" "}
      </p>
      <div className="flex h-12 px-[30px] py-2 justify-center items-center gap-2 rounded-[10px] border border-[#378760] bg-white  ">
        <button
          className={`text-[#555770] font-Poppins text-[14px] font-semibold leading-[21px]  ${
            selectedSlotIndex ? "text-green-600" : ""
          }   `}
          onClick={() => confirmBooking(selectedSlotIndex)}
        >
          Next
        </button>
        <img src={rightArr} alt="/right-arrow" className="w-5 h-5 " />
      </div>
    </div>
  );
}

export default Footer;
