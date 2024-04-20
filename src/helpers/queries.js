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

//Registro de un profesional desde el panel de administrador.
export const professionalAdminRegisterAPI = async (formData) => {
  try {
    const response = await fetch(`${URI_Profesionales}/registerAdmin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Error al registrar el profesional');
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Error en la petición para registrar el profesional: ${error.message}`);
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
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const buscarProfesionalesAPI = async (categoria, search) =>{
  try {
    const respuesta = await fetch(URI_Profesionales + '/' + 'category' + '/' + categoria + '/' + search)
    return await respuesta.json()
  } catch (error) {
    throw new Error(`Error al buscar a los profesionales: ${error.message}`);
  }
}

export const borrarProfesionalAPI = async (profesionalId) => {
  try {
    const response = await fetch(`${URI_Profesionales}/${profesionalId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })

    if (!response.ok) {
      throw new Error('Error al borrar el profesional');
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Error al borrar al profesional: ${error.message}`);
  }
}