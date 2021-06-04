import React from "react";
import "./style.css";

export function Register({ register }) {
  return (
    <>
      <ul>
        {register.map((item, index) => (
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
