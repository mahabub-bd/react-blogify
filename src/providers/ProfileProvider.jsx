import { useReducer, useState } from "react";

import { ProfileContext } from "../contexts";
import { initialState, profileReducer } from "../reducers/ProfileReducer";

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <ProfileContext.Provider
      value={{
        showProfileModal,
        setShowProfileModal,

        state,
        dispatch,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileProvider };
