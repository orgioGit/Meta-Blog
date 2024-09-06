import { useEffect, useState } from "react";
import { BlogPost } from "../blog-post/BlogPost";
import { Carousel } from "../carousel/Carousel";
import { Trending } from "../trending/Trending";

export const HomePage = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("http://dev.to/api/articles?per_page=6")
      .then((responce) => responce.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-auto flex justify-center items-center py-[100px] bg-[#FFF]">
      <div className="container max-w-[1216px] h-auto flex flex-col items-center m-auto bg-[#FFF] md:gap-[100px] gap-[50px]">
        <Carousel articles={articles} />
        <Trending articles={articles} />
        <BlogPost articles={articles} />
      </div>
    </div>
  );
};
