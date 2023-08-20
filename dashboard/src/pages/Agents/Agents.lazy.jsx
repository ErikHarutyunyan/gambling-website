import React, { lazy, Suspense } from "react";

const LazyAgents = lazy(() => import("./Agents"));

const Agents = (props) => (
  <Suspense fallback={null}>
    <LazyAgents {...props} />
  </Suspense>
);

export default Agents;
