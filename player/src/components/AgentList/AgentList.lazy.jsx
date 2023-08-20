import React, { lazy, Suspense } from "react";

const LazyAgentList = lazy(() => import("./AgentList"));

const AgentList = (props) => (
  <Suspense fallback={null}>
    <LazyAgentList {...props} />
  </Suspense>
);

export default AgentList;
