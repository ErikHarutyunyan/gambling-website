import React, { lazy, Suspense } from "react";

const LazyAccountDetails = lazy(() => import("./AccountDetails"));

const AccountDetails = (props) => (
  <Suspense fallback={null}>
    <LazyAccountDetails {...props} />
  </Suspense>
);

export default AccountDetails;
