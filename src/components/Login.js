import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../App";
import LogInButtons from "./LogInButtons";
import Navbar from "./Navbar";
const useAuth = () => {
  const { user } = useContext(UserContext);
  return user && user.loggedIn;
};

const Login = () => {
  const isAuth = useAuth();
  return (
    <div>
      <LogInButtons />
      <Navbar />
      {isAuth ? <Outlet /> : <Navigate to="/Login" />}
    </div>
  );
};

export default Login;
