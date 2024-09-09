import { MetaBlogLogo1 } from "../icons/MetaBlogLogo1";

export const Copyright = () => {
  return (
    <div className="w-full h-auto md:flex md:justify-between justify-between items-center md:py-[32px] py-[16px] gap-[12px] border-t border-[#E8E8EA]">
      <div className="w-auto flex justify-center items-start gap-[10px]">
        <MetaBlogLogo1 />
        <div>
          <div className="flex">
            <p className="text-[20px] not-italic font-normal leading-6 text-[#141624]">
              Meta
            </p>
            <p className="text-[20px] not-italic font-extrabold leading-6 text-[#141624]">
              Blog
            </p>
          </div>
          <p className="text-[16px] not-italic font-normal leading-6 text-[#3B3C4A]">
            © All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="w-auto h-auto md:flex md:justify-center justify-center items-center gap-[16px] hidden">
        <p className="text-[16px] not-italic font-normal leading-5 text-[#3B3C4A]">
          Term Of Use
        </p>
        <div className="w-[1px] h-[24px] bg-[#E8E8EA]"></div>
        <p className="text-[16px] not-italic font-normal leading-5 text-[#3B3C4A]">
          Privacy Policy
        </p>
        <div className="w-[1px] h-[24px] bg-[#E8E8EA]"></div>
        <p className="text-[16px] not-italic font-normal leading-5 text-[#3B3C4A]">
          Cookie Policy
        </p>
      </div>
    </div>
  );
};
