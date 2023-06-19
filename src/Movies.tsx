import { useEffect } from "react"
import Navbar from "./components/Navbar"
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "./redux/store";
import { fetchPopularMovies } from "./redux/thunks/movies/popular";
import Collection from "./components/Collection";
import Pagination from "./components/Pagination";

const Movies = () => {

    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchPopularMovies(1))
    },[dispatch])

    const popularMovies = useSelector((state: RootState) => state.popularMovies);

    const handleNextPageData = () => {
        if (popularMovies.currentPage !== popularMovies.totalPages) {
          dispatch(fetchPopularMovies(popularMovies.currentPage + 1));
        }
      };
    
      const handlePreviousPageData = () => {
        if (popularMovies.currentPage !== 1) {
          dispatch(fetchPopularMovies(popularMovies.currentPage - 1));
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
                 Movies
                </span>
              </div>
              <div className="grid gap-4 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-4 lg:grid-cols-4">
                {popularMovies.isLoading ? (
                  "loading ..."
                ) : (
                  <Collection media_type="movie" items={popularMovies.items} />
                )}
              </div>
              <Pagination
                currentPage={popularMovies.currentPage}
                pageLength={popularMovies.totalPages}
                handleNextPageData={handleNextPageData}
                handlePreviousPageData={handlePreviousPageData}
              />
            </div>
          </main>
        </Navbar>
      </div>
    )
}

export default Movies