import React, { lazy, Suspense } from "react";

const LazyWithdrawRequests = lazy(() => import("./WithdrawRequests"));

const WithdrawRequests = (props) => (
  <Suspense fallback={null}>
    <LazyWithdrawRequests {...props} />
  </Suspense>
);

export default WithdrawRequests;
