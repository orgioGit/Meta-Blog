export const ContactForm = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-start rounded-[10px] pt-[30px] pr-[160px] pb-[160px] pl-[35px] gap-[20px] bg-[#F6F6F7]">
      <h1 className="text-[18px] not-italic font-semibold leading-[26px] text-[#000]">
        Leave a Message
      </h1>
      <div className="w-full h-auto flex justify-between items-center gap-[28px]">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full h-auto text-[16px] font-normal leading-6 rounded-[5px] text-[#97989F] border border-[#DCDDDF] p-[14px]"
        />
        <input
          type="text"
          placeholder="Your Email"
          className="w-auto h-auto text-[16px] font-normal leading-6 rounded-[5px] text-[#97989F] border border-[#DCDDDF] p-[14px]"
        />
      </div>
      <div className="w-full h-auto">
        <input
          type="text"
          placeholder="Subject"
          className="w-full h-auto text-[16px] font-normal leading-6 rounded-[5px] text-[#97989F] border border-[#DCDDDF] p-[14px]"
        />
      </div>
      <div className="w-full h-auto">
        <input
          type="text"
          placeholder="Write a message"
          className="w-full h-[143px] flex justify-start items-start text-[16px] font-normal leading-6 rounded-[5px] text-[#97989F] border border-[#DCDDDF] p-[14px] pb-[190px]"
        />
      </div>
      <div>
        <div className="w-full h-auto flex justify-center items-center rounded-[6px] py-[10px] px-[16px] bg-[#4B6BFB]">
          <p className="text-[12px] not-italic font-medium leading-5 text-[#FFF]">
            Sent Message
          </p>
        </div>
      </div>
    </div>
  );
};
