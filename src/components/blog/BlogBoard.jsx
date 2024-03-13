import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { actions } from "../../actions";
import { FavouriteBlog, PopularBlog } from "../../components";
import { useBlog } from "../../hooks";
import BlogList from "./BlogList";

const BlogBoard = () => {
  const { state, dispatch } = useBlog();
  const [showBlog, setShowBlog] = useState(4);
  const loaderRef = useRef(null);
  console.log(loaderRef);

  useEffect(() => {
    dispatch({ type: actions.blog.DATA_FETCHING });
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_SERVER_BASE_URL
          }/blogs?limit=${showBlog}&page=1`
        );

        dispatch({
          type: actions.blog.DATA_FETCHED,
          data: response.data,
        });
      } catch (error) {
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
          <div ref={loaderRef} className="text-center mt-5">
            Load More Blog....
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogBoard;
