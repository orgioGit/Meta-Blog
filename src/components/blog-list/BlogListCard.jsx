export const BlogListCard = ({
  badge,
  text,
  date,
  url,
  profileImgUrl,
  name,
}) => {
  return (
    <div className="w-auto h-auto flex flex-col justify-start items-start border rounded-[12px] border-[#E8E8EA] p-[16px] gap-[16px]">
      <div
        style={{
          backgroundImage: `url(${url || "/no_image.png"})`,
          width: "100%",
          height: "240px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "6px",
        }}
      ></div>
      <div className="flex flex-col jusitfy-start items-start gap-[16px]">
        <span className="w-auto h-[28px] text-[12px] not-italic font-medium leading-5 text-[#4B6BFB] rounded-[6px] py-[4px] px-[10px] bg-[#4B6BFB0D]">
          {badge}
        </span>
        <h1 className="text-[24px] not-italic font-bold leading-6 text-[#181A2A] line-clamp-3">
          {text}
        </h1>
        <div className="flex justify-start items-center">
          <div className="flex gap-[8px]">
            <div
              style={{
                width: "28px",
                height: "28px",
                backgroundImage: `url(${profileImgUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "50%",
              }}
            ></div>
            <div className="flex justify-start items-center gap-[24px]">
              <h1 className="text-[14px] not-italic font-medium leading-5 text-[#696A75]">
                {name}
              </h1>
              <p className="text-[16px] not-italic font-normal leading-5 text-[#97989F]">
                {date}
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
