import { useEffect } from "react";
import Auth from "./auth";
import { Link } from "react-router-dom";
import { AppHeader } from "../AppHeader";

export function Logout() {
  Auth.isLoggedIn = false;
  Auth.deleteToken();
  Auth.deleteUser();
  return (
    <>
      <AppHeader />
      <div className="container m-5 border-primary text-center">
        <h4>You have succesfully Logged out!</h4>
        <h6>
          <Link to="/login">Click here</Link> to Login
        </h6>
      </div>
    </>
  );
}
