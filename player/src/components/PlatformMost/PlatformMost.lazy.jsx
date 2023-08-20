import React, { lazy, Suspense } from "react";

const LazyPlatformMost = lazy(() => import("./PlatformMost"));

const PlatformMost = (props) => (
  <Suspense fallback={null}>
    <LazyPlatformMost {...props} />
  </Suspense>
);

export default PlatformMost;
