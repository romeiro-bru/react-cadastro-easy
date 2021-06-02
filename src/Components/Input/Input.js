import React from "react";
import { useState } from "react";
import "./style.css";

export function Input() {
  // const [inputs, setInputs] = useState({});

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <input placeholder=" Nome completo" required></input>
          <input placeholder=" E-mail" required></input>
          <input placeholder=" CPF" required></input>
          <input placeholder=" Telefone" required></input>

          <button type="submit">Cadastrar</button>
        </form>
      </section>

      <section className="cards"></section>
    </>
  );
}
