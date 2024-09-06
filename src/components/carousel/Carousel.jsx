import { LeftIcon } from "../icons/LeftIcon";
import { RightIcon } from "../icons/RightIcon";

export const Carousel = () => {
  return (
    <div className="w-full h-auto m-auto flex justify-center items-center">
      <div className="container max-w-[1216px] h-auto flex jusity-center items-center flex-col gap-[24px]">
        <div
          className="w-full h-[600px] flex flex-col justify-end items-start gap-[12px] p-[12px] rounded-xl"
          style={{
            background: `url(./imagetechnology.png) rgba(255, 0, 150, 0.7)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="max-w-[1216px] h-auto flex flex-col relative items-end gap-[12px]">
            <div className="max-w-[600px] h-auto flex flex-col items-start bg-[#FFF] rounded-[8px] p-[40px] shadow-gray-400">
              <div className="flex flex-col items-start gap-[16px]">
                <div className="w-[100px] h-[30px]flex justify-center items-center bg-[#4B6BFB] py-[4px] px-[10px] rounded-[6px]">
                  <p className="text-[14px] not-italic font-medium leading-5 text-[#FFF]">
                    Technology
                  </p>
                </div>
                <h1 className="text-[36px] not-italic font-semibold leading-10 text-[#181A2A]">
                  Grid system for better Design User Interface
                </h1>
                <p className="text-[14px] not-italic font-normal leading-5 text-[#97989F]">
                  August 20, 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex md:justify-end justify-center items-center gap-[10px] group">
          <LeftIcon />
          <RightIcon />
        </div>
      </div>
    </div>
  );
};
