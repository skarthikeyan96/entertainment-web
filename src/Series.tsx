import Collection from "./components/Collection";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { useDispatch } from "react-redux";
import { fetchPopularTvSeries } from "./redux/thunks/series/popular";

const Series = () => {
  const popularSeries = useSelector((state: RootState) => state.popularSeries);

  const dispatch = useDispatch<AppDispatch>();

  const handleNextPageData = () => {
    if (popularSeries.currentPage !== popularSeries.totalPages) {
      dispatch(fetchPopularTvSeries(popularSeries.currentPage + 1));
    }
  };

  const handlePreviousPageData = () => {
    if (popularSeries.currentPage !== 1) {
      dispatch(fetchPopularTvSeries(popularSeries.currentPage - 1));
    }
  };

  return (
    <div className="m-0 md:m-8  text-white lg:flex">
      <Navbar>
        <main className="mx-0 flex flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0 lg:ml-32 lg:min-w-[800px] lg:grow container">
          <div className="w-full mt-4 lg:ml-8 container">
            <div className="flex items-end  pb-4 pl-4 md:pl-0">
              <h1 className="text-2xl font-light">Popular</h1>
              <span className="ml-2 rounded-md border-2 py-px px-2 text-[8px] font-medium uppercase tracking-wider text-app-pure-white sm:ml-4 sm:text-[10px]">
                tv series
              </span>
            </div>
            <div className="grid gap-4 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-4 lg:grid-cols-4">
              {popularSeries.isLoading ? (
                "loading ..."
              ) : (
                <Collection items={popularSeries.items} />
              )}
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <button
              className="border px-2 rounded cursor-pointer"
              disabled={popularSeries.currentPage === 1}
              onClick={handlePreviousPageData}
            >
              {" "}
              Prev{" "}
            </button>
            <button
              className="border px-2 rounded cursor-pointer"
              disabled={popularSeries.currentPage === popularSeries.totalPages}
              onClick={handleNextPageData}
            >
              {" "}
              Next{" "}
            </button>
          </div>
        </main>
      </Navbar>
    </div>
  );
};

export default Series;
