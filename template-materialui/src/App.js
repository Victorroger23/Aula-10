import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Header>
        <p>
        <h1>Ola Mundo</h1>
        </p>
      </Header>
      <ListarTarefa />
    </div>
  );
}

export default App;
