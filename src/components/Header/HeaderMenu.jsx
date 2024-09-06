export const HeaderMenu = () => {
  return (
    <div className="md:flex justify-center items-center gap-[20px] hidden">
      <div className="w-full h-auto flex justify-center items-center gap-[40px]">
        <a
          href="http://localhost:3000"
          className="text-[16px] not-italic font-normal leading-6 text-[#3B3C4A]  hover:text-[#D4A373]"
        >
          Home
        </a>
        <a
          href="http://localhost:3000/blog-list"
          className="text-[16px] not-italic font-normal leading-6 text-[#3B3C4A]  hover:text-[#D4A373]"
        >
          Blog
        </a>
        <a
          href="http://localhost:3000/contact-us"
          className="text-[16px] not-italic font-normal leading-6 text-[#3B3C4A]  hover:text-[#D4A373]"
        >
          Contact
        </a>
      </div>
    </div>
  );
};
