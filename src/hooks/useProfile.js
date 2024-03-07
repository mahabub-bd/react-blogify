import { useContext } from "react";
import { ProfileContext } from "../contexts";

const useProfile = () => {
  return useContext(ProfileContext);
};

export { useProfile };
