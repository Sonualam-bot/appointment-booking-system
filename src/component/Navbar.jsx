import downArrow from "../assets/chevron-down.svg";
import externalLink from "../assets/external-link.svg";

function Navbar() {
  return (
    <div className="flex  justify-between items-center px-[40px] py-[12px] bg-white shadow-md  ">
      <div className="w-[228px] h-[61px] flex-shrink-0 bg-[url('./assets/logo.png')] mix-blend-multiply "></div>
      <div className="flex w-[708.5px] justify-end items-center gap-5 flex-shrink-0 ">
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
    </div>
  );
}

export default Navbar;
