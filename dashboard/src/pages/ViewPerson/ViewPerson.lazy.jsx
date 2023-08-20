import React, { lazy, Suspense } from "react";

const LazyViewPerson = lazy(() => import("./ViewPerson"));

const ViewPerson = (props) => (
  <Suspense fallback={null}>
    <LazyViewPerson {...props} />
  </Suspense>
);

export default ViewPerson;
