import { useState, useMemo, useCallback } from "react";

function ListaNumeros() {
  const [numeros, setNumeros] = useState([]);
  const [nuevoNumero, setNuevoNumero] = useState("");

  // Calculamos la suma de los números usando useMemo
  const suma = useMemo(() => {
    console.log("Calculando suma...");
    return numeros.reduce((total, num) => total + num, 0);
  }, [numeros]);

  // Manejador de cambio de entrada para el nuevo número
  const handleChange = (event) => {
    setNuevoNumero(event.target.value);
  };

  // Añadimos un nuevo número a la lista usando useCallback
  const handleClick = useCallback(() => {
    setNumeros((prevNumeros) => [...prevNumeros, parseInt(nuevoNumero)]);
    setNuevoNumero(""); // Limpiamos la entrada
  }, [nuevoNumero]);

  return (
    <div>
      <input
        type="number"
        value={nuevoNumero}
        onChange={handleChange}
        placeholder="Ingrese un número"
      />
      <button onClick={handleClick}>Agregar</button>
      <ul>
        {numeros.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
      <p>Suma total: {suma}</p>
    </div>
  );
}

export default ListaNumeros;
