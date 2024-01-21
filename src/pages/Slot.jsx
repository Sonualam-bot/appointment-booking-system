import { useContext } from "react";
import { CalenderContext } from "../context/CalenderContext";

function Slot() {
  const { selectDate } = useContext(CalenderContext);

  return (
    <div className="w-96 h-full px-5 bg-white ">
      <h1>Schedule for {selectDate.toDate().toDateString()} </h1>
      <p>No Meetings for today</p>
    </div>
  );
}

export default Slot;
