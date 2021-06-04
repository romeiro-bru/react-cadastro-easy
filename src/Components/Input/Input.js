import React from "react";
import { Register } from "../Register/Register";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const url = "https://private-21e8de-rafaellucio.apiary-mock.com/users";

export function Input() {
  const [users, setUsers] = useState([]);
  const [inputs, setInputs] = useState({});
  const [userData, setUserData] = useState(users);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setUsers(res.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

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

      <section className="register-data">
        <Register userData={userData} />
      </section>
    </>
  );
}
