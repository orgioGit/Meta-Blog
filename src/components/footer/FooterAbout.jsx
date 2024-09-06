export const FooterAbout = () => {
  return (
    <div className="max-w-[280px] md:flex flex-col justify-start items-start md:gap-[24px] gap-[12px] hidden">
      <div className="flex flex-col justify-start items-start gap-[12px]">
        <h1 className="text-[18px] not-italic font-semibold leading-7 text-[#181A2A]">
          About Me
        </h1>
        <p className="text-[16px] not-italic font-normal leading-6 text-[#696A75]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
      <div className="flex flex-col justify-start items-start gap-[4px] text-center">
        <div className="flex justify-center items-center gap-[5px]">
          <p className="text-[16px] not-italic font-normal leading-6 text-[#181A2A]">
            Email :
          </p>
          <p className="text-[16px] not-italic font-normal leading-6 text-[#3B3C4A]">
            info@jstemplate.net
          </p>
        </div>
        <div className="flex justify-center items-center gap-[5px]">
          <p className="text-[16px] not-italic font-normal leading-6 text-[#181A2A]">
            Phone :
          </p>
          <p className="text-[16px] not-italic font-normal leading-6 text-[#3B3C4A]">
            880 123 456 789
          </p>
        </div>
      </div>
    </div>
  );
};
