import React, { lazy, Suspense } from "react";

const LazyPlayers = lazy(() => import("./Players"));

const Players = (props) => (
  <Suspense fallback={null}>
    <LazyPlayers {...props} />
  </Suspense>
);

export default Players;
