import axios from "axios";
import { useEffect, useReducer } from "react";
import { actions } from "../../actions";

import { Link, useNavigate } from "react-router-dom";
import {
  initialState,
  mostpopularReducer,
} from "../../reducers/MostpopularReducer";

export default function PopularBlog() {
  const [state, dispatch] = useReducer(mostpopularReducer, initialState);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: actions.mostpopular.DATA_FETCHING });
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/popular`
        );

        dispatch({
          type: actions.mostpopular.DATA_FETCHED,
          data: response.data,
        });
      } catch (error) {
        console.error("Error fetching blogs:", error);

        dispatch({
          type: actions.mostpopular.DATA_FETCHED_ERROR,
          error: error.message,
        });
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect only runs once on component mount

  if (state.loading) {
    return (
      <div className="min-h-[740px] flex justify-center items-center">
        Fetching Populat Blog Data ...
      </div>
    );
  }

  const handleSingleBlogDetails = (blogId) => {
    navigate(`/blogs/${blogId}`);
  };

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Most Popular 👍️
      </h3>

      <ul className="space-y-5 my-5">
        {state?.blogs?.map((blog) => (
          <li
            className="sidebar-card"
            key={blog.id}
            onClick={() => handleSingleBlogDetails(blog.id)}
          >
            <h3 className="text-slate-300 font-medium hover:text-slate-300 transition-all cursor-pointer">
              {blog?.title}
            </h3>
            <p className="text-slate-400 text-sm ">
              Write by
              <Link
                className="mx-1"
                to={`/author/${blog?.author?.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {`${blog?.author?.firstName} ${blog?.author?.lastName}`}{" "}
              </Link>
              <span className="mx-1">·</span> {blog?.likes?.length} Likes
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
