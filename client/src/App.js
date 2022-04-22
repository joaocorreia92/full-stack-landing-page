import './App.css';

function App() {
  return (
    <div className="App">
      <header>

      </header>
      <main>
        <input type="text" className="inputs" placeholder="Nome"></input>
        <input type="text" className="inputs" placeholder="E-mail"></input>
        <input type="text" className="inputs" placeholder="Telefone"></input>
        <input type="text" className="inputs" placeholder="Rua"></input>
        <input type="text" className="inputs" placeholder="Número"></input>
        <select name="state"></select>
        <input type="submit" className="submit-button"/>
      </main>
    </div>
  );
}

export default App;
