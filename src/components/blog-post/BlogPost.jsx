import { BlogPostCard } from "./BlogPostCard";
import { BlopgPostMenu } from "./BlogPostMenu";
import { LoadMore } from "../load-more/LoadMore";

export const BlogPost = ({ articleBlogPost, handleClickLoadMore }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[30px]">
      <BlopgPostMenu />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-[20px]">
        {articleBlogPost.map((card) => {
          return (
            <BlogPostCard
              badge={card.tag_list[0]}
              text={card.description}
              date={card.published_at}
              url={card.cover_image}
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
