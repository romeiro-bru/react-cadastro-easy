import React from "react";
import "./style.css";

export function User() {
  const storedData = localStorage.getItem("storeData");
  const register = JSON.parse(storedData);

  return (
    <section className="user-data">
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
    </section>
  );
}
