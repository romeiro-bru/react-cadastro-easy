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

    data.length === 1 && history.push("/");
  };

  const handleReturn = () => {
    history.push("/");
  };

  return (
    <>
      <form className="user-data">
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
                type="submit"
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
      </form>
    </>
  );
}
