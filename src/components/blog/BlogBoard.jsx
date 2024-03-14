import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { actions } from "../../actions";
import { FavouriteBlog, PopularBlog } from "../../components";
import { useBlog } from "../../hooks";
import BlogList from "./BlogList";

const BlogBoard = () => {
  const { state, dispatch } = useBlog();
  const [showBlog, setShowBlog] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: actions.blog.DATA_FETCHING });
        const response = await axios.get(
          `${
            import.meta.env.VITE_SERVER_BASE_URL
          }/blogs?limit=${showBlog}&page=1`
        );

        if (response?.data?.blogs?.length < showBlog) {
          setHasMore(false);
        } else {
          setShowBlog((prev) => prev + 10);
        }

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

    const onIntersection = (items) => {
      const loaderItem = items[0];
      if (loaderItem.isIntersecting && hasMore) {
        fetchData();
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [showBlog, hasMore, dispatch]);

  if (state?.loading) {
    return (
      <div className="min-h-[740px] flex justify-center items-center">
        Fetching Loading Blog Data ...
      </div>
    );
  }

  if (state?.error) {
    return (
      <div className="text-center">
        Error in fetching Blogs{state?.error?.message}
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
          {hasMore ? (
            <div ref={loaderRef} className="text-center mt-5">
              Load More Blog....
            </div>
          ) : (
            <div className="border rounded-lg border-gray-700 hover:border-blue-500 opacity-70 bg-opacity-20 p-4 text-center mt-5">
              All blogs are gone, there are no more blogs on the server
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default BlogBoard;
