import { useNavigate } from "react-router-dom";
import { LogoutIcon } from "../../constants/image";
import { useAuth, useProfile } from "../../hooks";

export default function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const { setShowProfileModal } = useProfile();
  const logoutClick = () => {
    setShowProfileModal(false);
    navigate("/login");
    setAuth({});
  };
  return (
    <div>
      <button onClick={logoutClick} className="action-menu-item">
        <img src={LogoutIcon} alt="3dots of Action" />
        Logout
      </button>
    </div>
  );
}
