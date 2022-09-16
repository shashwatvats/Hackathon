import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Dashboard from "./Components/dashboard/Dashboard";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import JobDetails from "./Components/jobDetails/jobDetails";
import Login from "./Components/login/Login";
import authentication from "./service/auth";

function App() {
  const [titleName, settitleName] = useState("");
  function check() {
    // authentication.Login();
    return authentication.isLoggedin;
  }

  return (
    <div>
      <Router>
        <Header titleName={titleName} />
        <Route
          exact
          path="/"
          component={() => <Login settitleName={settitleName} />}
        />
        <Route
          exact
          path="/dashboard"
          component={() => (check() ? <Dashboard /> : <Redirect to="/" />)}
        />
        <Route
          exact
          path="/dashboard/:id"
          component={JobDetails}
        />
        <Footer />
      </Router>
    </div>
  );
}
export default App;
