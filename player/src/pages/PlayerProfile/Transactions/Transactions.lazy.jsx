import React, { lazy, Suspense } from "react";

const LazyTransactions = lazy(() => import("./Transactions"));

const Transactions = (props) => (
  <Suspense fallback={null}>
    <LazyTransactions {...props} />
  </Suspense>
);

export default Transactions;
