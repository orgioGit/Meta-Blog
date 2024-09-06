import { useEffect, useState } from "react";

import { BlogPostCard } from "./BlogPostCard";
import { BlopgPostMenu } from "./BlogPostMenu";
import { LoadMore } from "../load-more/LoadMore";

export const BlogPost = () => {
  const [Page, setPage] = useState(9);
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch(`http://dev.to/api/articles?per_page=${Page}`)
      .then((responce) => responce.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, [Page]);

  const handleClickLoadMore = () => {
    setPage(Page + 3);
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[30px]">
      <BlopgPostMenu />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-[20px]">
        {articles.map((card) => {
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
