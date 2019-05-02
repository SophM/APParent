import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home"
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
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" />
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
