import React, { lazy, Suspense } from "react";

const LazyAbout = lazy(() => import("./About"));

const About = (props) => (
  <Suspense fallback={null}>
    <LazyAbout {...props} />
  </Suspense>
);

export default About;
