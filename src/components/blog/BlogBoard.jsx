import axios from "axios";
import { useEffect } from "react";
import { actions } from "../../actions";
import { useBlog } from "../../hooks";
import PopularBlog from "../PopularBlog";
import BlogList from "./BlogList";
import FavouriteBlog from "./FavouriteBlog";

const BlogBoard = () => {
  const { state, dispatch } = useBlog();

  useEffect(() => {
    dispatch({ type: actions.blog.DATA_FETCHING });
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_SERVER_BASE_URL
          }/blogs?limit=10&offset=0?page=1`
        );

        dispatch({
          type: actions.blog.DATA_FETCHED,
          data: response.data,
        });
      } catch (error) {
        console.error("Error fetching blogs:", error);

        dispatch({
          type: actions.blog.DATA_FETCHED_ERROR,
          error: error.message,
        });
      }
    };

    fetchData();
  }, [dispatch]);

  if (state.loading) {
    return (
      <div className="min-h-[740px] flex justify-center items-center">
        Fetching Loading Blog Data ...
      </div>
    );
  }
  return (
    <main>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {/* <!-- Blog Contents --> */}
            <BlogList blogs={state?.blogs} />

            <div className="md:col-span-2 h-full w-full space-y-5">
              <PopularBlog />
              <FavouriteBlog />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogBoard;
