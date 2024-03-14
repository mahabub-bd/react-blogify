import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { actions } from "../actions";
import { SearchModal } from "../components";
import { useAxios, useDebounce } from "../hooks";
import { initialState, searchReducer } from "../reducers/SearchReducer";

export default function SearchPage() {
  const { api } = useAxios();
  const [state, dispatch] = useReducer(searchReducer, initialState);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const debouncedValue = useDebounce(searchTerm, 500);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleModalClosed = () => {
    navigate("/");
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      dispatch({ type: actions.search.DATA_FETCHING });

      const fetchData = async () => {
        try {
          const response = await api.get(
            `${import.meta.env.VITE_SERVER_BASE_URL}/search?q=${debouncedValue}`
          );

          dispatch({
            type: actions.search.DATA_FETCHED,
            data: response.data,
          });
        } catch (error) {
          dispatch({
            type: actions.search.DATA_FETCH_ERROR,
            error: error.message,
            length: length,
          });
        }
      };

      fetchData();
    }
  }, [api, debouncedValue, dispatch, searchTerm.length]);

  return (
    <SearchModal
      blogs={state?.data}
      loading={state.loading}
      error={state.error}
      onSearch={handleChange}
      searchValue={searchTerm}
      onModalClosed={handleModalClosed}
    />
  );
}
