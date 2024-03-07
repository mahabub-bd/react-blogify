import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import ProfilePage from "./page/ProfilePage";
import RegisterPage from "./page/Register";
import SingleBlogPage from "./page/SingleBlogPage";
import PublicRoutes from "./routes/Routes";

function App() {
  return (
    <div className="bg-[#030317] text-white">
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route element={<HomePage />} path="/" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<ProfilePage />} path="/me" />
          <Route element={<SingleBlogPage />} path="/singleblog" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
