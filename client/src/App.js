import "./App.css";
import { useState } from "react";
import axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState(0);
  const [uFstate, setUfState] = useState("");

  const addUser = () => {
    axios.post('http://localhost:3001/create', {
      name,
      email,
      phone,
      street,
      houseNumber,
      uFstate
    }).then(() => {
      console.log('success')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <header></header>
      <main className="information">
        <input
          type="text"
          placeholder="Nome"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="E-mail"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Telefone"
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Rua"
          onChange={(event) => {
            setStreet(event.target.value);
          }}
        ></input>
        <input
          type="number"
          placeholder="Número"
          onChange={(event) => {
            setHouseNumber(event.target.value);
          }}
        ></input>
        <input
          name="state"
          onChange={(event) => {
            setUfState(event.target.value);
          }}
        ></input>
        <button onClick={addUser}>Adicionar usuário</button>
      </main>
    </div>
  );
}

export default App;
