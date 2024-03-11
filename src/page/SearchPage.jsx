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
  console.log(state);
  const doSearch = useDebounce((term) => {
    setSearchTerm(term);
  }, 500);

  const handleChange = (event) => {
    const value = event.target.value;
    doSearch(value);
  };

  const handleModalClosed = () => {
    doSearch(null);
    navigate("/");
  };
  useEffect(() => {
    dispatch({ type: actions.search.DATA_FETCHING });
    const fetchData = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/search?q=${
            searchTerm ?? null
          }`
        );

        dispatch({
          type: actions.search.DATA_FETCHED,
          data: response.data,
        });
      } catch (error) {
        dispatch({
          type: actions.search.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    fetchData();
  }, [api, dispatch, searchTerm]);
  return (
    <SearchModal
      blogs={state?.blogs}
      onSearch={handleChange}
      searchValue={searchTerm}
      onModalClosed={handleModalClosed}
    />
  );
}
