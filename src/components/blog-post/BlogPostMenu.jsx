export const BlopgPostMenu = () => {
  return (
    <div className="w-full h-auto flex flex-col md:gap-[32px]">
      <div className="text-[24px] not-italic font-bold leading-7 text-[#181A2A]">
        <h1>All Blog Post</h1>
      </div>
      <div className="md:flex flex-wrap justify-between items-center gap-[20px]">
        <div className="md:flex justify-center items-center gap-[20px] hidden">
          <button>
            <a
              href=""
              className="text-[12px] not-italic font-bold leading-6 text-[#D4A373]  hover:text-[#D4A373]"
            >
              All
            </a>
          </button>
          <button>
            <a
              href=""
              className="text-[12px] not-italic font-bold leading-6 text-[#495057]  hover:text-[#D4A373]"
            >
              Design
            </a>
          </button>
          <button>
            <a
              href=""
              className="text-[12px] not-italic font-bold leading-6 text-[#495057]  hover:text-[#D4A373]"
            >
              Travel
            </a>
          </button>
          <button>
            <a
              href=""
              className="text-[12px] not-italic font-bold leading-6 text-[#495057]  hover:text-[#D4A373]"
            >
              Fashion
            </a>
          </button>
          <button>
            <a
              href=""
              className="text-[12px] not-italic font-bold leading-6 text-[#495057]  hover:text-[#D4A373]"
            >
              Technology
            </a>
          </button>
          <button>
            <a
              href=""
              className="text-[12px] not-italic font-bold leading-6 text-[#495057]  hover:text-[#D4A373]"
            >
              Branding
            </a>
          </button>
        </div>
        <div className="md:flex hidden justify-center items-center">
          <a
            href=""
            className="text-[12px] not-italic font-bold leading-6 text-[#495057]  hover:text-[#D4A373]"
          >
            View All
          </a>
        </div>
      </div>
    </div>
  );
};
