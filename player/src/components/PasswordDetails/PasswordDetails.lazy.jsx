import React, { lazy, Suspense } from "react";

const LazyPasswordDetails = lazy(() => import("./PasswordDetails"));

const PasswordDetails = (props) => (
  <Suspense fallback={null}>
    <LazyPasswordDetails {...props} />
  </Suspense>
);

export default PasswordDetails;
