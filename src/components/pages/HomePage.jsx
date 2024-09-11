import { useEffect, useState } from "react";
import { BlogPost } from "../blog-post/BlogPost";
import { Carousel } from "../carousel/Carousel";
import { Trending } from "../trending/Trending";

export const HomePage = () => {
  const [page, setPage] = useState(9);
  const [articleTrending, setArticleTrending] = useState([]);
  const [articleCarousel, setArticleCarousel] = useState([]);
  const [articleBlogPost, setArticleBlogPost] = useState([]);

  const handleClickLoadMore = () => {
    setPage(page + 3);
  };

  const fetchCarouselData = () => {
    fetch(`http://dev.to/api/articles/latest?per_page=1`)
      .then((responce) => responce.json())
      .then((data) => setArticleCarousel(data));
  };

  const fetchTrendingData = () => {
    fetch(`http://dev.to/api/articles/latest?per_page=4&top=4`)
      .then((responce) => responce.json())
      .then((data) => setArticleTrending(data));
  };

  const fetchBlogPostData = () => {
    fetch(`http://dev.to/api/articles/latest?per_page=${page}`)
      .then((responce) => responce.json())
      .then((data) => setArticleBlogPost(data));
  };

  useEffect(() => {
    fetchCarouselData();
  }, []);

  useEffect(() => {
    fetchTrendingData();
  }, []);

  useEffect(() => {
    fetchBlogPostData();
  }, [page]);

  return (
    <div className="w-full h-auto flex justify-center items-center pt-[200px] pb-[100px] bg-[#FFF]">
      <div className="container max-w-[1216px] h-auto flex flex-col items-center m-auto bg-[#FFF] md:gap-[100px] gap-[50px] text-black">
        <Carousel articleCarousel={articleCarousel} />
        <Trending articleTrending={articleTrending} />
        <BlogPost
          articleBlogPost={articleBlogPost}
          handleClickLoadMore={handleClickLoadMore}
        />
      </div>
    </div>
  );
};
