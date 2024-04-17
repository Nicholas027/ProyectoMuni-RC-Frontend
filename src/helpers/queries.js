const URI_Profesionales = import.meta.env.VITE_API_PROFESIONALES;


export const obtenerProfesionalesAPI = async () => {
    try {
      const respuesta = await fetch(URI_Profesionales, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!respuesta.ok) {
        throw new Error(`Error al obtener los profesionales: ${respuesta.statusText}`);
      }
      return respuesta;
    } catch (error) {
      throw new Error(`Error al obtener los profesionales: ${error.message}`);
    }
  };
  