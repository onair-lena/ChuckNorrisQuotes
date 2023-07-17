import { useState } from 'react';

export function useFetchData<T>() {
  const [data, setData] = useState<T | undefined>();

  const getData = (url: string) =>
    fetch(url).then(async (response) => {
      const result = await response.json();
      setData(result);
      return result;
    });

  return { data, getData };
}
