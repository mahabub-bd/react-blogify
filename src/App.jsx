import { Route, Routes } from "react-router-dom";
import AuthorPage from "./page/AuthorPage";
import CreateBlog from "./page/CreateBlog";
import EditBlog from "./page/EditBlog";
import EditProfile from "./page/EditProfile";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import NotFound from "./page/NotFound";
import ProfilePage from "./page/ProfilePage";
import RegisterPage from "./page/Register";
import SearchPage from "./page/SearchPage";
import SingleBlogPage from "./page/SingleBlogPage";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/Routes";

function App() {
  return (
    <div className="bg-[#030317] text-white">
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route element={<HomePage />} path="/" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<AuthorPage />} path="/author" />
          <Route element={<SingleBlogPage />} path="/singleblog" />
          <Route element={<SearchPage />} path="/search" />
          <Route element={<NotFound />} path="*" />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route element={<CreateBlog />} path="/createblog" />
          <Route element={<ProfilePage />} path="/me" />
          <Route element={<EditProfile />} path="editprofile" />
          <Route element={<EditBlog />} path="/editblog" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
