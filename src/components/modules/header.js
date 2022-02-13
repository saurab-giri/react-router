import React from 'react';

const Header = () => {
return
 <div>
      <AuthStatus />

      <ul>
        <li>
          <Link to="/covid">Covid Page</Link>
        </li>
        <li>
          <Link to="/todo">Todo Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
}
export default Header;