import Header from '../Header/Header';
import CursorFollower from '../CursorFollower/CursorFollower';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />

      <CursorFollower />
    </>
  );
}

export default Layout;
