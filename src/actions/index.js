export const actions = {
  blog: {
    DATA_FETCHING: "BLOG_DATA_FETCHING",
    DATA_FETCHED: "BLOG_DATA_FETCHED",
    DATA_FETCHED_ERROR: "BLOG_DATA_FETCHED_ERROR",
    DELETE_BLOG_SUCCESS: "BLOG_DELETE_BLOG_SUCCESS",
    DELETE_BLOG_FAILURE: "BLOG_DELETE_BLOG_FAILURE",
  },
  singleblog: {
    DATA_FETCHING: "SINGLE_BLOG_DATA_FETCHING",
    DATA_FETCHED: "SINGLE_BLOG_DATA_FETCHED",
    DATA_FETCHED_ERROR: "SINGLE_BLOG_DATA_FETCHED_ERROR",
    NEW_COMMENT_ADD: "SINGLE_BLOG_NEW_COMMENT_ADD",
    NEW_COMMENT_ADD_ERROR: "SINGLE_BLOG_NEW_COMMENT_ADD_ERROR",
    COMMENT_DELETE: "SINGLE_BLOG_COMMENT_DELETE",
    COMMENT_DELETE_ERROR: "SINGLE_BLOG_COMMENT_DELETE_ERROR",
    TOGGLE_FAVORITE: "SINGLE_BLOG_TOGGLE_FAVORITE",
    TOGGLE_FAVORITE_ERROR: "SINGLE_BLOG_TOGGLE_FAVORITE_ERROR",
    LIKE_BLOG_SUCCESS: "BLOG_LIKE__SUCCESS",
    LIKE_BLOG_ERROR: "BLOG_LIKE_ERROR",
  },

  profile: {
    DATA_FETCHING: "PROFILE_DATA_FETCHING",
    DATA_FETCHED: "PROFILE_DATA_FETCHED",
    DATA_FETCH_ERROR: "PROFILE_DATA_FETCH_ERROR",
    USER_DATA_EDITED: "PROFILE_USER_DATA_EDITED",
    IMAGE_UPDATED: "PROFILE_IMAGE_UPDATED",
  },

  mostpopular: {
    DATA_FETCHING: "MOST_POPULAR_DATA_FETCHING",
    DATA_FETCHED: "MOST_POPULAR_DATA_FETCHED",
    DATA_FETCH_ERROR: "MOST_POPULAR_DATA_FETCH_ERROR",
  },
  favourite: {
    DATA_FETCHING: "FAVOURITE_BLOG_DATA_FETCHING",
    DATA_FETCHED: "FAVOURITE_BLOG_DATA_FETCHED",
    DATA_FETCH_ERROR: "FAVOURITE_BLOG_DATA_FETCH_ERROR",
  },
};
