import React, { lazy, Suspense } from "react";

const LazySportsStats = lazy(() => import("./SportsStats"));

const SportsStats = (props) => (
  <Suspense fallback={null}>
    <LazySportsStats {...props} />
  </Suspense>
);

export default SportsStats;
