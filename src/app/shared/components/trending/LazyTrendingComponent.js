import useNearScreen from "app/core/hooks/useNearScreen";
import React, { Suspense } from "react";

const TrendingComponent = React.lazy(() => {
  return import("./TrendingComponent");
});

const LazyTrendingComponent = () => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "250px" });
  return (
    <div ref={fromRef}>
      <Suspense fallback={null}>
        {isNearScreen && <TrendingComponent />}
      </Suspense>
    </div>
  );
};
export default LazyTrendingComponent;
