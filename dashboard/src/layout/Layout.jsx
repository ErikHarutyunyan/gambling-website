import React from 'react'
import { Outlet, ScrollRestoration} from "react-router-dom"
import Sidebar from '../components/Sidebar';
import { Container, Wrapper } from './Layout.styles';
import Header from '../components/Header/Header';
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
      <main className="main-container">
        <Wrapper>
        <Sidebar />
        <Container>
          <Outlet />
        </Container>
        </Wrapper>
          
      </main>
      <ScrollRestoration getKey={getKey} />
    </>
  );
}

export default Layout