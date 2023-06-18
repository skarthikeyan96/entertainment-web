const Bookmark = (props: any) => {
  const { data } = props;
  const bookMarks: any[] = [];
  const bookmarkedItems: any = JSON.parse(
    localStorage.getItem("items") || "[]"
  );

  const isItemBookmarked = bookmarkedItems.find((item: any) => item.title === data.title)

  const handleAddBookMark = (data: any) => {
    
    if (bookmarkedItems.length === 0) {
      bookMarks.push(data);
      localStorage.setItem("items", JSON.stringify(bookMarks));
    } else {
      bookmarkedItems.push(data);
      localStorage.setItem("items", JSON.stringify(bookmarkedItems));
    }
  };

  return (
    <button onClick={() => handleAddBookMark(data)}>
      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          stroke="#FFF"
          stroke-width="1.5"
          fill={isItemBookmarked ? "white" : "none"}
        ></path>
      </svg>
    </button>
  );
};

export default Bookmark;
