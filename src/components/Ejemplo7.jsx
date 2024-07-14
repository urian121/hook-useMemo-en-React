import { useState, useMemo } from "react";

const ListaUsuarios = () => {
  // Estado para almacenar el criterio de filtrado ingresado por el usuario
  const [filtro, setFiltro] = useState("");

  // Utilizamos useMemo para memoizar el resultado del filtrado de usuarios
  const usuariosFiltrados = useMemo(() => {
    // Definimos la lista de usuarios
    const usuarios = [
      { id: 1, nombre: "Urian" },
      { id: 2, nombre: "Brenda" },
      { id: 3, nombre: "Uriany" },
      { id: 4, nombre: "Any" },
    ];

    // Filtramos la lista de usuarios según el criterio de filtrado
    return usuarios.filter((usuario) =>
      usuario.nombre.toLowerCase().includes(filtro.toLowerCase())
    );
  }, [filtro]); // Dependencia: el criterio de filtrado

  return (
    <div>
      {/* Input para ingresar el criterio de filtrado */}
      <input
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Filtrar usuarios"
      />
      {/* Lista de usuarios filtrados */}
      <ul>
        {usuariosFiltrados.map((usuario) => (
          <li key={usuario.id}>{usuario.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaUsuarios;
