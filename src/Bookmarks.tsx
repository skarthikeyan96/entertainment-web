import Navbar from "./components/Navbar";
import Collection from "./components/Collection";
//@ts-ignore
import localforage from "localforage/src/localforage.js";
import { useEffect, useState } from "react";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      const data = await localforage.getItem("movies");
      setBookmarks(data);
    };

    fetchBookmarks();
  }, []);

  return (
    <div className="m-0 md:m-8  text-white lg:flex">
      <Navbar>
        <main className="mx-0 flex flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0 lg:ml-32 lg:min-w-[800px] lg:grow container">
          <div className="w-full mt-4 lg:ml-8 container">
            <div className="flex items-end  pb-4 pl-4 md:pl-0">
              <h1 className="text-2xl font-light">Bookmarked</h1>
              <span className="ml-2 rounded-md border-2 py-px px-2 text-[8px] font-medium uppercase tracking-wider text-app-pure-white sm:ml-4 sm:text-[10px]">
                Movies
              </span>
            </div>
            <div className="grid gap-4 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-4 lg:grid-cols-4">
              <Collection items={bookmarks || []} />
            </div>
          </div>
        </main>
      </Navbar>
    </div>
  );
};

export default Bookmarks;
