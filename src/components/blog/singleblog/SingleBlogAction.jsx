import { actions } from "../../../actions";
import {
  CommentIcon,
  HeartFilled,
  HeartIcon,
  LikeIcon,
} from "../../../constants/image"; // Corrected typo "constans" to "constants"
import { useAxios, useSingleBlog } from "../../../hooks";

export default function SingleBlogAction() {
  const { state, dispatch } = useSingleBlog();
  const { api } = useAxios();

  const handleToggleFav = async () => {
    try {
      const response = await api.patch(
        `http://localhost:3000/blogs/${state?.blog?.id}/favourite`
      );
      console.log(response.data);
      if (response.status === 200) {
        dispatch({
          type: actions.singleblog.TOGGLE_FAVORITE,
          data: response.data,
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: actions.singleblog.TOGGLE_FAVORITE_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <li>
          <img src={LikeIcon} alt="like" />
          <span>{state?.blog?.likes?.length}</span>
        </li>

        <button onClick={handleToggleFav}>
          <li>
            <img
              src={state?.blog?.isFavourite ? HeartFilled : HeartIcon}
              alt="Favourite"
            />
          </li>
        </button>

        <a href="#comments">
          <li>
            <img src={CommentIcon} alt="Comments" />
            <span>{state?.blog?.comments?.length}</span>
          </li>
        </a>
      </ul>
    </div>
  );
}
