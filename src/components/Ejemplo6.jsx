import { useState, useMemo } from "react";

const MiCounter = () => {
  const [contador, setContador] = useState(0);

  const esPar = useMemo(() => {
    console.log("Calculando paridad...");
    return contador % 2 === 0;
  }, [contador]);

  const incrementar = () => {
    setContador(contador + 1);
  };
  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar}>Incrementar</button>
      {esPar && <p>El contador es par.</p>}
    </div>
  );
};
export default MiCounter;
