import React, { lazy, Suspense } from "react";

const LazyFundInOut = lazy(() => import("./FundInOut"));

const FundInOut = (props) => (
  <Suspense fallback={null}>
    <LazyFundInOut {...props} />
  </Suspense>
);

export default FundInOut;
