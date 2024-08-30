import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      setIsFetching(true);
      try {
        const response = await fetchFn();
        setData(response);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data" });
      } finally {
        setIsFetching(false);
      }
    })();
  }, [fetchFn]);

  return [isFetching, data, setData, error];
}
