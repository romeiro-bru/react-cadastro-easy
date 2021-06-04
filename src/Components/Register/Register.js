import React from "react";
import "./style.css";

export function Register({ userData }) {
  return (
    <>
      <ul>
        {userData.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.cpf}</p>
            <p>{item.phone}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
