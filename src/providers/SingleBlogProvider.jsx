import { useReducer, useState } from "react";
import { SingleBlogContext } from "../contexts";
import { initialState, singleBlogReducer } from "../reducers/SingleBlogReducer";

const SingleBlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(singleBlogReducer, initialState);
  const [blogId, setBlogId] = useState(null);
  return (
    <SingleBlogContext.Provider value={{ state, dispatch, blogId, setBlogId }}>
      {children}
    </SingleBlogContext.Provider>
  );
};

export { SingleBlogProvider };
