import React from "react";
import logo from "../../assets/images/logo.svg";
import "../../assets/styles/header.scss";

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
