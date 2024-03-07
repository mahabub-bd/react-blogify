import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const PublicRoutes = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicRoutes;
