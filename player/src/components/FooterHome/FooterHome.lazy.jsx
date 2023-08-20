import React, { lazy, Suspense } from "react";

const LazyFooterHome = lazy(() => import("./FooterHome"));

const FooterHome = (props) => (
  <Suspense fallback={null}>
    <LazyFooterHome {...props} />
  </Suspense>
);

export default FooterHome;
