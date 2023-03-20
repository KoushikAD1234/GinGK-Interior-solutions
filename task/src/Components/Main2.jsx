import React from "react";
import "./Main.css";
import Content from "./Content";
import Dashboard from "./Dashboard";
import Permission from "./Permission";

function Main2() {
  return (
    <div className="main">
        <Dashboard />
      <div className="main_body">
        <Permission />
      </div>
    </div>
  );
}

export default Main2;
