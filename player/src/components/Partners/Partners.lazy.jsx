import React, { lazy, Suspense } from "react";

const LazyPartners = lazy(() => import("./Partners"));

const Partners = (props) => (
  <Suspense fallback={null}>
    <LazyPartners {...props} />
  </Suspense>
);

export default Partners;
