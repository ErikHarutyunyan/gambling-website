import React, { lazy, Suspense } from "react";

const LazyImageBlur = lazy(() => import("./ImageBlur"));

const ImageBlur = (props) => (
  <Suspense fallback={null}>
    <LazyImageBlur {...props} />
  </Suspense>
);

export default ImageBlur;
