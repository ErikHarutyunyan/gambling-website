import React, { lazy, Suspense } from "react";

const LazyOutstandingTable = lazy(() => import("./OutstandingTable"));

const OutstandingTable = (props) => (
  <Suspense fallback={null}>
    <LazyOutstandingTable {...props} />
  </Suspense>
);

export default OutstandingTable;
