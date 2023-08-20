import React, { lazy, Suspense } from "react";

const LazyCreatePerson = lazy(() => import("./CreatePerson"));

const CreatePerson = (props) => (
  <Suspense fallback={null}>
    <LazyCreatePerson {...props} />
  </Suspense>
);

export default CreatePerson;
