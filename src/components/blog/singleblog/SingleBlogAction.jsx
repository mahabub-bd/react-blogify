import { CommentIcon, HeartIcon, LikeIcon } from "../../../constans/image";
import { useSingleBlog } from "../../../hooks";

export default function SingleBlogAction() {
  const { state } = useSingleBlog();

  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <li>
          <img src={LikeIcon} alt="like" />
          <span>{state?.blog?.likes?.length}</span>
        </li>

        <li>
          {/* <!-- There is heart-filled.svg in the icons folder --> */}
          <img src={HeartIcon} alt="Favourite" />
        </li>
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
