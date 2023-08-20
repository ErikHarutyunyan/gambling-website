import React, { lazy, Suspense } from "react";

const LazyManualDeposit = lazy(() => import("./ManualDeposit"));

const ManualDeposit = (props) => (
  <Suspense fallback={null}>
    <LazyManualDeposit {...props} />
  </Suspense>
);

export default ManualDeposit;
