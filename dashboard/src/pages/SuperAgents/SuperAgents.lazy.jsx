import React, { lazy, Suspense } from "react";

const LazySuperAgents = lazy(() => import("./SuperAgents"));

const SuperAgents = (props) => (
  <Suspense fallback={null}>
    <LazySuperAgents {...props} />
  </Suspense>
);

export default SuperAgents;
