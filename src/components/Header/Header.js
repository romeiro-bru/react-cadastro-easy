import React from "react";
import logo from "./logo.svg";
import "./style.css";

export function Header() {
  return (
    <div className="header">
      <h1>
        30 days of React
        <img src={logo} alt="logo" />
      </h1>
      <h2>Day 11</h2>
    </div>
  );
}
