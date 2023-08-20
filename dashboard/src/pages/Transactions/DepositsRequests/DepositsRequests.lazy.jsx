import React, { lazy, Suspense } from "react";

const LazyDepositsRequests = lazy(() => import("./DepositsRequests"));

const DepositsRequests = (props) => (
  <Suspense fallback={null}>
    <LazyDepositsRequests {...props} />
  </Suspense>
);

export default DepositsRequests;
