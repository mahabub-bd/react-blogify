import { actions } from "../actions";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case actions.search.DATA_FETCHING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.search.DATA_FETCHED:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case actions.search.DATA_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export { initialState, searchReducer };
