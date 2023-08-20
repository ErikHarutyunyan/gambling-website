import React, { lazy, Suspense } from "react";

const LazyManualWithdraw = lazy(() => import("./ManualWithdraw"));

const ManualWithdraw = (props) => (
  <Suspense fallback={null}>
    <LazyManualWithdraw {...props} />
  </Suspense>
);

export default ManualWithdraw;
