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

    case actions.singleblog.NEW_COMMENT_ADD: {
      return {
        ...state,
        loading: true,
        blog: {
          ...state.blog,
          comments: action.data.comments,
        },
      };
    }

    case actions.singleblog.COMMENT_DELETE: {
      const updatedComments = state.blog.comments.filter(
        (comment) => comment.id !== action.commentId
      );

      return {
        ...state,
        blog: {
          ...state.blog,
          comments: updatedComments,
        },
      };
    }

    case actions.blog.DELETE_BLOG_SUCCESS: {
      const updatedBlogs = state.blogs.filter(
        (blog) => blog.id !== action.blogId
      );
      return {
        ...state,
        blogs: updatedBlogs,
      };
    }

    case actions.singleblog.NEW_COMMENT_ADD_ERROR: {
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
