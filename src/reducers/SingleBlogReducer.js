import { actions } from "../actions";

const initialState = {
  blog: [],
  loading: false,
  error: null,
};

const singleBlogReducer = (state, action) => {
  switch (action.type) {
    case actions.singleblog.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }

    case actions.singleblog.DATA_FETCHED:
      return {
        ...state,
        loading: false,
        blog: action.data,
      };

    case actions.singleblog.DATA_FETCHED_ERROR: {
      return {
        ...state,
        loading: true,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};

export { initialState, singleBlogReducer };
