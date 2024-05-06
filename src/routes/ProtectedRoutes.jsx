import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const usuario = JSON.parse(sessionStorage.getItem("usuario")) || null;

  if (!usuario) {
    return <Navigate to={"/selectSigninMethod"} />;
  }

  switch (usuario.tipo) {
    case "admin":
      return children;
    case "profesional":
      if (window.location.pathname.startsWith("/professionalProfile")) {
        return children;
      } else {
        return <Navigate to={"/unauthorized"}></Navigate>;
      }
    default:
      if (window.location.pathname.startsWith("/userProfile")) {
        return children;
      } else {
        return <Navigate to={"/unauthorized"}></Navigate>;
      }
  }
};

export default ProtectedRoutes;
