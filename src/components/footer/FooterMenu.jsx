export const FooterMenu = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-center gap-[8px]">
      <a
        href="http://localhost:3000/"
        className="text-[16px] not-italic font-normal leading-6 text-[#3B3C4A] hover:text-[#D4A373]"
      >
        Home
      </a>
      <a
        href="http://localhost:3000/blog-list"
        className="text-[16px] not-italic font-normal leading-6 text-[#3B3C4A] hover:text-[#D4A373]"
      >
        Blog
      </a>
      <a
        href="http://localhost:3000/contact-us"
        className="text-[16px] not-italic font-normal leading-6 text-[#3B3C4A] hover:text-[#D4A373]"
      >
        Contact
      </a>
    </div>
  );
};
