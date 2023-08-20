import React, { lazy, Suspense } from "react";

const LazyEditPerson = lazy(() => import("./EditPerson"));

const EditPerson = (props) => (
  <Suspense fallback={null}>
    <LazyEditPerson {...props} />
  </Suspense>
);

export default EditPerson;
