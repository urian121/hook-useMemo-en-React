import { useState, useCallback } from "react";

export default function ListaDeTareas() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);

  /**
   * handleDelete es una función callback que se crea utilizando useCallback. Esto significa que cada vez que se renderiza el componente ListaDeTareas, se crea una nueva instancia de handleDelete solo si las dependencias especificadas (en este caso, ninguna) han cambiado.
   * Si las dependencias no han cambiado, React devuelve la misma instancia de la función desde la memoria caché, lo que puede ser útil para evitar re-renderizados innecesarios de componentes hijos que dependen de esta función.
   *
   * Al usar useCallback, la función handleDelete se memoriza y no se crea en cada renderización de ListComponent. Esto mejora el rendimiento al evitar la recreación innecesaria de funciones y asegura que se pase la misma función memorizada a los componentes hijos en lugar de crear una nueva cada vez.
   */
  const handleDelete = useCallback((itemToDelete) => {
    setItems((prevItems) => prevItems.filter((item) => item !== itemToDelete));
    console.log("Ha cambiado el estado");
  }, []);

  return (
    <div>
      {items.map((item) => (
        <ListItemComponent key={item} item={item} onDelete={handleDelete} />
      ))}
    </div>
  );
}

function ListItemComponent({ item, onDelete }) {
  return (
    <div>
      <span>{item}</span> &nbsp;
      <button onClick={() => onDelete(item)}>Delete</button>
    </div>
  );
}
