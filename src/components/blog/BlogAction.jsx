import { useState } from "react";
import { DeleteIcon, EditIcon, ThreeDotIcon } from "../../constants/image";

const BlogAction = ({ onDelete, onedit, blog }) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="absolute right-0 top-0">
      <button
        onClick={(e) => {
          e.stopPropagation(); // Stop propagation here
          setShowEdit((prev) => !prev);
        }}
      >
        <img src={ThreeDotIcon} alt="3dots of Action" />
      </button>

      {/* <!-- Action Menus Popup --> */}

      {showEdit && (
        <div className="action-modal-container">
          <button
            onClick={(e) => {
              onedit(blog?.id, blog);
              e.stopPropagation();
            }}
            className="action-menu-item hover:text-lwsGreen"
          >
            <img src={EditIcon} alt="Edit" />
            Edit
          </button>
          <button
            onClick={(e) => {
              onDelete(blog?.id);
              e.stopPropagation();
            }}
            className="action-menu-item hover:text-red-500 on "
          >
            <img src={DeleteIcon} alt="Delete" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogAction;
