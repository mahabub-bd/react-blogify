import { useContext, useDebugValue } from "react";
import { AuthContext } from "../contexts";

const useAuth = () => {
  const { auth } = useContext(AuthContext);

  useDebugValue(auth, (auth) =>
    auth?.user ? "User Already Login" : "User Logged out"
  );

  return useContext(AuthContext);
};

export { useAuth };
