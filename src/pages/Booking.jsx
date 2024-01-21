import Calender from "./Calender";
import Slot from "./Slot";

function Booking() {
  return (
    <section className="flex justify-center items-start flex-1 self-stretch bg-indigo-400 ">
      <Calender />
      <Slot />
    </section>
  );
}

export default Booking;
