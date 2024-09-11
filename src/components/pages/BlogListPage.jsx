import { useEffect, useState } from "react";
import { BlogList } from "../blog-list/BlogList";

export const BlogListPage = () => {
  const [page, setPage] = useState(12);
  const [articleBlogList, setArticleBlogList] = useState([]);
  const handleClickLoadMore = () => {
    setPage(page + 3);
  };

  const fetchBlogListData = () => {
    fetch(`http://dev.to/api/articles?per_page=${page}`)
      .then((responce) => responce.json())
      .then((data) => setArticleBlogList(data));
  };

  useEffect(() => {
    fetchBlogListData();
  }, [page]);

  return (
    <div className="w-full h-auto flex justify-center items-center bg-[#FFF]">
      <div className="container max-w-[1216px] h-auto flex flex-col justify-center items-center bg-[#FFF]">
        <BlogList
          articleBlogList={articleBlogList}
          handleClickLoadMore={handleClickLoadMore}
        />
      </div>
    </div>
  );
};
