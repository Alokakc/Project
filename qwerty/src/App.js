import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CurrentLocation from "./currentLocation";
import "./App.css";
import Navbar from "./Navbar";
import Educational from "./pages/Educational";

function App() {
  return (
    // <React.Fragment>
    //     <Navbar/>
    //     <CurrentLocation />
    // </React.Fragment>
    // <Router>
    //   <div>
    //     <Navbar/>
    //     <switch>
    //     <Route path="/Educational" exact>
    //         <Educational />
    //       </Route>
    //       <Route path="/">
    //         <CurrentLocation />
    //       </Route>
    //     </switch>
    //   </div>
    // </Router>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
