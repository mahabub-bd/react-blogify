import { Route, Routes } from "react-router-dom";
import AuthorPage from "./page/AuthorPage";
import CreateBlog from "./page/CreateBlog";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import ProfilePage from "./page/ProfilePage";
import RegisterPage from "./page/Register";
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
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route element={<CreateBlog />} path="/createblog" />
          <Route element={<ProfilePage />} path="/me" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
