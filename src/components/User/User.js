import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

export function User() {
  const storedData = localStorage.getItem("storeData");
  const register = JSON.parse(storedData);
  const history = useHistory();

  const handleRemove = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <section className="user-data">
      <ul>
        {register.map((item, index) => (
          <li key={index}>
            <p>
              <strong>{item.name}</strong>
            </p>
            <p>{item.email}</p>
            <p>{item.cpf}</p>
            <p>{item.phone}</p>
          </li>
        ))}
        <button onClick={handleRemove} className="button-delete">
          Excluir cadastro
        </button>
      </ul>
    </section>
  );
}
