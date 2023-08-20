import React, { lazy, Suspense } from "react";

const LazyHeroBanner = lazy(() => import("./HeroBanner"));

const HeroBanner = (props) => (
  <Suspense fallback={null}>
    <LazyHeroBanner {...props} />
  </Suspense>
);

export default HeroBanner;
