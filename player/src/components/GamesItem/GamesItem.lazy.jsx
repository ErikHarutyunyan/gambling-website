import React, { lazy, Suspense } from "react";

const LazyGamesItem = lazy(() => import("./GamesItem"));

const GamesItem = (props) => (
  <Suspense fallback={null}>
    <LazyGamesItem {...props} />
  </Suspense>
);

export default GamesItem;
