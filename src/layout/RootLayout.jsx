/** @format */
import { NavLink, Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div className='root'>
      {" "}
      <header>
        <nav>
          <span>
            <h1>Joborute</h1>
          </span>
          <span>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/help'>Help</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/careers'>Careers</NavLink>
          </span>
        </nav>
      </header>{" "}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
