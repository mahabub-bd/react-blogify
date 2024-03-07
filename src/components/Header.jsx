import { Link } from "react-router-dom";
import { LogoImage, SearchIcon } from "../constans/image";
import { useAuth } from "../hooks";
import Logout from "./auth/Logout";

export default function Header() {
  const { auth } = useAuth();

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
              <a
                href="./createBlog.html"
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Write
              </a>
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

            <li className="flex items-center">
              {/* <!-- Circular Div with background color --> */}
              {auth?.user && (
                <div className="avater-img bg-orange-600 text-white">
                  <span className="">{`${auth?.user?.firstName.charAt(
                    0
                  )}`}</span>
                  {/* <!-- User's first name initial --> */}
                </div>
              )}

              {/* <!-- Logged-in user's name --> */}
              {auth?.user && (
                <Link to="/me">
                  <span className="text-white ml-2">{`${auth?.user?.firstName} ${auth?.user?.lastName}`}</span>
                </Link>
              )}

              {/* <!-- Profile Image --> */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
