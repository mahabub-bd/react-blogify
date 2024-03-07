import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";

export default function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const logoutClick = () => {
    navigate("/");
    setAuth({});
  };
  return (
    <li>
      <button
        onClick={logoutClick}
        className="text-white/50 hover:text-white transition-all duration-200"
      >
        Logout
      </button>
    </li>
  );
}
