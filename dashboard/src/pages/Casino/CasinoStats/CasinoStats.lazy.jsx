import React, { lazy, Suspense } from "react";

const LazyCasinoStats = lazy(() => import("./CasinoStats"));

const CasinoStats = (props) => (
  <Suspense fallback={null}>
    <LazyCasinoStats {...props} />
  </Suspense>
);

export default CasinoStats;
