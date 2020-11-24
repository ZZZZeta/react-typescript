import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

// utils
import makeApiCall from '../../utils/api/makeApiCall';
import usePreloader from '../usePreloader';

function useFetch(url: string) {
  const [response, setData] = useState<AxiosResponse>();
  const [enableLoading, disableLoading] = usePreloader();

  useEffect(() => {
    enableLoading();
    makeApiCall({ url, method: 'GET' })
      .then((res) => {
        setData(res);
        disableLoading();
      })
      .catch((e) => {
        console.error(e);
        disableLoading();
      });
    // eslint-disable-next-line
  }, []);

  return response?.data;
}

export default useFetch;
