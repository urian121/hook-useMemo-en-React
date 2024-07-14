import { useMemo } from "react";

function Counter({ count }) {
  const double = useMemo(() => count * 2, [count]);

  return (
    <div>
      <p>Contador: {count}</p>
      <p>Doble: {double}</p>
    </div>
  );
}

export default Counter;
