import React, { lazy, Suspense } from "react";

const LazyForgotPassword = lazy(() => import("./ForgotPassword"));

const ForgotPassword = (props) => (
  <Suspense fallback={null}>
    <LazyForgotPassword {...props} />
  </Suspense>
);

export default ForgotPassword;
