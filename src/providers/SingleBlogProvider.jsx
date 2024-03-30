import { useReducer } from "react";
import { SingleBlogContext } from "../contexts";
import { initialState, singleBlogReducer } from "../reducers/SingleBlogReducer";

const SingleBlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(singleBlogReducer, initialState);

  return (
    <SingleBlogContext.Provider value={{ state, dispatch }}>
      {children}
    </SingleBlogContext.Provider>
  );
};

export { SingleBlogProvider };
