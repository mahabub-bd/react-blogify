import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer, Header } from "../components";
import { useAuth } from "../hooks";

const PrivateRoutes = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.authToken) {
      navigate("/login");
    }
  }, [auth, navigate]);

  return (
    <>
      {auth?.authToken && (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default PrivateRoutes;
