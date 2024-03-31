import { useEffect, useReducer } from "react";
import { actions } from "../../actions";

import { useNavigate } from "react-router-dom";
import { useAuth, useAxios } from "../../hooks";
import { favoriteReducer, initialState } from "../../reducers/FavouriteReducer";

export default function FavouriteBlog() {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  const navigate = useNavigate();
  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    dispatch({ type: actions.favourite.DATA_FETCHING });
    const fetchData = async () => {
      if (auth?.authToken) {
        try {
          const response = await api.get(
            `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/favourites`
          );

          dispatch({
            type: actions.favourite.DATA_FETCHED,
            data: response.data,
          });
        } catch (error) {
          dispatch({
            type: actions.favourite.DATA_FETCHED_ERROR,
            error: error.message,
          });
        }
      }
    };
    fetchData();
  }, [api, auth?.authToken]);

  const handleSingleBlogDetails = (blogId) => {
    navigate(`/blogs/${blogId}`);
  };

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Your Favourites ❤️
      </h3>

      {state?.loading && (
        <p className="mt-5 text-center text-slate-400 font-medium hover:text-slate-300 transition-all">
          Need Login see Favourite Blog{" "}
        </p>
      )}
      <ul className="space-y-5 my-5">
        {state?.blogs?.map((blog) => (
          <li
            className="sidebar-card"
            key={blog.id}
            onClick={() => handleSingleBlogDetails(blog.id)}
          >
            <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
              {blog?.title}
            </h3>
            <p className="text-slate-600 text-sm">
              {blog.tags?.split(", ").map((tag) => (
                <span key={tag}> # {tag}</span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
