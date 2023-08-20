import React, { lazy, Suspense } from "react";

const LazyMyProfile = lazy(() => import("./MyProfile"));

const MyProfile = (props) => (
  <Suspense fallback={null}>
    <LazyMyProfile {...props} />
  </Suspense>
);

export default MyProfile;
