import { Link, Outlet } from "react-router-dom";
import { StyledNavBar, StyledUl } from "../Styles";

export default function Navbar() {
  return (
    <>
      <StyledNavBar>
          <StyledUl>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="LogInPage">Log in</Link>
            </li>
          </StyledUl>
      </StyledNavBar>
      <main>
        <Outlet />
      </main>
    </>
  );
}