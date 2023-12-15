import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="LogInPage">Log in</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}