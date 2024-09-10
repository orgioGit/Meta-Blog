import { LeftIcon } from "../icons/LeftIcon";
import { RightIcon } from "../icons/RightIcon";

export const Carousel = ({ articleCarousel }) => {
  return (
    <div className="w-full h-auto m-auto flex flex-col justify-center items-center gap-[24px]">
      <div className="w-full h-auto m-auto flex justify-center items-center">
        <div className="container max-w-[1216px] h-auto flex jusity-center items-center flex-col gap-[24px]">
          {articleCarousel.map((carousel) => {
            return (
              <div
                className="w-full h-[600px] flex flex-col justify-end items-start gap-[12px] p-[12px] rounded-xl"
                style={{
                  background: `url(${carousel.cover_image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "LightGray",
                }}
              >
                <div className="max-w-[1216px] h-auto flex flex-col relative items-end gap-[12px]">
                  <div className="max-w-[600px] h-[252px] flex flex-col items-start bg-[#FFF] rounded-[8px] p-[40px] shadow-gray-400">
                    <div className="flex flex-col items-start gap-[16px]">
                      <div className="w-auto h-auto flex justify-center items-center bg-[#4B6BFB] py-[4px] px-[10px] rounded-[6px]">
                        <p className="text-[14px] not-italic font-medium leading-5 text-[#FFF]">
                          {carousel?.title}
                        </p>
                      </div>
                      <h1 className="text-[36px] not-italic font-semibold leading-10 text-[#181A2A] line-clamp-2">
                        {carousel?.description}
                      </h1>
                      <p className="text-[16px] not-italic font-normal leading-6 text-[#97989F]">
                        {carousel?.published_at}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-auto flex md:justify-end justify-center items-center gap-[10px] group">
        <LeftIcon />
        <RightIcon />
      </div>
    </div>
  );
};
