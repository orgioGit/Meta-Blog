export const SinglePost = () => {
  return (
    <div className="flex justify-center items-center py-[100px] bg-[#FFF]">
      <div className="container max-w-[1216px] h-auto flex flex-col justify-center items-center bg-[#FFF]">
        <div className="w-full h-auto flex flex-col justify-center items-start  px-[208px] gap-[32px] bg-[#FFF]">
          <div className="flex flex-col justify-center items-start gap-[20px]">
            <h1 className="text-[36px] not-italic font-semibold leading-10 text-[#181A2A]">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h1>
            <div className="flex justify-center items-center gap-[8px]">
              <img
                src="./ProfileIcon.png"
                alt=""
                className="w-[28px] h-[28px]"
              />
              <div className="flex justify-center items-start gap-[24px]">
                <p className="text-[14px] not-italic font-medium leading-5 text-[#696A75]">
                  Tracey Wilson
                </p>
                <p className="text-[14px] not-italic font-medium leading-5 text-[#696A75]">
                  August 20, 2022
                </p>
              </div>
            </div>
          </div>
          <img src="./SinglePostImage.png" alt="" />
          <div className="flex flex-col justify-items-start items-start gap-[16px]">
            <p className="text-[20px] not-italic font-normal leading-8 text-[#3B3C4A]">
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you don't plan and prepare adequately.
              In this blog article, we'll explore tips and tricks for a
              memorable journey and how to make the most of your travels.
            </p>
            <p className="text-[20px] not-italic font-normal leading-8 text-[#3B3C4A]">
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </p>
          </div>
          <div className="flex flex-col justify-items-start items-start gap-[16px]">
            <h1 className="text-[24px] not-italic font-semibold leading-7 text-[#181A2A]">
              Research Your Destination
            </h1>
            <div className="flex flex-col justify-center items-center gap-[40px]">
              <p className="text-[20px] not-italic font-normal leading-8 text-[#3B3C4A]">
                Before embarking on your journey, take the time to research your
                destination. This includes understanding the local culture,
                customs, and laws, as well as identifying top attractions,
                restaurants, and accommodations. Doing so will help you navigate
                your destination with confidence and avoid any cultural faux
                pas.
              </p>
              <p className="text-[20px] not-italic font-normal leading-8 text-[#3B3C4A]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
                ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
                euismod elementum nisi quis eleifend quam adipiscing vitae.
                Viverra adipiscing at in tellus.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-[16px]">
            <h1 className="text-[20px] not-italic font-semibold leading-7 text-[#181A2A]">
              Plan Your Itinerary
            </h1>
            <div className="flex flex-col justify-center items-center gap-[40px]">
              <p className="text-[20px] not-italic font-normal leading-8 text-[#3B3C4A]">
                While it's essential to leave room for spontaneity and
                unexpected adventures, having a rough itinerary can help you
                make the most of your time and budget. Identify the must-see
                sights and experiences and prioritize them according to your
                interests and preferences. This will help you avoid
                overscheduling and ensure that you have time to relax and enjoy
                your journey.
              </p>
              <p className="text-[20px] not-italic font-normal leading-8 text-[#3B3C4A]">
                Vitae sapien pellentesque habitant morbi tristique. Luctus
                venenatis lectus magna fringilla. Nec ullamcorper sit amet risus
                nullam eget felis. Tincidunt arcu non sodales neque sodales ut
                etiam sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
