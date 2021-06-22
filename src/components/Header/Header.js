import React from "react";
import logo from "./logo.svg";
import "./style.scss";

export function Header() {
  return (
    <div className="header">
      <h1>
        Easynvest
        <img src={logo} alt="logo" />
      </h1>
    </div>
  );
}
