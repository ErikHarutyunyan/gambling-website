import React, { lazy, Suspense } from "react";

const LazyNotificationsTable = lazy(() => import("./NotificationsTable"));

const NotificationsTable = (props) => (
  <Suspense fallback={null}>
    <LazyNotificationsTable {...props} />
  </Suspense>
);

export default NotificationsTable;
