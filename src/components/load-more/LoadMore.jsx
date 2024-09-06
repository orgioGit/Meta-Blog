export const LoadMore = ({ handleClickLoadMore }) => {
  return (
    <button
      onClick={handleClickLoadMore}
      className="flex justify-center items-center max-w-[178px] h-[48px] border rounded-[6px] px-[20px] py-[12px] group-hover:border-[#D4A373] hover:bg-[#D4A373]/10"
    >
      <p className="text-[16px] not-italic font-medium leading-6 text-[#696A75] group-hover:text-[#D4A373] ">
        Load More
      </p>
    </button>
  );
};
