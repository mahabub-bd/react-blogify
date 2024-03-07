import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import ProfilePage from "./page/ProfilePage";
import RegisterPage from "./page/Register";
import PublicRoutes from "./routes/Routes";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route element={<HomePage />} path="/" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<ProfilePage />} path="/me" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
