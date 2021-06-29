import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

export function User() {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem("storeData"));
    ls !== null ? setData(ls) : setData("");
  }, []);

  const handleRemove = (itemIndex) => {
    const items = JSON.parse(localStorage.getItem("storeData"));
    const filtered = items.filter((_, index) => index !== itemIndex);
    localStorage.setItem("storeData", JSON.stringify(filtered));

    setTimeout(() => {
      history.push("/");
    }, 1000);
  };

  const handleReturn = () => {
    history.push("/");
  };

  return (
    <>
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

              <button
                onClick={() => handleRemove(index)}
                className="button-delete"
              >
                Excluir cadastro
              </button>
            </li>
          ))}
        </ul>
        <button onClick={handleReturn} className="button-return">
          voltar
        </button>
      </section>
    </>
  );
}
