import { Link, useNavigate } from "react-router-dom";
import { LogoImage, SearchIcon } from "../constants/image";
import { useAuth, useProfile } from "../hooks";
import Logout from "./auth/Logout";

export default function Header() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { setAuthor } = useProfile();

  return (
    <header>
      <nav className="container">
        {/* <!-- Logo --> */}
        <div>
          <Link to="/">
            <img className="w-32" src={LogoImage} alt="lws" />
          </Link>
        </div>

        {/* <!-- Actions - Login, Write, Home, Search -->
                <!-- Notes for Developers -->
                <!-- For Logged in User - Write, Profile, Logout Menu -->
                <!-- For Not Logged in User - Login Menu --> */}
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
                <a
                  href="./search.html"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img src={SearchIcon} alt="Search" />
                  <span>Search</span>
                </a>
              </li>
            )}
            {auth?.user ? (
              <Logout />
            ) : (
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
              className="flex items-center cursor-pointer "
              onClick={() => {
                navigate("/me");
                setAuthor(auth?.user?.id);
              }}
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

              {/* <!-- Profile Image --> */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
