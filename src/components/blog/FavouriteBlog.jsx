import { useEffect, useReducer } from "react";
import { actions } from "../../actions";

import { Link, useNavigate } from "react-router-dom";
import { useAuth, useAxios, useProfile, useSingleBlog } from "../../hooks";
import { favoriteReducer, initialState } from "../../reducers/FavouriteReducer";

export default function FavouriteBlog() {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);
  const { setAuthor } = useProfile();

  const { setBlogId } = useSingleBlog();
  const navigate = useNavigate();
  const { api } = useAxios();
  console.log(state);
  const { auth } = useAuth();

  useEffect(() => {
    dispatch({ type: actions.favourite.DATA_FETCHING });
    const fetchData = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/favourites`
        );

        dispatch({
          type: actions.favourite.DATA_FETCHED,
          data: response.data,
        });
      } catch (error) {
        console.error("Error fetching blogs:", error);

        dispatch({
          type: actions.favourite.DATA_FETCHED_ERROR,
          error: error.message,
        });
      }
    };
    if (auth?.authToken) {
      fetchData();
    }
  }, [api, auth?.authToken]);

  if (state?.loading) {
    return (
      <div className="min-h-[740px] flex justify-center items-center">
        Fetching Favourite Data ...
      </div>
    );
  }

  const handleSingleBlogDetails = (blogId) => {
    navigate("/singleblog");
    setBlogId(blogId);
  };

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Your Favourites ❤️
      </h3>

      <ul className="space-y-5 my-5">
        {state?.blogs?.map((blog) => (
          <li key={blog.id} onClick={() => handleSingleBlogDetails(blog.id)}>
            <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
              {blog?.title}
            </h3>
            <p className="text-slate-600 text-sm ">
              Write by
              <Link
                className="mx-1"
                to="/author"
                onClick={(e) => {
                  e.stopPropagation();
                  setAuthor(blog?.author?.id);
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
