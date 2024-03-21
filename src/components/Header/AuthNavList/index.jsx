import { NavLink } from "react-router-dom";
import { AuthNavStyled, AuthListStyled } from "./AuthNavStyled";

const AuthNavList = ({ currentStyle }) => {
  return (
    <>
      {currentStyle ? (
        <AuthNavStyled current={currentStyle}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink aria-label="Welcome page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink aria-label="Nannies list page" to="/nannies">
                Nannies
              </NavLink>
            </li>
          </ul>

          <AuthListStyled current={currentStyle}>
            <li className="auth-item log">Log In</li>
            <li className="auth-item reg">Registration</li>
          </AuthListStyled>
        </AuthNavStyled>
      ) : (
        <>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink aria-label="Welcome page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink aria-label="Nannies list page" to="/nannies">
                Nannies
              </NavLink>
            </li>
          </ul>

          <AuthListStyled current={currentStyle}>
            <li className="auth-item log">Log In</li>
            <li className="auth-item reg">Registration</li>
          </AuthListStyled>
        </>
      )}
    </>
  );
};

export default AuthNavList;
