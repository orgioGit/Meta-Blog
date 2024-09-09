export const TrendingCard = ({ badge, text, url }) => {
  return (
    <div
      className="w-auto h-[320px] flex flex-col justify-end rounded-[12px] p-[30px] gap-[16px] hover:shadow-sm shadow:shadow-sm"
      style={{
        background: `linear-gradient(0deg, rgba(20, 22, 36, 0.40) 50%, rgba(20, 22, 36, 0.40) 100%), url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
        backgroundColor: "LightGray",
      }}
    >
      <button className="max-w-[86px] max-h-[28px] flex justify-center items-center rounded-[6px] py-[4px] px-[10px] bg-[#4B6BFB]">
        <p className="text-[12px] not-italic font-medium leading-5 text-[#FFF]">
          {badge}
        </p>
      </button>
      <div>
        <p className="text-[18px] not-italic ffont-bold leading-7 text-[#FFF] line-clamp-3">
          {text}
        </p>
      </div>
    </div>
  );
};
