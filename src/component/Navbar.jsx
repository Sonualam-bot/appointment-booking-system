import { useState } from "react";
import downArrow from "../assets/chevron-down.svg";
import externalLink from "../assets/external-link.svg";

import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex w-full  justify-between items-center px-[40px] py-[12px] bg-white shadow-md  ">
      <div className="w-[228px] h-[61px]  bg-[url('./assets/logo.png')] mix-blend-multiply "></div>
      <div className="flex w-[708.5px] justify-end items-center gap-5 md:flex md:flex-row sm:hidden ">
        <div className="flex items-center gap-[6px]">
          <p className="text-[#090F4E] text-right text-[18px] font-medium leading-normal ">
            Menu
          </p>
          <img src={downArrow} alt="/" className="w-[20px] h-[20px] " />
        </div>
        <p className="text-[#090F4E] text-right text-[18px] font-medium leading-normal">
          Contact us
        </p>
        <div className="flex px-5 py-2 justify-center items-center gap-2 rounded-[40px] border border-[#378760] bg-white ">
          <img src={externalLink} alt="/share" className="w-[20px] h-[20px] " />
          <p className="text-[#378760] text-center text-[16px] font-medium leading-6 ">
            Share Link
          </p>
        </div>
      </div>

      <div
        className="sm:block md:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        <IoMdMenu className="text-3xl" />
      </div>

      {showMenu && (
        <div className="bg-white shadow-lg absolute flex flex-col items-center justify-center p-6 top-0  transform  translate-y-[50%] z-20 gap-6 w-[80%]  ">
          <div className="flex items-center gap-[4px]">
            <p className="text-[#090F4E] text-right text-[18px] font-normal leading-tight ">
              Menu
            </p>
            <img src={downArrow} alt="/" className="w-[20px] h-[20px] " />{" "}
          </div>
          <p className="text-[#090F4E] text-right text-[18px] font-normal leading-tight">
            Contact us
          </p>
          <div className="flex px-5 py-2 justify-center items-center gap-2 rounded-[40px] border border-[#378760] bg-white ">
            <img
              src={externalLink}
              alt="/share"
              className="w-[20px] h-[20px] "
            />
            <p className="text-[#378760] text-center text-[16px] font-normal leading-3 ">
              Share Link
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
