import React, { lazy, Suspense } from "react";

const LazyPersonalDetails = lazy(() => import("./PersonalDetails"));

const PersonalDetails = (props) => (
  <Suspense fallback={null}>
    <LazyPersonalDetails {...props} />
  </Suspense>
);

export default PersonalDetails;
