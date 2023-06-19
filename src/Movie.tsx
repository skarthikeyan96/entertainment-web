import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { options } from "./constants";
import axios from "axios";

const Movie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState<any>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
      const response: any = await axios.get(url, options);

      if (response.status === 200) {
        setMovie(response.data);
        return;
      }

      setError(response.error);
    };
    fetchMovie();
  }, []);

  if(error){
    console.error(error)
    return;
  }
  
  return (
    <div className="m-0 md:m-8  text-white lg:flex">
      <Navbar>
        <main className="mx-0 flex flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0 lg:ml-32 lg:min-w-[800px] lg:grow container">
          {movie && (
            <section className="flex flex-col sm:mx-8 md:mx-0 md:flex-row md:items-start lg:justify-center">
              <section className="px-20 text-center md:pr-8 md:pl-0 lg:w-2/5">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              </section>
              <section className="md:w-3/5 text-white">
                <h1 className="text-2xl font-bold"> {movie.title} </h1>
                <p className="font-light italic text-slate-400">
                  {movie.tagline}
                </p>
                <p className="font-light leading-relaxed pt-4">
                  {movie.overview}
                </p>

                <section className="pt-4">
                <h2 className="text-xl capitalize pb-2"> genres </h2>
                <div className="flex gap-x-4">
                  {movie.genres.map((genre: { name: string }) => {
                    return (
                      <button className="border px-2 rounded cursor-pointer bg-white text-black">
                        {genre.name}
                      </button>
                    );
                  })}
                </div>
                </section>

              </section>
            </section>
          )}
        </main>
      </Navbar>
    </div>
  );
};

export default Movie;
