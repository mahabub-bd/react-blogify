import { useContext } from "react";
import { BlogContext } from "../contexts";

const useBlog = () => {
  return useContext(BlogContext);
};

export { useBlog };
