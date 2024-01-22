import CalenderComponent from "../component/CalenderComponent";

function Calender() {
  return (
    <section className="flex flex-col sm:p-5 md:p-10 sm:items-center md:items-start gap-5 flex-1 self-stretch bg-[#EBEBF0]  ">
      <div className="flex flex-col justify-center items-start gap-1 self-stretch">
        <h2 className=" sm:w-[88%] md:w-[380px] h-[35px] text-[#28293D] font-Poppins text-[24px] font-semibold leading-normal tracking-[0.25px] sm:text-center md:text-left ">
          Test Service
        </h2>
        <div className="flex items-center sm:justify-center md:justify-normal gap-[6px] self-stretch text-[#555770] font-Poppins text-[14px] leading-[21px] ">
          <p className="  font-semibold   ">Timezone:</p>
          <p className="font-normal   ">Asia/Calcutta</p>
        </div>
      </div>

      <div className="flex flex-col sm:items-center md:items-start   rounded-[10px] border border-[#C7C9D9] bg-[#FAFAFC] px-1 ">
        <CalenderComponent />
      </div>
    </section>
  );
}

export default Calender;
