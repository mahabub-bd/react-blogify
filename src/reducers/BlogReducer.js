import { actions } from "../actions";

const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.blog.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }

    case actions.blog.DATA_FETCHED: {
      return {
        ...state,
        loading: false,
        blogs: action.data.blogs,
      };
    }

    case actions.blog.DATA_FETCHED_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case actions.blog.DATA_CREATED: {
      return {
        ...state,
        loading: false,
        blogs: [...state.blogs, action.data.blogs],
      };
    }

    case actions.blog.DATA_EDITED: {
      return {
        ...state,
        loading: false,
        blogs: [...state.blogs, action.data.blogs],
      };
    }
    case actions.blog.DELETE_SUCCESS: {
      const updatedBlogs = state.blogs.filter(
        (blog) => blog?.id !== action?.blogId
      );
      return {
        ...state,
        blogs: updatedBlogs,
      };
    }

    case actions.blog.DELETE_FAILURE: {
      return {
        ...state,
        error: action.error,
      };
    }

    default: {
      return state;
    }
  }
};

export { blogReducer, initialState };
