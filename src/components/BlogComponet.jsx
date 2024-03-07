import axios from "axios";
import { useEffect, useReducer } from "react";
import { actions } from "../actions";

const initialState = {
  loading: false,
  blogs: [],
};

// Define your reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case actions.blog.DATA_FETCHED:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
      };
    default:
      return state;
  }
};

const BlogComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blogs?page=");
        dispatch({
          type: actions.blog.DATA_FETCHED,
          payload: response.data.blogs,
        });
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);
  console.log(state, "Test");
  return <div>Blog Componets</div>;
};

export { BlogComponent };
