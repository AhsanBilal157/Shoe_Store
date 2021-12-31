import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Productitem from "./Productitem";
//import Navbar from "./Navbar";
import Navbarapp from "./Navbarapp";

export default function Routers() {
  return (
    <Router>
        <Navbarapp />
      <div className="textcenter">
        <Switch>
        <Route  exact path="/">
            <Home />
            </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/Products">
            <Products />
            </Route>
            <Route path="/Products/:id">
            <Productitem />
            </Route>
            <Route path="/Cart">
              <hr />
              <br />
            <h1>  Empty Cart</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            </Route>
            <Route path="*" component ={()=>"404 Not Found"}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}