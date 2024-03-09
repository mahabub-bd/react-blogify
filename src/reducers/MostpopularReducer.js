import { actions } from "../actions";

const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

const mostpopularReducer = (state, action) => {
  switch (action.type) {
    case actions.blog.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }

    case actions.blog.DATA_FETCHED:
      return {
        ...state,
        loading: false,
        blogs: action.data.blogs,
      };

    case actions.blog.DATA_FETCHED_ERROR: {
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

export { initialState, mostpopularReducer };
