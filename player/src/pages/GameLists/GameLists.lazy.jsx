import React, { lazy, Suspense } from "react";

const LazyGameLists = lazy(() => import("./GameLists"));

const GameLists = (props) => (
  <Suspense fallback={null}>
    <LazyGameLists {...props} />
  </Suspense>
);

export default GameLists;
