import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { actions } from "../actions";
import { SingleBlogAction, SingleBlogDetails } from "../components";
import { useSingleBlog } from "../hooks";

export default function SingleBlogPage() {
  const { dispatch } = useSingleBlog();

  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: actions.singleblog.DATA_FETCHING });
    const fetchData = async () => {
      dispatch({ type: actions.singleblog.DATA_FETCHING });
      try {
        const response = await axios?.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/${id}`
        );

        dispatch({
          type: actions.singleblog.DATA_FETCHED,
          data: response.data,
        });
      } catch (error) {
        dispatch({
          type: actions.singleblog.DATA_FETCHED_ERROR,
          error: error.message,
        });
      }
    };

    fetchData();
  }, [dispatch, id]);
  return (
    <>
      <SingleBlogDetails />
      <SingleBlogAction />
    </>
  );
}
