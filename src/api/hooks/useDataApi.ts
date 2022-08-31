import { useEffect, useState, useReducer } from "react";
import API from "../api";

export function useDataApi<T>(initialData: T, url: string) {
  const [data, setData] = useState<T>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await API.get<T>(url);
      const data = response.data;
      setData(data);
    } catch (error: any) {
      setError(error.response.data.message);
    }

    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error, fetchData };
}
