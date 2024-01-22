import Booking from "./Booking";
import Footer from "./Footer";

function Homepage() {
  return (
    <div className="flex flex-col customMd:w-[95%] lg:w-[928px]  items-center md:flex-shrink-0 rounded-xl shadow-lg bg-white z-10  ">
      <Booking />
      <Footer />
    </div>
  );
}

export default Homepage;
