import { Copyright } from "./FooterCopyRight";
import { FooterAbout } from "./FooterAbout";
import { FooterMenu } from "./FooterMenu";
import { FooterSocial } from "./FooterSocial";

export const Footer = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center bg-[#F6F6F7]">
      <div className="container max-w-[1216px] h-auto flex flex-col items-center gap-[30px] md:py-[64px] py-[32px]">
        <div className="w-full h-auto md:grid md:grid-cols-3 flex flex-col grid-col justify-stretch md:items-start items-center md:gap-[40px] gap-[30px]">
          <FooterAbout />
          <FooterMenu />
          <FooterSocial />
        </div>
        <Copyright />
      </div>
    </div>
  );
};
