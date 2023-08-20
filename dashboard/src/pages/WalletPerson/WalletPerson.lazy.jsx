import React, { lazy, Suspense } from "react";

const LazyWalletPerson = lazy(() => import("./WalletPerson"));

const WalletPerson = (props) => (
  <Suspense fallback={null}>
    <LazyWalletPerson {...props} />
  </Suspense>
);

export default WalletPerson;
