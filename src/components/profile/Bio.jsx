import { useState } from "react";
import { actions } from "../../actions";
import { CheckedIcon, EditIcon } from "../../constans/image";
import { useAxios, useProfile } from "../../hooks";

const Bio = ({ isAuthonicate }) => {
  const { state, dispatch } = useProfile();

  const { api } = useAxios();
  const [bioData, setBioData] = useState(state?.user?.bio);
  const [editMode, setEditMode] = useState(false);

  const handleBioEdit = async () => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile`,
        { bio: bioData }
      );

      if (response.status === 200) {
        console.log(response.data);
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response.data,
        });
      }
      setEditMode(false);
    } catch (error) {
      console.error(error);
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!editMode ? (
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {state.user?.bio}
          </p>
        ) : (
          <textarea
            value={bioData}
            onChange={(e) => setBioData(e.target.value)}
            rows={3}
            cols={80}
            className="p-4 mx-auto leading-[188%] text-gray-300  card bg-gray-800 lg:lext-lg rounded-md"
          />
        )}
      </div>

      {isAuthonicate && (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={() => setEditMode(true)}
        >
          {!editMode && <img src={EditIcon} alt="Edit" />}
        </button>
      )}
      {editMode && isAuthonicate && (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={handleBioEdit}
        >
          <img src={CheckedIcon} alt="Edit" />
        </button>
      )}
    </div>
  );
};

export default Bio;
