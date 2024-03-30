import { useNavigate } from "react-router-dom";
import { EditIcon, ViewIcon } from "../../constants/image";
import { useAuth, useProfile } from "../../hooks";
import Logout from "../auth/Logout";

const ProfileAction = () => {
  const navigate = useNavigate();
  const { setShowProfileModal } = useProfile();
  const { auth } = useAuth();

  return (
    <div className="absolute right-0 top-[60px]">
      <div className="action-modal-container">
        <button
          onClick={() => {
            setShowProfileModal(false);
            navigate(`/me/${auth?.user?.id}`);
          }}
          className="action-menu-item "
        >
          <img className="w-5" src={ViewIcon} alt="Edit" />
          View Profile
        </button>
        <button
          onClick={() => {
            setShowProfileModal(false);
            navigate("editprofile");
          }}
          className="action-menu-item "
        >
          <img src={EditIcon} alt="Delete" />
          Edit Profile
        </button>
        <Logout />
      </div>
    </div>
  );
};

export default ProfileAction;
