import React, { lazy, Suspense } from "react";

const LazyTransactionsTable = lazy(() => import("./TransactionsTable"));

const TransactionsTable = (props) => (
  <Suspense fallback={null}>
    <LazyTransactionsTable {...props} />
  </Suspense>
);

export default TransactionsTable;
