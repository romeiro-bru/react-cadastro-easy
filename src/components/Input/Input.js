import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./style.css";

const url = "https://private-21e8de-rafaellucio.apiary-mock.com/users";
const storeData = [];

export function Input() {
  const [reponse, setResponse] = useState([]);
  const [inputs, setInputs] = useState({});
  const [userData, setUserData] = useState(reponse);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setResponse(res.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
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

    // salvar no localstorage
    storeData.push(inputs);
    localStorage.setItem("storeData", JSON.stringify(storeData));

    history.push("/userregister");
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
              htmlFor="inputId"
              className="floating-label phone-label"
              data-content="Telefone"
            >
              <span className="hidden-visually">Telefone</span>
            </label>
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </>
  );
}
