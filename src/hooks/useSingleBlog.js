import { useContext } from "react";
import { SingleBlogContext } from "../contexts";

const useSingleBlog = () => {
  return useContext(SingleBlogContext);
};

export { useSingleBlog };
