import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import Button from "./components/button";
import NavBar from "./components/nav";
// import Books from "./pages/dashboard";
// import Login from "./pages/login";
// import Signup from "./pages/signup";
// import dashboard from "./pages/dashboard";



function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/login" />
          <Route exact path="/signup" />
          <Route exact path="/dashboard" />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
