type Props = {
  page: number;
  lastPage: any;
  setPage: any;
};

const Pagination = ({ page, lastPage, setPage }: Props) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const lastPages = lastPage.pagination?.last_visible_page;

  const handleNextPage = () => {
    setPage((prevState: number) => prevState + 1);
    scrollTop()
  };

  const handlePrevPage = () => {
    setPage((nextState: number) => nextState - 1);
    scrollTop()
  };

  return (
    <div className="flex justify-between text-center items-center mt-8 gap-4">
        {page > 1 ? <button onClick={handlePrevPage} className="border rounded-md text-center p-2 px-3 border-gray-400 text-gray-800 font-semibold hover:bg-slate-300 transition-all ease-in-out">
        Prev
      </button> : <button onClick={handlePrevPage} disabled className="border rounded-md text-center p-2 px-3 border-gray-400 text-gray-800 font-semibold disabled:bg-slate-300 transition-all ease-in-out">
        Prev
      </button>}
      
      <p className="border rounded-md p-1 px-3 border-gray-400 text-gray-800 font-semibold hover:bg-slate-300 transition-all ease-in-out">
        {page} of {lastPages}
      </p>
      
      {page < lastPages ? <button onClick={handleNextPage} className="border rounded-md text-center p-2 px-3 border-gray-400 text-gray-800 font-semibold hover:bg-slate-300 transition-all ease-in-out">
        Next
      </button> : <button onClick={handleNextPage} disabled className="border rounded-md text-center p-2 px-3 border-gray-400 text-gray-800 font-semibold disabled:bg-slate-300 transition-all ease-in-out">
        Next
      </button>}
    </div>
  );
};

export default Pagination;
