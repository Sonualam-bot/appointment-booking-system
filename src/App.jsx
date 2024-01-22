import { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
const Homepage = lazy(() => import("./pages/Homepage"));

import { Toaster } from "react-hot-toast";

//assets
import band1 from "./assets/rightband1.svg";
import band2 from "./assets/rightband2.svg";
import band3 from "./assets/rightband3.svg";
import leftBand1 from "./assets/leftband1.svg";
import leftBand2 from "./assets/leftband2.svg";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 1000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 1000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center mt-52 justify-center text-[#378760] ">
            <h1 className="text-3xl">Loading...</h1>
          </div>
        }
      >
        <Navbar />
        <div className="flex items-center justify-center pt-[20px] relative overflow-hidden ">
          <Homepage />
          <div className=" grid   absolute -right-36 bottom-0   ">
            <img
              src={band1}
              alt="/band"
              className=" w-[450px] h-[116.517px] ml-[90px]   "
            />
            <img
              src={band2}
              alt="/band"
              className=" w-[612px] h-[140.808px] -mt-[70px] -mb-[64.8px]  "
            />
            <img
              src={band3}
              alt="/band"
              className="w-[420px] h-[116.517px] ml-[140px]    "
            />
          </div>
          <div className="w-[386px] h-[199.506px] absolute -left-20 -bottom-[130px] rotate-[4deg]  ">
            <img
              src={leftBand1}
              alt="/leftband"
              className="w-[420px] h-[116.517px] -mb-[45px] "
            />
            <img
              src={leftBand2}
              alt="/leftband"
              className="w-[420px] h-[116.517px]  "
            />
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default App;

{
  /* <div className="flex items-center justify-center pt-[20px] relative overflow-hidden ">
          <Homepage />
          <div className=" flex flex-col bottom-2 -right-[150px] w-[612px] absolute  ">
            <img
              src={band1}
              alt="/band"
              className=" w-[450px] h-[116.517px] ml-[100px] object-contain self-stretch "
            />
            <img
              src={band2}
              alt="/band"
              className=" w-[612px] h-[140.808px] -mt-[84px] -mb-[65.5px]  "
            />
            <img
              src={band3}
              alt="/band"
              className="w-[420px] h-[116.517px] ml-[140px]  "
            />
          </div>
        </div> */
}
