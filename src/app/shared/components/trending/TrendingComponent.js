import CircularSpinnerComponent from "app/shared/components/spinners/CircularSpinnerComponent";
import CategoryComponent from "app/shared/components/category/CategoryComponent";
import useTrending from "app/core/hooks/useTrending";
import React from "react";

const TrendingComponent = () => {
  const { trends } = useTrending();

  if (trends.loading) {
    return <CircularSpinnerComponent />;
  }

  return <CategoryComponent title="Trending" options={trends.data} />;
};

export default React.memo(TrendingComponent);
