export default function SingleBlogAction() {
  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <li>
          <img src="./assets/icons/like.svg" alt="like" />
          <span>10</span>
        </li>

        <li>
          {/* <!-- There is heart-filled.svg in the icons folder --> */}
          <img src="./assets/icons/heart.svg" alt="Favourite" />
        </li>
        <a href="#comments">
          <li>
            <img src="./assets/icons/comment.svg" alt="Comments" />
            <span>3</span>
          </li>
        </a>
      </ul>
    </div>
  );
}
