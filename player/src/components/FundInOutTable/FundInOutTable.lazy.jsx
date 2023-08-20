import React, { lazy, Suspense } from "react";

const LazyFundInOutTable = lazy(() => import("./FundInOutTable"));

const FundInOutTable = (props) => (
  <Suspense fallback={null}>
    <LazyFundInOutTable {...props} />
  </Suspense>
);

export default FundInOutTable;
