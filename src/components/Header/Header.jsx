import { HumburgerIcon } from "../icons/HumburgerIcon";
import { MetaBlogLogo } from "../icons/MetaBlogLogo";
import { HeaderMenu } from "./HeaderMenu";
import { Search } from "./HeaderSearch";

export const Header = () => {
  return (
    <div className="w-full h-auto md:flex justify-center items-center sticky top-0 z-50 bg-[#FFF] md:py-[32px] py-[20px]">
      <div className="container max-w-[1216px] w-full h-auto flex justify-between items-center">
        <MetaBlogLogo />
        <HeaderMenu />
        <Search />
        <HumburgerIcon />
      </div>
    </div>
  );
};
