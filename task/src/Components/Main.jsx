import React from "react";
import "./Main.css";
import Content from "./Content";
import Dashboard from "./Dashboard";

function Main() {
  return (
    <div className="main">
        <Dashboard />
      <div className="main_body">
        <Content />
      </div>
    </div>
  );
}

export default Main;
