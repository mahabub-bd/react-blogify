import { actions } from "../actions";

const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case actions.favourite.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }

    case actions.favourite.DATA_FETCHED:
      return {
        ...state,
        loading: false,
        blogs: action.data.blogs,
      };

    case actions.favourite.DATA_FETCHED_ERROR: {
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

export { favoriteReducer, initialState };
