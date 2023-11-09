import React, { lazy, Suspense } from "react";

const LazyBackground = lazy(() => import("./Background"));

const Background = (props) => (
  <Suspense fallback={null}>
    <LazyBackground {...props} />
  </Suspense>
);

export default Background;
