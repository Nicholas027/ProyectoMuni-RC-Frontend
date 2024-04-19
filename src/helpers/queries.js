const URI_Profesionales = import.meta.env.VITE_API_PROFESIONALES;

export const obtenerProfesionalesAPI = async () => {
  try {
    const respuesta = await fetch(URI_Profesionales, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!respuesta.ok) {
      throw new Error(
        `Error al obtener los profesionales: ${respuesta.statusText}`
      );
    }
    return respuesta;
  } catch (error) {
    throw new Error(`Error al obtener los profesionales: ${error.message}`);
  }
};

export const obtenerProfesionalesCategoriaAPI = async (categoria) => {
  try {
    const respuesta = await fetch(
      URI_Profesionales + "/" + "category" + "/" + categoria,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );
    return await respuesta.json()
  } catch (error) {
    throw new Error(`Error al obtener los profesionales: ${error.message}`);
  }
};

export const obtenerCategoriasAPI = async () => {
  try {
    const respuesta = await fetch(URI_Profesionales + "/" + "categories");
    const listaCategorias = await respuesta.json();
    console.log(listaCategorias);
    return listaCategorias;
  } catch (error) {
    throw new Error(`Error al obtener las categorías: ${error.message}`);
  }
};
