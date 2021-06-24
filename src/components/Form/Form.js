import { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../Header/Header";
import axios from "axios";
import "../../assets/styles/form.scss";
import { AiOutlineLoading } from "react-icons/ai";

const url = "https://private-21e8de-rafaellucio.apiary-mock.com/users";

export function Form() {
  const [inputs, setInputs] = useState({});
  const [response, setResponse] = useState([]);
  const [hiddenSpin, setHiddenSpin] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function x() {
      const response = await axios.get(url);
      setResponse(response.data);
    }
    x();
  }, []);

  useEffect(() => {
    localStorage.setItem("storeData", JSON.stringify(response));
  }, [response]);

  const handleInputChange = useCallback(
    (e) => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    },
    [inputs]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse([...response, inputs]);
    setTimeout(() => {
      setHiddenSpin(false);
    }, 1000);
    setTimeout(() => {
      history.push("/userregister");
    }, 2500);
  };

  return (
    <>
      <Header />

      <form onSubmit={handleSubmit}>
        <div className="floating">
          <input
            id="fullname"
            className="floating-input"
            value={response.name}
            name="name"
            onChange={handleInputChange}
            placeholder="Nome completo"
            required
          ></input>
          <label
            htmlFor="inputId"
            className="floating-label fullname-label"
            data-content="Nome Completo (sem abreviações)"
          >
            <span className="hidden-visually">Nome Completo</span>
          </label>
        </div>

        <div className="floating">
          <input
            className="floating-input"
            value={response.email}
            name="email"
            onChange={handleInputChange}
            placeholder="E-mail"
            required
          ></input>
          <label
            htmlFor="inputId"
            className="floating-label email-label"
            data-content="E-mail"
          >
            <span className="hidden-visually">E-mail</span>
          </label>
        </div>

        <div className="floating">
          <input
            className="floating-input"
            value={response.cpf}
            name="cpf"
            onChange={handleInputChange}
            placeholder="CPF"
            required
          ></input>
          <label
            htmlFor="inputId"
            className="floating-label cpf-label"
            data-content="CPF"
          >
            <span className="hidden-visually">CPF</span>
          </label>
        </div>

        <div className="floating">
          <input
            className="floating-input"
            value={response.phone}
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

        <button
          disabled={response.length > 3}
          hidden={hiddenSpin === false}
          className="button-register"
          type="submit"
        >
          Cadastrar
        </button>
        <button hidden={hiddenSpin} className="button-register load">
          {" "}
          <AiOutlineLoading className="spin" />
        </button>
      </form>
    </>
  );
}
