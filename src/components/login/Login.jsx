import { useState } from "react";
import Auth from "./auth.js";
import { useNavigate } from "react-router-dom";
import { AppHeader } from "../AppHeader.jsx";

export function Login() {
  let navigate = useNavigate();
  let [loginData, setLoginData] = useState({});
  let [errorMessage, setErrorMessage] = useState("");

  function handleChangeInput(event) {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  }

  function handleLoginFormSubmit(event) {
    event.preventDefault();
    console.log(loginData);

    // validate the user id and password
    fetch("http://localhost:3000/users/" + loginData.id)
      .then((response) => response.json())
      .then((data) => {
        if (data.password == loginData.password) {
          // login success
          console.log(data);
          console.log("login success");
          // store the jwt token in session storage
          Auth.isLoggedIn = true;
          Auth.storeToken(data.token);

          //store the user info with role in session storage
          Auth.storeUser({
            id: data.id,
            name: data.name,
            email: data.email,
            role: data.role,
          });
          // navigate to the landing page based on the role of the user who has logged in
          if (data.role == "ADMIN") {
            navigate("/book-home");
          } else if (data.role == "CUSTOMER") {
            navigate("/");
          }
        } else {
          // login failed
          //console.log("login failed");
          setErrorMessage("INVALID CREDENTIALS");
        }
      })
      .catch((error) => setErrorMessage("INVALID CREDENTIALS"));
  }

  return (
    <>
      <AppHeader />
      <div className="row my-2">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="container my-5">
            <h5 className="text-danger">{errorMessage}</h5>
            <form onSubmit={(event) => handleLoginFormSubmit(event)}>
              <div className="card">
                <div className="card-header bg-warning text-light">
                  <h4>LOGIN</h4>
                </div>
                <div className="card-body">
                  <div className="form-control-group mb-2">
                    <label htmlFor="uid" className="form-label">
                      User ID:
                    </label>
                    <input
                      type="text"
                      id="uid"
                      className="form-control"
                      placeholder="Enter User ID"
                      name="id"
                      onChange={(event) => handleChangeInput(event)}
                    ></input>
                  </div>
                  <div className="form-control-group mb-2">
                    <label htmlFor="pword" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      id="pword"
                      className="form-control"
                      placeholder="Enter Password"
                      name="password"
                      onChange={(event) => handleChangeInput(event)}
                    ></input>
                  </div>
                </div>
                <div className="card-footer bg-warning text-light">
                  <button type="submit" className="btn btn-light text-warning">
                    LOGIN
                  </button>
                  <button
                    type="reset"
                    className="btn btn-light text-warning mx-5"
                  >
                    CLEAR
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
}
