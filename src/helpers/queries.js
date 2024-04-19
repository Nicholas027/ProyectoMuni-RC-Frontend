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


//Petición para dar de alta a un profesional desde el componente administrador.
export const modificarEstadoProfesionalAPI = async (profesionalId, nuevoEstado) => {
  try {
    const response = await fetch(`${URI_Profesionales}/${profesionalId}/state`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pendiente: nuevoEstado })
    });
    if (!response.ok) {
      throw new Error(`Error al ${nuevoEstado ? 'dar de alta' : 'dar de baja'} al profesional`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Error en la petición para ${nuevoEstado ? 'dar de alta' : 'dar de baja'} al profesional`);
  }
};
  