export const MovieSvg = () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.75"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.1733 0H1.82667C0.817827 0 0 0.817827 0 1.82667V10.1733C0 11.1822 0.817827 12 1.82667 12H10.1733C10.6578 12 11.1224 11.8075 11.465 11.465C11.8075 11.1224 12 10.6578 12 10.1733V1.82667C12 1.3422 11.8075 0.877585 11.465 0.535018C11.1224 0.192452 10.6578 0 10.1733 0ZM2.4 5.4H1.2V4.2H2.4V5.4ZM2.4 6.6H1.2V7.8H2.4V6.6ZM10.8 5.4H9.6V4.2H10.8V5.4ZM10.8 6.6H9.6V7.8H10.8V6.6ZM10.8 1.644V2.4H9.6V1.2H10.356C10.4738 1.2 10.5867 1.24678 10.67 1.33004C10.7532 1.41331 10.8 1.52624 10.8 1.644ZM2.4 1.2H1.644C1.52624 1.2 1.41331 1.24678 1.33004 1.33004C1.24678 1.41331 1.2 1.52624 1.2 1.644V2.4H2.4V1.2ZM1.2 10.356V9.6H2.4V10.8H1.644C1.52624 10.8 1.41331 10.7532 1.33004 10.67C1.24678 10.5867 1.2 10.4738 1.2 10.356ZM10.356 10.8C10.6012 10.8 10.8 10.6012 10.8 10.356V9.6H9.6V10.8H10.356Z"
        fill="white"
      />
    </svg>
  );

  export const TvSvg = () => (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.75"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.54 2.24054H10V10H0V2.24054H2.46L1.11 0.601358L1.89 0.014549L3.5 1.95441L5.11 0L5.89 0.601358L4.54 2.24054ZM1 3.21048V9.03007H6V3.21048H1ZM8.5 7.0902H7.5V6.12027H8.5V7.0902ZM7.5 5.15034H8.5V4.18041H7.5V5.15034Z"
        fill="white"
      />
    </svg>
  );


  export const trendingUrl =
  "https://api.themoviedb.org/3/trending/all/day?language=en-US";

  export const nowPlayingUrl =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US";

  export const airingTodayUrl = "https://api.themoviedb.org/3/tv/airing_today?language=en-US";

  export const trendingTvShows = 'https://api.themoviedb.org/3/trending/tv/popular?language=en-US&page=1';

  export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
  },
};
