import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../Header/Header";
import "../../assets/styles/user.scss";

export function User() {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem("storeData"))[3];
    ls !== null ? setData([ls]) : setData("");
  }, []);

  const handleRemove = () => {
    localStorage.removeItem("storeData");
    history.push("/");
  };
  return (
    <>
      <Header />
      <section className="user-data">
        <ul>
          {data.map((item, index) => (
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
    </>
  );
}
