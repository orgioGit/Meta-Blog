import { SearchIcon } from "../icons/SearchIcon";

export const Search = () => {
  return (
    <button className="md:flex hidden justify-center items-center w-[166px] h-[36px] rounded-[5px] pt-[8px] pr-[8px] pb-[8px] pl-[16px] gap-[12px] bg-[#F4F4F5]">
      <input
        type="Search"
        placeholder="Search"
        className="w-full h-auto text-[14px] not-italic font-normal leading-5 bg-[#F4F4F5] text-[#A1A1AA]"
      />
      <div>
        <SearchIcon />
      </div>
    </button>
  );
};
