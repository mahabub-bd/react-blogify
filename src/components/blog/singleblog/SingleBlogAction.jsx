import { toast } from "react-toastify";
import { actions } from "../../../actions";
import {
  CommentIcon,
  HeartFilled,
  HeartIcon,
  LikeIcon,
} from "../../../constants/image";
import { useAuth, useAxios, useSingleBlog } from "../../../hooks";

export default function SingleBlogAction() {
  const { state, dispatch } = useSingleBlog();
  const { api } = useAxios();
  const { auth } = useAuth();

  const handleLikeBlog = async () => {
    if (auth?.authToken) {
      try {
        const response = await api.post(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/${
            state?.blog?.id
          }/like`
        );

        if (response.status === 200) {
          dispatch({
            type: actions.singleblog.LIKE_BLOG_SUCCESS,
            data: response.data,
          });
        }
      } catch (error) {
        dispatch({
          type: actions.singleblog.LIKE_BLOG_ERROR,
          error: error.message,
        });
      }
    } else {
      toast.error(`Need Login for Like`);
    }
  };

  const handleToggleFav = async () => {
    if (auth?.authToken) {
      try {
        const response = await api.patch(
          `http://localhost:3000/blogs/${state?.blog?.id}/favourite`
        );

        if (response.status === 200) {
          dispatch({
            type: actions.singleblog.TOGGLE_FAVORITE,
            data: response.data,
          });
        }
      } catch (error) {
        dispatch({
          type: actions.singleblog.TOGGLE_FAVORITE_ERROR,
          error: error.message,
        });
      }
    } else {
      toast.error(`Need Login for Favorite Change`);
    }
  };

  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <button onClick={handleLikeBlog}>
          <li>
            <img src={LikeIcon} alt="like" />
            <span>{state?.blog?.likes?.length}</span>
          </li>
        </button>

        <button className=" cursor-pointer" onClick={handleToggleFav}>
          <li>
            <img
              src={state?.blog?.isFavourite ? HeartFilled : HeartIcon}
              alt="Favourite"
            />
          </li>
        </button>

        <a id="comments">
          <li>
            <img src={CommentIcon} alt="Comments" />
            <span>{state?.blog?.comments?.length}</span>
          </li>
        </a>
      </ul>
    </div>
  );
}
