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

  export const obtenerProfesionalesCategoriaAPI = async(categoria)=>{
    try {
      const respuesta = await fetch(URI_Profesionales + '/' + 'category' + categoria)
      const listaProfesionales = await respuesta.json()
      return listaProfesionales
    } catch (error) {
      throw new Error(`Error al obtener los profesionales: ${error.message}`)
    }
  }
  