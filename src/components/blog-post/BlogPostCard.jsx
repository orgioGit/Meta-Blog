export const BlogPostCard = ({ badge, text, date, url }) => {
  return (
    <div className="w-auto h-auto flex flex-col items-start border rounded-[12px] border-[#E8E8EA] p-[16px] gap-[16px]">
      <img src={url} alt="" className="w-full rounded-[6px]" />
      <div className="flex flex-col justify-start items-start gap-[16px]">
        <span className="text-[12px] not-italic font-medium leading-5 text-[#4B6BFB] rounded-[6px] py-[4px] px-[10px] bg-[#4B6BFB0D]">
          {badge}
        </span>
        <p className="text-[24px] not-italic font-bold leading-6 text-[#181A2A] line-clamp-3">
          {text}
        </p>
        <p className="text-[16px] not-italic font-normal leading-5 text-[#97989F]">
          {date}
        </p>
      </div>
    </div>
  );
};
