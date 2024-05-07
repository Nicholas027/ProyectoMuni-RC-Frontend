import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Error404 from "../src/components/pages/Error404.jsx";
import Index from "../src/components/pages/Index.jsx";
import Footer from "../src/components/common/Footer.jsx";
import MenuNav from "./components/common/MenuNav";
import Categoria from "./components/pages/Categoria.jsx";
import ProfessionalDetail from "./components/pages/ProfessionalDetail.jsx";
import Login from "./components/pages/Login.jsx";
import Administrador from "./components/pages/Administrador.jsx";
import SignUp from "./components/pages/SignUp.jsx";
import DarAltaProfesional from "./components/pages/administrador/DarAltaProfesional.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";
import SelectLoginMethod from "./components/pages/SelectLoginMethod.jsx";
import ChangeCV from "./components/pages/administrador/ChangeCV.jsx";
import ChangePassword from "./components/pages/administrador/ChangePassword.jsx";
import ChangePhoto from "./components/pages/administrador/ChangePhoto.jsx";
import Nosotros from "./components/pages/Nosotros.jsx";
import UserSingUp from "./components/pages/UserSingUp.jsx";
import TermsConditions from "./components/TermsConditions.jsx";
import ProfessionalProfile from "./components/pages/ProfessionalProfile.jsx";
import UserSignIn from "./components/pages/UserSignIn.jsx";
import SelectRegisterMethod from "./components/pages/SelectRegisterMethod.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";
import ProfessionalRoutes from "./routes/ProfessionalRoutes.jsx";
import Unauthorized from "./components/pages/Unauthorized.jsx";

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState("");
  const [usuarioTipo, setUsuarioTipo] = useState("");
  const [usuarioId, setUsuarioId] = useState("");

  const userLogueado = () => {
    return usuarioLogueado !== "";
  };
  const esAdmin = () => {
    return usuarioTipo === "admin";
  };

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario")) || null;
    if (usuario) {
      setUsuarioLogueado(usuario.email);
      setUsuarioTipo(usuario.tipo);
      setUsuarioId(usuario.id);
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <TermsConditions />
      <MenuNav
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
        usuarioTipo={usuarioTipo}
        setUsuarioTipo={setUsuarioTipo}
      ></MenuNav>
      <Routes>
        <Route
          exact
          path="/selectSigninMethod"
          element={
            userLogueado() ? (
              <Navigate to={"/"} />
            ) : (
              <SelectLoginMethod></SelectLoginMethod>
            )
          }
        ></Route>
        <Route
          exact
          path="/signin"
          element={
            userLogueado() ? (
              <Navigate to={"/"} />
            ) : (
              <Login
                setUsuarioLogueado={setUsuarioLogueado}
                setUsuarioTipo={setUsuarioTipo}
                setUsuarioId={setUsuarioId}
              ></Login>
            )
          }
        ></Route>
        <Route
          exact
          path="/user/signin"
          element={
            userLogueado() ? (
              <Navigate to={"/"} />
            ) : (
              <UserSignIn
                setUsuarioLogueado={setUsuarioLogueado}
                setUsuarioTipo={setUsuarioTipo}
              ></UserSignIn>
            )
          }
        ></Route>
        <Route
          exact
          path="/signup"
          element={
            userLogueado() ? (
              <Navigate to={"/"} />
            ) : (
              <SignUp titulo="REGISTRARSE" boton="Registrarse"></SignUp>
            )
          }
        ></Route>
        <Route exact path="/" element={<Index></Index>}></Route>
        <Route
          exact
          path="/categorias/:categoria"
          element={<Categoria></Categoria>}
        ></Route>
        <Route
          exact
          path="/categorias/:categoria/profesional/:id"
          element={<ProfessionalDetail></ProfessionalDetail>}
        ></Route>
        <Route
          exact
          path="/profesional/crear"
          element={
            esAdmin() ? (
              <DarAltaProfesional
                editar={false}
                titulo="REGISTRAR UN NUEVO PROFESIONAL"
                boton="REGISTRAR"
              ></DarAltaProfesional>
            ) : (
              <Navigate to={"/"} />
            )
          }
        ></Route>
        <Route
          exact
          path="/administrador/*"
          element={
            <ProtectedRoutes>
              <AdminRoutes></AdminRoutes>
            </ProtectedRoutes>
          }
        ></Route>
        <Route exact path="/about" element={<Nosotros></Nosotros>}></Route>
        <Route
          exact
          path="/selectRegisterMethod"
          element={
            userLogueado() ? (
              <Navigate to={"/"} />
            ) : (
              <SelectRegisterMethod></SelectRegisterMethod>
            )
          }
        ></Route>
        <Route
          exact
          path="/signupUser"
          element={
            userLogueado() ? <Navigate to={"/"} /> : <UserSingUp></UserSingUp>
          }
        ></Route>
          <Route
          exact
          path="/administrador/editar/:id/cambiarContraseña"
          element={esAdmin() ? (
            <ChangePassword/>
          ) : (
            <Navigate to={"/"} />
          )}
        ></Route>
        <Route
          exact
          path="/professionalProfile/*"
          element={
            <ProtectedRoutes>
              <ProfessionalRoutes usuarioId={usuarioId}></ProfessionalRoutes>
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          exact
          path="/unauthorized"
          element={<Unauthorized></Unauthorized>}
        ></Route>
        <Route exact path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
