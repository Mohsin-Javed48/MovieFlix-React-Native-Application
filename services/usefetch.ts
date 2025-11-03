// fetchMovies
// fetchMoviesDetails

// useFetch(fetchMovies)
import { useEffect, useState } from 'react';

const useFetch = <T>(fetchFunction: () => Promise<T>, authFetch = true) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await fetchFunction();
      setData(result);
      setLoading(false);
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Unknown error'));
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };

  useEffect(() => {
    if (authFetch) {
      fetchData();
    }
  }, []);

  return { data, loading, error, reFetch: fetchData, reset };
};

export default useFetch;
