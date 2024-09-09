import { Address } from "../address/Address";
import { ContactForm } from "../contact-form/ContactForm";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const ContactUsPage = () => {
  const addressinfo = [
    {
      title: "Address",
      text1: "1328 Oak Ridge Drive, Saint Louis, Missouri",
    },
    {
      title: "Contact",
      text1: "313-332-8662",
      text2: "textinfo@email.com",
    },
  ];
  return (
    <div className="w-full h-auto flex justify-center items-center bg-[#FFF]">
      <div className="container max-w-[1216px] h-auto flex flex-col justify-center items-center bg-[#FFF]">
        <div className="w-full h-auto flex flex-col justify-center items-start py-[100px] px-[286px] gap-5 bg-[#FFF]">
          <div className="w-auto h-auto flex justify-start items-start">
            <h1 className="text-[36px] not-italic font-semibold leading-10 text-[#000]">
              Conctact Us
            </h1>
          </div>
          <p className="text-[16px] not-italic font-normal leading-6 text-[#696A75]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
          <div className="w-full h-auto flex justify-center items-center gap-[50px]">
            {addressinfo.map((address) => {
              return (
                <Address
                  title={address.title}
                  text1={address.text1}
                  text2={address.text2}
                />
              );
            })}
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
