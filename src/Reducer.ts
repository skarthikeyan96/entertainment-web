
export const initalState: any = {
    trendingData: [],
    nowPlaying: [],
    airingToday: [],
    discover: null,
    loading: false,
    error: null,
    trendingTV: []
  };
  
  export const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "CALL_API":
        return {
          ...state,
          loading: true,
        };
      case "SUCCESS_TRENDING_DATA":
        return {
          ...state,
          loading: false,
          trendingData: [...state.trendingData, ...action.trendingData],
        };
  
      case "SUCCESS_NOW_PLAYING_DATA":
        return {
          ...state,
          loading: false,
          nowPlaying: [...state.nowPlaying, ...action.nowPlaying],
        };
  
      case "SUCCESS_AIRING_TODAY_DATA":
        return {
          ...state,
          loading: false,
          airingToday: [...state.airingToday, ...action.airingToday],
        };


      case "SUCCESS_TRENDING_TV_SHOWS":
        return {
          ...state,
          loading: false,
          trendingTV: [...state.trendingTV, ...action.trendingTV],

        }
       
      case "ERROR":
        return {
          ...state,
          loading: false,
          error: action.error,
        };
  
      case "RESET_STATE":
        return {
          ...state,
          ...initalState,
        };
    }
  };