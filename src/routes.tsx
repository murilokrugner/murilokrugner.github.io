import React from "react";
import {  
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import config from "../public/config.json"

export default function routes() {
  return (
    <Switch>
      <Route path="/" element={<Home/>} />
      <Route path="/config.json" element={() => config}</Route>} />
    </Switch>
  )
}
