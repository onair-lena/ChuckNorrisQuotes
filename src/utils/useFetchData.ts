import { useContext, useState } from 'react';
import { appContext } from './context';

export function useFetchData<T>() {
  const [data, setData] = useState<T | undefined>();
  const { setError } = useContext(appContext);

  const getData = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError('Oops... something went wrong!');
      }
      const result = await response.json();
      setData(result);
      return result;
    } catch (err) {
      setError('Oops... something went wrong!');
    }
  };

  return { data, getData };
}
