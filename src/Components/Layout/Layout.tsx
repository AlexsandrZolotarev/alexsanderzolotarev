import Header from '../Header/Header';
import CursorFollower from '../CursorFollower/CursorFollower';
import Scrolling from '../Scrolling/Scrolling';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <CursorFollower />
      <Scrolling />
    </>
  );
}

export default Layout;
