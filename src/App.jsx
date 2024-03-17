import { Route, Routes } from "react-router-dom";
import {
  AuthorPage,
  CreateBlog,
  EditBlog,
  EditProfile,
  HomePage,
  LoginPage,
  NotFound,
  ProfilePage,
  RegisterPage,
  SearchPage,
  SingleBlogPage,
} from "./page";

import { PrivateRoutes, PublicRoutes } from "./routes";

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
