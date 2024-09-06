import { useEffect, useState } from "react";
import { BlogList } from "../bloglist/BlogList";

export const BlogListPage = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("http://dev.to/api/articles?per_page=12")
      .then((responce) => responce.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-auto flex justify-center items-center bg-[#FFF]">
      <div className="container max-w-[1216px] h-auto flex flex-col justify-center items-center bg-[#FFF]">
        <BlogList articles={articles} />
      </div>
    </div>
  );
};
