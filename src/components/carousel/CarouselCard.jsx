export const CarouselCard = () => {
    return (
        <div
          className="w-full h-[600px] flex flex-col justify-end items-start gap-[12px] p-[12px] rounded-xl"
          style={{
            background: `url(./imagetechnology.png), linear-gradient(0deg, rgba(20, 22, 36, 0.40) 50%, rgba(20, 22, 36, 0.40) 100%),`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "LightGray",
            // opacity: "0.5",
          }}
        >
          <div className="max-w-[1216px] h-auto flex flex-col relative items-end gap-[12px]">
            <div className="max-w-[600px] h-auto flex flex-col items-start bg-[#FFF] rounded-[8px] p-[40px] shadow-gray-400">
              <div className="flex flex-col items-start gap-[16px]">
                <div className="w-[100px] h-[30px]flex justify-center items-center bg-[#4B6BFB] py-[4px] px-[10px] rounded-[6px]">
                  <p className="text-[14px] not-italic font-medium leading-5 text-[#FFF]">
                    { /* {carouselBadge} */}
                  </p>
                </div>
                <h1 className="text-[36px] not-italic font-semibold leading-10 text-[#181A2A]">
                  {/* {carouselText} */}
                </h1>
                <p className="text-[14px] not-italic font-normal leading-5 text-[#97989F]">
                  {/* {carouselDate} */}
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}