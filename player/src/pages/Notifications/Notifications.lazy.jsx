import React, { lazy, Suspense } from "react";

const LazyNotifications = lazy(() => import("./Notifications"));

const Notifications = (props) => (
  <Suspense fallback={null}>
    <LazyNotifications {...props} />
  </Suspense>
);

export default Notifications;
