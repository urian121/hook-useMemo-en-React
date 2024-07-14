import { useState, useMemo } from "react";

function ListaDeTareasNuevas() {
  const [tareas, setTareas] = useState([
    { id: 1, tarea: "Hacer la compra", completada: false },
    { id: 2, tarea: "Limpiar la casa", completada: true },
    { id: 3, tarea: "Hacer ejercicio", completada: false },
    { id: 4, tarea: "Estudiar para el examen", completada: false },
    { id: 5, tarea: "Preparar la cena", completada: false },
    { id: 6, tarea: "Llamar a María", completada: false },
  ]);

  // Filtra las tareas completadas utilizando useMemo para optimizar el rendimiento
  const tareasCompletadas = useMemo(
    () => tareas.filter((tarea) => tarea.completada),
    [tareas]
  );

  // Filtra las tareas no completadas utilizando useMemo para optimizar el rendimiento
  const tareasNoCompletadas = useMemo(
    () => tareas.filter((tarea) => !tarea.completada),
    [tareas]
  );

  // Cambia el estado de la tarea con el id dado entre completada y no completada
  const toggleCompletada = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const marcarTodoCompletado = () => {
    setTareas(
      tareas.map((tarea) =>
        tarea.completada ? tarea : { ...tarea, completada: true }
      )
    );
  };

  return (
    <div>
      <h2>Tareas Completadas ({tareasCompletadas.length})</h2>
      <ul>
        {tareasCompletadas.map((tarea) => (
          <li key={tarea.id}>{tarea.tarea}</li>
        ))}
      </ul>
      <h2>Tareas No Completadas ({tareasNoCompletadas.length})</h2>
      <ul>
        {tareasNoCompletadas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.tarea}
            <button onClick={() => toggleCompletada(tarea.id)}>
              Marcar como {tarea.completada ? "No Completada" : "Completada"}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={marcarTodoCompletado}>
        Marcar Todo Como Completado
      </button>
    </div>
  );
}

export default ListaDeTareasNuevas;
