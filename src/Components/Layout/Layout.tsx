import Header from '../Header/Header';
import CursorFollower from '../CursorFollower/CursorFollower';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <CursorFollower />
    </>
  );
}

export default Layout;
