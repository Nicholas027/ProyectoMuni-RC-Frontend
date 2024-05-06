import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  //dada alguna logica mostrar las rutas segun quien se loguea - reemplazar usuario por lo que necesite
  const usuario = JSON.parse(sessionStorage.getItem("usuario")) || null;
  //si no hay un usuario logueado
  if (!usuario || usuario.tipo !== "admin") {
    //si no es admin, no mostrar las rutas
    return <Navigate to={"/unauthorized"}></Navigate>;
  } else {
    return children;
  }
};

export default ProtectedRoutes;
