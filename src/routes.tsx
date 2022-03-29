import React from "react";
import {  
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";

export default function routes() {
  return (
    <Switch>
      <Route path="/" element={<Home/>} />
    </Switch>
  )
}