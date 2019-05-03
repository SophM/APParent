import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./components/footer";
import Home from "./pages/home"
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
