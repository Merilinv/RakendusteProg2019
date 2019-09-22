import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage.jsx";
import ItemPage from "./Itempage.jsx";
import { BrowserRouter, Route, Link } from "react-router-dom";

const root = document.getElementById("app");

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={HomePage} />
    <Route path="/item/" exact component={ItemPage} />
  </BrowserRouter>,
  root,
);