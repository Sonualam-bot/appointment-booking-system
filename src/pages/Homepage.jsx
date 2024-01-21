import Booking from "./Booking";
import Footer from "./Footer";

function Homepage() {
  return (
    <div className="flex flex-col w-[928px] h-[572px] items-center flex-shrink-0 rounded-xl shadow-lg bg-white   ">
      <Booking />
      <Footer />
    </div>
  );
}

export default Homepage;
