# Hook useMemo

##### ¿Para qué sirve el hook useMemo?

###### El hook useMemo es un hook que nos permite memorizar el resultado de una función. Esto quiere decir que si la función que le pasamos como parámetro no ha cambiado, no se ejecuta de nuevo y se devuelve el resultado que ya se había calculado. El hook useMemo recibe dos parámetros: una función y un array de dependencias. La función se ejecuta cuando el componente se renderiza por primera vez y cuando alguna de las dependencias cambia.

### Las diferencias entre useMemo y useCallback

#### La diferencia entre useCallback y useMemo es que useCallback memoriza una función y useMemo memoriza el resultado de una función.

##### useMemo, sirve para memorizar el valor que nos devuelve una funcion, para que solamente se vuelva a ejecutar esa funcion, cuando cambien algunas de la dependencias que especifiquemos en el useMemo. es decir devuelve un valor memoizado, nos memoriza la función y el argumento, es decir nos memoriza el valor.

##### useCallback, a diferencia del useMemo, nos memoria la referencia a toda la función, aqui no estamos memoriando el valor que nos devuelve la función como lo hace useMemo. Esto quiere decir que si la función que le pasamos como parámetro no ha cambiado, no se ejecuta de nuevo y se devuelve la función que ya se había calculado.

###### useCallback devuelve un callback (funcion) memoizado, es decir nos memoriza toda la función. Los dos hooks nos permiten memorizar elementos para evitar estar recalculándolos a cada rerenderizado

##### Los Hooks en React son una característica introducida en la versión 16.8 que permite agregar funcionalidades avanzadas a los componentes basados en funciones.

#### NOTA 🤓: En informática, el término Hook se refiere a una técnica o mecanismo que permite a un programa o sistema personalizar o extender su comportamiento. En el contexto de React, un Hookextiende el comportamiento de un componente basado en función.
