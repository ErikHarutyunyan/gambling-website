import React, { lazy, Suspense } from "react";

const LazySingleGame = lazy(() => import("./SingleGame"));

const SingleGame = (props) => (
  <Suspense fallback={null}>
    <LazySingleGame {...props} />
  </Suspense>
);

export default SingleGame;
