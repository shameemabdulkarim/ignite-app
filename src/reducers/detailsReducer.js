const initialState = {
  game: { platforms: [] },
  screenshot: { results: [] },
  isLoading: true,
};

const detailRedcuer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screenshot: action.payload.screenshot,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailRedcuer;
