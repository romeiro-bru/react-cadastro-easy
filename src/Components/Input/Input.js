import React from "react";
// import { useState } from "react";
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
          <div className="floating">
            <input
              id="fullname"
              className="floating-input"
              name="fullname"
              placeholder="Nome completo"
              required
            ></input>
            <label
              for="inputId"
              className="floating-label fullname-label"
              data-content="Nome Completo (sem abreviações)"
            >
              <span className="hidden-visually">Nome Completo</span>
            </label>
          </div>

          <div className="floating">
            <input
              className="floating-input"
              name="email"
              placeholder="E-mail"
              required
            ></input>
            <label
              for="inputId"
              className="floating-label email-label"
              data-content="E-mail"
            >
              <span className="hidden-visually">E-mail</span>
            </label>
          </div>

          <div className="floating">
            <input
              className="floating-input"
              name="cpf"
              placeholder="CPF"
              required
            ></input>
            <label
              for="inputId"
              className="floating-label cpf-label"
              data-content="CPF"
            >
              <span className="hidden-visually">CPF</span>
            </label>
          </div>

          <div className="floating">
            <input
              className="floating-input"
              name="phone"
              placeholder="Telefone"
              maxLength="11"
              required
            ></input>
            <label
              for="inputId"
              className="floating-label phone-label"
              data-content="Telefone"
            >
              <span className="hidden-visually">Telefone</span>
            </label>
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </section>

      <section className="cards"></section>
    </>
  );
}
