import { useEffect, useState } from "react";
//
import CircularSpinnerComponent from "app/shared/components/spinners/CircularSpinnerComponent";
//
import MovieService from "app/core/services/api/MovieService";
import CategoryComponent from "app/shared/components/category/CategoryComponent";

const TrendingComponent = () => {
  const [trends, setTrends] = useState({
    loading: true,
    data: [],
    error: null,
  });

  useEffect(() => {
    const service = new MovieService();
    service
      .getTrending()
      .then((res) =>
        setTrends({ loading: false, data: res.results, error: null })
      )
      .catch((error) => setTrends({ loading: false, data: [], error }));
  }, []);

  if (trends.loading) {
    return <CircularSpinnerComponent />;
  }

  return <CategoryComponent title="Trending" options={trends.data} />;
};

export default TrendingComponent;
