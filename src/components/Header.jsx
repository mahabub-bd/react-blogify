import { Link } from "react-router-dom";
import { ProfileAction } from "../components";
import { LogoImage, SearchIcon } from "../constants/image";
import { useAuth, useProfile } from "../hooks";

export default function Header() {
  const { auth } = useAuth();
  const { showProfileModal, setShowProfileModal } = useProfile();

  return (
    <header>
      <nav className="container">
        {/* <!-- Logo --> */}
        <div>
          <Link to="/">
            <img className="w-32" src={LogoImage} alt="lws" />
          </Link>
        </div>

        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                to="/createblog"
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Write
              </Link>
            </li>
            {auth?.user && (
              <li>
                <Link
                  to="/search"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img src={SearchIcon} alt="Search" />
                  <span>Search</span>
                </Link>
              </li>
            )}

            {!auth?.authToken && (
              <li>
                <Link
                  to="/login"
                  className="text-white/50 hover:text-white transition-all duration-200"
                >
                  Login
                </Link>
              </li>
            )}

            <li
              className="flex cursor-pointer items-center"
              onClick={() => setShowProfileModal((prev) => !prev)}
            >
              {/* <!-- Circular Div with background color --> */}
              {auth?.user && auth.user.avatar ? (
                <img
                  className="w-10 rounded-full"
                  src={`${
                    import.meta.env.VITE_SERVER_BASE_URL
                  }/uploads/avatar/${auth.user.avatar}`}
                  alt="avatar"
                />
              ) : (
                auth.user && (
                  <div className="avater-img bg-orange-600 text-white">
                    <span className="">{`${auth.user.firstName.charAt(
                      0
                    )}`}</span>
                    {/* <!-- User's first name initial --> */}
                  </div>
                )
              )}

              {/* <!-- Logged-in user's name --> */}
              {auth?.user && (
                <p>
                  <span className="text-white ml-2">{`${auth?.user?.firstName} ${auth?.user?.lastName}`}</span>
                </p>
              )}
            </li>
          </ul>
          {showProfileModal && <ProfileAction />}
        </div>
      </nav>
    </header>
  );
}
