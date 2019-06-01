/**
 * 2019-06-01
 * author: 李坤
 */
import React from "react";
import ReactDOM from "react-dom";
import Router from "./BrowserRouter";
import Route from "./Route";
import Link from "./Link";


ReactDOM.render(
  <Router>
    <Link to="/">Home</Link>
    <Link to="/about">about</Link>
    <Route path="/" component={() => <h1>Home</h1>} />
    <Route path="/about" component={() => <h1>React Router Test</h1>} />
  </Router>,
  document.getElementById("root")
);
