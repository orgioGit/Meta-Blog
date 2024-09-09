import { TrendingCard } from "./TrendingCard";

export const Trending = ({ articleTrending }) => {
  return (
    <div className="w-full h-auto flex flex-col items-start gap-[30px]">
      <div className="flex justify-start items-start">
        <h1 className="text-[24px] not-italic font-bold leading-7 text-[#181A2A]">
          Trending
        </h1>
      </div>
      <div className="h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-[20px] gap-[30px]">
        {articleTrending.map((card) => {
          return (
            <TrendingCard
              badge={card.tag_list[0]}
              text={card.description}
              url={card.cover_image}
            />
          );
        })}
      </div>
    </div>
  );
};
