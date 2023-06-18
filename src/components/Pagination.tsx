const Pagination = (props: { currentPage: any; pageLength: any; handlePreviousPageData: any; handleNextPageData: any; }) => {

    const {currentPage , pageLength, handlePreviousPageData, handleNextPageData} = props;

    return (
        <div className="flex justify-between pt-4">
        <button
          className="border px-2 rounded cursor-pointer"
          disabled={currentPage === 1}
          onClick={handlePreviousPageData}
        >
          
          Prev
        </button>
        <button
          className="border px-2 rounded cursor-pointer"
          disabled={currentPage === pageLength}
          onClick={handleNextPageData}
        >
          
          Next
        </button>
      </div>
    )
   
}

export default Pagination;