import { useState } from "react";
import "./App.css";
import Counter from "./components/Ejemplo1";
import ListaDeTareas from "./components/Ejemplo2";
import ListaNumeros from "./components/Ejemplo3";
import ListaDeTareasNuevas from "./components/Ejemplo4";
import ClickHandler from "./components/Ejemplo5";
import MiCounter from "./components/Ejemplo6";
import Buscador from "./components/Ejemplo7";
import TodoList from "./components/TodoList";
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>
        Diferencia entre los Hook useCallback y useMemo y como y cuando usarlos
      </h1>
      <h3>Contador</h3>
      <Counter count={count} />
      <button onClick={increment}>Incrementar</button>
      <hr />
      <ListaDeTareas />
      <hr />
      <h3>Ejemplo 3</h3>
      <ListaNumeros />
      <hr />
      <h3>Ejemplo 4</h3>
      <ListaDeTareasNuevas />
      <hr />
      <h3>Ejemplo 5</h3>
      <ClickHandler />
      <hr />
      <MiCounter />
      <hr />
      <h3>Buscador con use Memo </h3>
      <Buscador />
      <h3>todo list</h3>
      <TodoList />
    </>
  );
}

export default App;
