import { useReducer, useState } from "react";

import { ProfileContext } from "../contexts";
import { useAuth } from "../hooks";
import { initialState, profileReducer } from "../reducers/ProfileReducer";

const ProfileProvider = ({ children }) => {
  const { auth } = useAuth();

  const [state, dispatch] = useReducer(profileReducer, initialState);
  const [author, setAuthor] = useState(auth?.user?.id);

  return (
    <ProfileContext.Provider value={{ author, setAuthor, state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileProvider };
