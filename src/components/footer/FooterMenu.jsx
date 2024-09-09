import Link from "next/link";

export const FooterMenu = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-center gap-[8px]">
      <Link
        href={"/"}
        className="text-[16px] not-italic font-normal leading-6 text-[#3B3C4A] hover:text-[#D4A373]"
      >
        Home
      </Link>
      <Link
        href={"/blog-list"}
        className="text-[16px] not-italic font-normal leading-6 text-[#3B3C4A] hover:text-[#D4A373]"
      >
        Blog
      </Link>
      <Link
        href={"/contact-us"}
        className="text-[16px] not-italic font-normal leading-6 text-[#3B3C4A] hover:text-[#D4A373]"
      >
        Contact
      </Link>
    </div>
  );
};
