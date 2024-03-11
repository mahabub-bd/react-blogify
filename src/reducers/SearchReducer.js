import { actions } from "../actions";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.search.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }

    case actions.search.DATA_FETCHED:
      return {
        ...state,
        loading: false,
        blogs: action.data.data,
      };

    case actions.search.DATA_FETCHED_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    default: {
      return state;
    }
  }
};

export { initialState, searchReducer };
