import { BlogList } from "../blog-list/BlogList";

export const BlogListPage = ({ articleBlogList, handleClickLoadMore }) => {

  const localHandleClickLoadMore = () => {
    setPage(page + 3);
  };

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
