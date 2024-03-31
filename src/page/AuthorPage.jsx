import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { actions } from "../actions";
import MyBlog from "../components/profile/MyBlog";
import ProfileInfo from "../components/profile/ProfileInfo";
import { useAxios, useProfile } from "../hooks";

export default function AuthorPage() {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${id}`
        );

        dispatch({ type: actions.profile.DATA_FETCHED, data: response.data });
      } catch (error) {
        dispatch({ type: actions.profile.DATA_FETCH_ERROR, error: error });
      }
    };
    fetchProfile();
  }, [api, dispatch, id]);

  if (state.loading) {
    return (
      <div className="text-center container">
        Fetching Your Author Profile Data ...
      </div>
    );
  }
  return (
    <div className="container">
      <ProfileInfo />
      <MyBlog blogs={state?.user?.blogs} title="User Blogs ...." />
    </div>
  );
}
