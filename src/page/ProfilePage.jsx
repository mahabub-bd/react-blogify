import { useEffect } from "react";
import { actions } from "../actions";
import MyBlog from "../components/profile/MyBlog";
import ProfileInfo from "../components/profile/ProfileInfo";
import { useAuth, useAxios, useProfile } from "../hooks";

export default function ProfilePage() {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const { auth } = useAuth();

  console.log(state?.blogs);

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        console.log(response.data);
        dispatch({ type: actions.profile.DATA_FETCHED, data: response.data });
      } catch (error) {
        dispatch({ type: actions.profile.DATA_FETCH_ERROR, error: error });
      }
    };
    fetchProfile();
  }, [api, auth?.user?.id, dispatch]);

  if (state.loading) {
    return <div>Fetching Your Profile Data ...</div>;
  }
  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container">
        <ProfileInfo />
        <MyBlog blogs={state?.blogs} />
      </div>
    </main>
  );
}
