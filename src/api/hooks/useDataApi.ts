import { useEffect, useReducer } from "react";
import API from "../api";

type ActionType = "FETCH_INIT" | "FETCH_SUCCESS" | "FETCH_FAILURE";
type Action<T> = {
  type: ActionType;
  payload?: T;
};

type State<T> = {
  isLoading: boolean;
  error: string;
  data: T;
};

export function useDataApi<T>(
  initialData: T,
  url: string
): [State<T>, () => Promise<void>] {
  function dataFetchReducer(state: State<T>, action: Action<T>): State<T> {
    switch (action.type) {
      case "FETCH_INIT":
        return { ...state, isLoading: true, error: "" };

      case "FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          error: "",
          data: action.payload!,
        };

      case "FETCH_FAILURE":
        return { ...state };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    error: "",
    data: initialData,
  });

  const fetchData = async () => {
    dispatch({ type: "FETCH_INIT" });
    try {
      const response = await API.get<T>(url);
      const action: Action<T> = {
        type: "FETCH_SUCCESS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error: any) {
      dispatch({ type: "FETCH_FAILURE", payload: error.response.data.message });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return [state, fetchData];
}
