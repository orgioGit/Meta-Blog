import { FacebookIcon } from "../icons/FacebookIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { TwitterIcon } from "../icons/TwitterIcon";

export const FooterSocial = () => {
  return (
    <div className="md:flex flex md:justify-start justify-center md:items-start items-center gap-[28px]">
      <FacebookIcon />
      <TwitterIcon />
      <InstagramIcon />
      <LinkedInIcon />
    </div>
  );
};
