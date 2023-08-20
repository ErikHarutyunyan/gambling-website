import React, { lazy, Suspense } from "react";

const LazySubheading = lazy(() => import("./Subheading"));

const Subheading = (props) => (
  <Suspense fallback={null}>
    <LazySubheading {...props} />
  </Suspense>
);

export default Subheading;
