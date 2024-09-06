export const Address = ({ title, text1, text2 }) => {
  return (
    <div className="w-full md:flex md:flex-col flex-col justify-center items-center bg-[#FFFF]">
      <div className="w-[294px] h-auto flex jusitfy-start items-start border rounded border-[#E8E8EA] p-[16px]">
        <div className="w-full h-auto flex flex-col justify-between items-start gap-[10px]">
          <h1 className="text-[24px] not-italic font-semibold leading-6 text-[#000]">
            {title}
          </h1>
          <div className="w-auto h-auto flex flex-col justify-between items-start gap-[6px]">
            <p className="text-[18px] not-italic font-normal leading-6 text-[#696A75]">
              {text1}
            </p>
            <p className="text-[18px] not-italic font-normal leading-6 text-[#696A75]">
              {text2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
