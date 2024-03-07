import axios from "axios";
import { useEffect } from "react";
import { actions } from "../actions";
import { SingleBlogAction, SingleBlogDetails } from "../components";
import { useSingleBlog } from "../hooks";

export default function SingleBlogPage() {
  const { dispatch } = useSingleBlog();
  const { blogId } = useSingleBlog();

  useEffect(() => {
    dispatch({ type: actions.singleblog.DATA_FETCHING });
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/${blogId}`
        );

        dispatch({
          type: actions.singleblog.DATA_FETCHED,
          data: response.data,
        });
      } catch (error) {
        console.error("Error fetching blogs:", error);

        dispatch({
          type: actions.singleblog.DATA_FETCHED_ERROR,
          error: error.message,
        });
      }
    };

    fetchData();
  }, [blogId, dispatch]);
  return (
    <>
      <SingleBlogDetails />
      <SingleBlogAction />
    </>
  );
}
