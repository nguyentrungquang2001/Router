import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#fff" : "",
    backgroundColor: isActive ? "#0d6efd" : "",
    padding: "5px 10px",
    borderRadius: "3px",
    textDecoration: "none",
    margin: "0 5px",
  });
  const useAuth = () => {
    const { user } = useContext(UserContext);
    return user && user.loggedIn;
  };
  const isAuth = useAuth();

  return (
    <div className="text-center my-5 fs-3">
      <NavLink to="/" style={navLinkStyle}>
        Trang chủ
      </NavLink>
      <NavLink to="/news" style={navLinkStyle}>
        Trang tin tức
      </NavLink>
      {isAuth && (
        <>
          <NavLink to="/personal" style={navLinkStyle}>
            Trang cá nhân
          </NavLink>
          <NavLink to="/account" style={navLinkStyle}>
            Trang account
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;
