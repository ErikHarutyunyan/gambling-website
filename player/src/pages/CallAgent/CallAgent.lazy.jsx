import React, { lazy, Suspense } from "react";

const LazyCallBanner = lazy(() => import("./CallAgent"));

const CallBanner = (props) => (
  <Suspense fallback={null}>
    <LazyCallBanner {...props} />
  </Suspense>
);

export default CallBanner;
