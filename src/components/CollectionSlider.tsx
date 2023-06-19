import { Link } from "react-router-dom";
import { MovieSvg, TvSvg } from "../constants";
import Bookmark from "./Bookmark";

const CollectionSlider = (props: any) => {
  const { data } = props;
  return (
    <>
      {data.map((data: any, idx: number) => {
        return (
          <Link to={`/${data.media_type}/${data.id}`}>
          <div key={idx} className="relative w-full cursor-pointer">
            <div className="relative w-full rounded-lg">
              <div className="relative h-[140px] w-[240px] sm:h-[230px] sm:w-[470px] opacity-50 ">
                <img
                  className="object-cover"
                  src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                />
              </div>
              <div className="absolute top-2.5 right-3.5">
              <Bookmark data={data}/>
              </div>
            
              <div className="absolute left-5 bottom-5 ">
                <div className="flex gap-x-4 items-center">
                  <p>
                    {new Date(
                      data.release_date || data.first_air_date
                    ).getFullYear()}
                  </p>
                  {data.media_type ? <MovieSvg /> : <TvSvg />}
                  <p className="capitalize">{data.media_type}</p>
                </div>
                <h2 className="md:heading-sm  w-[200px] truncate  font-medium capitalize text-white sm:w-[420px] md:h-6">
                  {data.title || data.name}
                </h2>
              </div>
            </div>
          </div>
          </Link>
        );
      })}
    </>
  );
};

export default CollectionSlider;
