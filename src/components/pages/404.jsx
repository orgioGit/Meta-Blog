import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/Header/Header";

export const ErrorPage = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center bg-[#FFF]">
      <div className="container max-w-[1216px] h-auto">
        <div className="flex justify-center items-center py-[100px] px-[330px] gap-[40px]">
          <h1 className="text-[72px] not-italic font-normal leading-[72px] text-[#000] ">
            404
          </h1>
          <div className="w-[1px] h-[156px] bg-[#E8E8EA]"></div>
          <div className="flex flex-col justify-center items-start gap-[20px]">
            <h1 className="text-[24px] not-italic font-semibold font-leading-10 text-[#000]">
              Page Not Found
            </h1>
            <p className="text-[18px] not-italic font-normal leading-6 text-[#696A75]">
              We're sorry, This page is unknown or does not exist the page you
              are looking for.
            </p>
            <div className="w-auto h-[40px] flex justify-center items-center px-[10px] py-[16px] rounded-[6px] bg-[#4B6BFB]">
              <a
                href="http://localhost:3000"
                className="text-[14px] not-italic font-medium leading-5"
              >
                Back To Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
