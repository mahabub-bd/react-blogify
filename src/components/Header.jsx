import { LogoImage, SearchIcon } from "../constans/image";

export default function Header() {
  return (
    <header>
      <nav className="container">
        {/* <!-- Logo --> */}
        <div>
          <a href="./index.html">
            <img className="w-32" src={LogoImage} alt="lws" />
          </a>
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
            <li>
              <a
                href="./search.html"
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src={SearchIcon} alt="Search" />
                <span>Search</span>
              </a>
            </li>
            <li>
              <a
                href="./login.html"
                className="text-white/50 hover:text-white transition-all duration-200"
              >
                Login
              </a>
            </li>
            <li className="flex items-center">
              {/* <!-- Circular Div with background color --> */}
              <div className="avater-img bg-orange-600 text-white">
                <span className="">S</span>
                {/* <!-- User's first name initial --> */}
              </div>

              {/* <!-- Logged-in user's name --> */}
              <a href="./profile.html">
                <span className="text-white ml-2">Saad Hasan</span>
              </a>
              {/* <!-- Profile Image --> */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
