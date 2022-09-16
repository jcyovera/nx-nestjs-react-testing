import {useState, useEffect} from "react";

export const useGetQuery = <T,>(
  getApiCall: any,
  mapFunction: (rawData: any) => T[]
) => {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // set loading to true to indicate that the data is being fetched

        const json = await getApiCall();
        setData(mapFunction(json)); // shape the data to our model

        setLoading(false); // set loading to false to indicate that the api call has ended

      } catch (error: any) {
        setError(error.message);
        setLoading(false); // set loading to false to indicate that the api call has ended
      }
    };
    fetchData();
  }, [mapFunction, getApiCall]);
  return { data, loading, error};
};
