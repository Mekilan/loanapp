import { useState, useEffect } from "react";
import { get, post, setAuthToken } from "./AxiosCreate";

const useFetchData = (URL, params, MethodType) => {
  const [data, setData] = useState([]);
  const [err, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setAuthToken();
      setLoading(true);
      try {
        if (MethodType === "GET") {
          const res = await get(URL);
          if (res.status === 200) {
            setData(res.data);
          }
        }
        if (MethodType === "POST") {
          const res = await post(URL, params);
          if (res.status === 200) {
            setData(res.data);
          }
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(err.message);
      }
    };
    fetchData();
  }, [URL, params, MethodType]);

  return { data, err, loading };
};

export default useFetchData;
