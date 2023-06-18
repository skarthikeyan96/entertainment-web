import { useEffect, useState } from "react";

const Bookmark = (props: any) => {
  const { data } = props;

  const [isItemBookMarked, setItemBookmarked] = useState(false);

  const localStorageItems = JSON.parse(localStorage.getItem('items') || '[]')
  const isPresentInLocalStorage = localStorageItems.find((item: {id: string}) => item.id === data.id)

  
  useEffect(() => {
      if (isItemBookMarked) {
        localStorageItems.push(data);
        localStorage.setItem('items', JSON.stringify(localStorageItems))
      }else{
        const newData = localStorageItems.filter((item: {id: string}) => item.id !== data.id);
        localStorage.setItem('items', JSON.stringify(newData))

      }
      

  }, [isItemBookMarked]);

  return (
    <button onClick={() => setItemBookmarked((prevState) => !prevState)}>
      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          stroke="#FFF"
          stroke-width="1.5"
          fill={isItemBookMarked || isPresentInLocalStorage? "white" : "none"}
        ></path>
      </svg>
    </button>
  );
};

export default Bookmark;
