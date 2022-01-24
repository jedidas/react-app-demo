import { useEffect, useState } from "react";
import { movieService } from "app/core/services/api/MovieService";

const useTrending = () => {
  const [trends, setTrends] = useState({
    loading: true,
    data: [],
    error: null,
  });

  useEffect(() => {
    movieService
      .getTrending()
      .then((res) =>
        setTrends({ loading: false, data: res.results, error: null })
      )
      .catch((error) => setTrends({ loading: false, data: [], error }));
  }, []);
  return { trends };
};

export default useTrending;
