import { LoadMore } from "../load-more/LoadMore";
import { BlogListCard } from "./BlogListCard";

export const BlogList = ({ articleBlogList, handleClickLoadMore }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[30px]  pt-[200px] pb-[100px]">
      <div className="w-full h-auto flex flex-col justify-start items-start md:gap-[32px]">
        <h1 className="text-[24px] not-italic font-bold leading-7 text-[#181A2A]">
          All Blog Post
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-[20px]">
        {articleBlogList.map((card) => {
          return (
            <BlogListCard
              url={card.cover_image}
              badge={card.tag_list[0]}
              text={card.description}
              profileImgUrl={card.user.profile_image}
              name={card.user.name}
              date={card.published_at}
            />
          );
        })}
      </div>
      <div className="h-auto flex justify-center items-center group">
        <LoadMore handleClickLoadMore={handleClickLoadMore} />
      </div>
    </div>
  );
};
