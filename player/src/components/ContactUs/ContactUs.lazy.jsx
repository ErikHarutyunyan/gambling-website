import React, { lazy, Suspense } from "react";

const LazyContactUs = lazy(() => import("./ContactUs"));

const ContactUs = (props) => (
  <Suspense fallback={null}>
    <LazyContactUs {...props} />
  </Suspense>
);

export default ContactUs;
