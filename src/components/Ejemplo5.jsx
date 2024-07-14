import { useCallback } from "react";

function ClickHandler() {
  // Manejador de clics memoizado usando useCallback
  const handleClick = useCallback(() => {
    console.log("Botón clickeado");
  }, []); // No hay dependencias

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <ClickHandler />
    </div>
  );
}
