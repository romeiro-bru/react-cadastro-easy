import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

export function User() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem("storeData"));
    console.log(3, data);
    ls !== null ? setData(ls) : setData("");
  }, []);

  // const storedData = JSON.parse(localStorage.getItem("storeData"));
  const history = useHistory();

  const handleRemove = () => {
    localStorage.removeItem("storeData");
    history.push("/");
  };
  return (
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
  );
}
