/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { useState } from "react";
import authentication from "../../service/auth";
import { useHistory } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
function Login(props) {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  let history = useHistory();
  const [password, setpassword] = useState("");
  const [userName, setuserName] = useState("");
  const [error, seterror] = useState("");
  const [open, setOpen] = React.useState(false);
  async function atLogin() {
    fetch("http://www.interviewFirst.com:8081/panel/login", {
      method: "POST",
      headers: {
        "appId": "123",
        "systemId": "vinit",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }
  return (
    <div
      style={{ height: "72vh" }}
      className="mx-auto col-md-3 mt-4"
      data-testid="logindiv"
    >
      <h2
        style={{ fontWeight: "600", color: "#563D7C" }}
        className="display-4 text-center"
      >
        Login
      </h2>
      <form>
        <div className="mb-3">
          <label for="username" className="form-label">
            Username
          </label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <i style={{ color: "#563D7C" }} class="fas fa-user"></i>
            </span>
            <input
              type="text"
              onChange={(e) => setuserName(e.target.value)}
              placeholder="Enter Username"
              className="form-control"
              id="username"
              name="username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">
              <i style={{ color: "#563D7C" }} class="fas fa-unlock"></i>
            </span>
            <input
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter Password"
              className="form-control"
              id="password"
              name="password"
              aria-label="Username"
              aria-describedby="basic-addon2"
            />
          </div>
        </div>
        <button
          onClick={atLogin}
          id="btnLogin"
          type="button"
          style={{
            backgroundColor: "#563D7C",
            border: "none",
          }}
          className="btn btn-success btn-block"
        >
          <b>Login</b> <i class="fas fa-sign-in-alt"></i>
        </button>
      </form>
      <hr />
      <div className="text-center">
        <a href="#">
          <i
            style={{ color: "#1877F2", marginRight: "10px" }}
            class="fab fa-facebook-f fa-2x"
          ></i>
        </a>
        <a href="#">
          <i
            style={{ color: "#0B66C2", marginRight: "10px" }}
            class="fab fa-linkedin-in fa-2x"
          ></i>
        </a>
        <a href="#">
          <i
            style={{ color: "#DE4F41", marginRight: "10px" }}
            class="fab fa-google-plus-g fa-2x"
          ></i>
        </a>
        <a href="#">
          <i style={{ color: "black" }} class="fab fa-github fa-2x"></i>
        </a>
      </div>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Login;
