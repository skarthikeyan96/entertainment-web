//@ts-ignore
import localforage from "localforage/src/localforage.js"
import { useEffect, useState } from "react";


const Bookmark = (props: any) => {
  const { data } = props;

  const [bookmarkStatus, setBookMarkedStatus] = useState(false);

  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      const data = await localforage.getItem("movies");
      if(!data){
        setBookmarks([])
      }else{
        setBookmarks(data);

      }
    };

    fetchBookmarks();
  }, []);

  const isItemsPresent = bookmarks.find((item:any) => item.id === data.id) ? true : false

  const handleBookmark = async () => {
    console.log("store the data in localstorage")

    const localStorageItems = await localforage.getItem("movies");

    if(!localStorageItems){
      localforage.setItem("movies", [data])
      setBookMarkedStatus(true)
    }else{
      const existingData:any = localStorageItems;
      const filteredData:any = existingData.filter((item: { id: any }) => data.id === item.id);
      console.log("movie exists" ,filteredData)
      if(filteredData.length === 0){
        // movie does not exists in the indexDB 
        localforage.setItem("movies", ([...existingData, data]))
        setBookMarkedStatus(!bookmarkStatus)
      }
    }
  }
  
  return (
    <button  onClick={handleBookmark}>
      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          stroke="#FFF"
          stroke-width="1.5"
          fill={bookmarkStatus || isItemsPresent? "white" : "none"}
        ></path>
      </svg>
    </button>
  );
};

export default Bookmark;
