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
      URI_Profesionales + "/" + "category" + "/" + categoria
    );
    return await respuesta.json();
  } catch (error) {
    throw new Error(`Error al obtener los profesionales: ${error.message}`);
  }
};

export const obtenerCategoriasAPI = async () => {
  try {
    const respuesta = await fetch(URI_Profesionales + "/" + "categories");
    const listaCategorias = await respuesta.json();
    return listaCategorias;
  } catch (error) {
    throw new Error(`Error al obtener las categorías: ${error.message}`);
  }
};

export const obtenerProfesionalAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_Profesionales}/${id}`);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};
