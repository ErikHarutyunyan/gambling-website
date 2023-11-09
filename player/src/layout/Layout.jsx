import React from 'react'
import { Outlet, ScrollRestoration} from "react-router-dom"
import Header from '../components/Header/Header';
import Background from '../components/Background/Background';
const Layout = () => {

   let getKey = React.useCallback(
    (location, matches) => {
      let match = matches.find((m) => (m.handle)?.scrollMode);
      if ((match?.handle)?.scrollMode === "pathname") {
        return location.pathname;
      }
      return location.key;
    },
    []
  );
  return (
    <>
      <Header />
      <main>
        <Background />
        <Outlet />
      </main>
      <ScrollRestoration getKey={getKey} />
    </>
  );
}

export default Layout