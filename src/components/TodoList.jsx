import { useState, useMemo } from "react";

function TodoList() {
  // El 'todos' es el estado para almacenar la lista de tareas.
  const [todos, setTodos] = useState([
    { id: 1, text: "Hacer la compra" },
    { id: 2, text: "Limpiar la casa" },
    { id: 3, text: "Hacer ejercicio" },
  ]);
  // El 'inputText' es el estado para almacenar el texto de la nueva tarea.
  /**
   * useMemo acepta dos argumentos: una función de cálculo y un array de dependencias. La función de cálculo se ejecuta para calcular el valor memoizado, y las dependencias se utilizan para determinar cuándo recalcular ese valor memoizado.
   */
  const [inputText, setInputText] = useState("");

  // filteredTodos utiliza useMemo para memoizar la lista de tareas, aunque en este caso no hay ninguna dependencia.
  const filteredTodos = useMemo(() => todos, [todos]);

  // addTodo es una función para agregar una nueva tarea.
  const addTodo = () => {
    if (inputText.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        text: inputText,
      };
      setTodos([...todos, newTodo]);
      setInputText("");
    }
  };

  // deleteTodo es una función para eliminar una tarea.
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // updateTodo es una función para actualizar una tarea.
  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Agregar nueva tarea"
      />
      <button onClick={addTodo}>Agregar</button>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
            <button onClick={() => updateTodo(todo.id, prompt("Nuevo texto:"))}>
              Editar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
