import Link from "next/link";

export const HeaderMenu = () => {
  return (
    <div className="md:flex justify-center items-center gap-[20px] hidden">
      <div className="w-full h-auto flex justify-center items-center gap-[40px]">
        <Link href={"/"}
        className="text-[16px] not-italic font-normal leading-6 text-[#3B3C4A]  hover:text-[#D4A373]">
          Home
        </Link>
        <Link href={"/blog-list"} className="text-[16px] not-italic font-normal leading-6 text-[#3B3C4A]  hover:text-[#D4A373]">
          Blog
        </Link>
        <Link href={"/contact-us"} className="text-[16px] not-italic font-normal leading-6 text-[#3B3C4A]  hover:text-[#D4A373]">
          Contact
        </Link>
      </div>
    </div>
  );
};
