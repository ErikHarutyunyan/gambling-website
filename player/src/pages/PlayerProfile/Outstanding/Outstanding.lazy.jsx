import React, { lazy, Suspense } from "react";

const LazyOutstanding = lazy(() => import("./Outstanding"));

const Outstanding = (props) => (
  <Suspense fallback={null}>
    <LazyOutstanding {...props} />
  </Suspense>
);

export default Outstanding;
