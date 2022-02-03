import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      await axios.get(url)
      .then((response) => {
        setData(response.data);
      });
    };
    getData();
  }, [url]);
  return data;
}
