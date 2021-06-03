import React from "react";
import { useState } from "react";
import "./style.css";

const response = [
  {
    name: "My name 1",
    cpf: "04080757247",
    phone: "11987654321",
    email: "myemail1@test.com.br"
  }
];

export function Input() {
  const [inputs, setInputs] = useState({});
  const [userData, setUserData] = useState(response);

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(e.target.value, inputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData([...userData, inputs]);

    e.target.reset();
    setInputs({
      name: "",
      email: "",
      cpf: "",
      phone: ""
    });
    console.log(userData);
  };

  return (
    <>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="floating">
            <input
              id="fullname"
              className="floating-input"
              value={userData.name}
              name="name"
              onChange={handleInputChange}
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
              value={userData.email}
              name="email"
              onChange={handleInputChange}
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
              value={userData.cpf}
              name="cpf"
              onChange={handleInputChange}
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
              value={userData.phone}
              name="phone"
              onChange={handleInputChange}
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

      <section className="cadastro-data">
        {userData.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.cpf}</p>
            <p>{item.phone}</p>
          </li>
        ))}
      </section>
    </>
  );
}
