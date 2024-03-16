import { useReducer, useState } from "react";

import { ProfileContext } from "../contexts";
import { useAuth } from "../hooks";
import { initialState, profileReducer } from "../reducers/ProfileReducer";

const ProfileProvider = ({ children }) => {
  const { auth } = useAuth();

  const [state, dispatch] = useReducer(profileReducer, initialState);
  const [author, setAuthor] = useState(auth?.user?.id);
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <ProfileContext.Provider
      value={{
        showProfileModal,
        setShowProfileModal,
        author,
        setAuthor,
        state,
        dispatch,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileProvider };
