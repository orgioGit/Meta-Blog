import { BlogListPage } from "@/components/pages/BlogListPage";
import { useEffect, useState } from "react";

export default function Name(params) {
  const [page, setPage] = useState(12);
  const [articleBlogList, setArticleBlogList] = useState([]);
  // const handleClickLoadMore = () => {
  //   setPage(page + 3);
  // };

  const fetchBlogListData = () => {
    fetch(`http://dev.to/api/articles?per_page=12`)
      .then((responce) => responce.json())
      .then((data) => setArticleBlogList(data));
  };

  useEffect(() => {
    fetchBlogListData();
  }, [page]);

  return (
    <div>
      <BlogListPage articleBlogList={articleBlogList}/>
    </div>
  );
}
