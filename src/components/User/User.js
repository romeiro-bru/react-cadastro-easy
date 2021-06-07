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
            <p>Nome Completo: {item.name}</p>
            <p>E-mail: {item.email}</p>
            <p>CPF: {item.cpf}</p>
            <p>Telefone: {item.phone}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
