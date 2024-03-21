import { useSelector } from "react-redux";
import HeaderStyled from "./HeaderStyled";
import { NavLink, useLocation } from "react-router-dom";
import { selectIsLoggedIn } from "store/auth/selector";
import NavList from "./NavList";
import AuthNavList from "./AuthNavList";

const Header = () => {
  const location = useLocation();
  const currentStyled = location.pathname === "/" ? true : false;

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderStyled current={currentStyled}>
      <nav className="header-container">
        <NavLink aria-label="Welcome page" to="/" className="logo">
          Nanny.Services
        </NavLink>

        {!isLoggedIn ? (
          <AuthNavList currentStyle={currentStyled} />
        ) : (
          <NavList currentStyle={currentStyled} />
        )}
      </nav>
    </HeaderStyled>
  );
};

export default Header;
