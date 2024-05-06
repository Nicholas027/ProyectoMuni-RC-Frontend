import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ChangePhoto from "./components/pages/administrador/ChangePhoto.jsx";
import Nosotros from "./components/pages/Nosotros.jsx";
import UserSingUp from "./components/pages/UserSingUp.jsx";
import TermsConditions from "./components/TermsConditions.jsx";
import ProfessionalProfile from "./components/pages/ProfessionalProfile.jsx";
import UserSignIn from "./components/pages/UserSignIn.jsx";
import SelectRegisterMethod from './components/pages/SelectRegisterMethod.jsx'

function App() {

  const usuario = JSON.parse(sessionStorage.getItem('usuario')) || '';
  //si guardo el mail nomas, uso '' porque es un string, ahora necesito el mail y el rol
  const [usuarioLogueado, setUsuarioLogueado] = useState({})


  return (
    <BrowserRouter>
      <ScrollToTop />
      <TermsConditions/>
      <MenuNav></MenuNav>
      <Routes>
        <Route
          exact
          path="/selectSigninMethod"
          element={<SelectLoginMethod></SelectLoginMethod>}
        ></Route>
        <Route exact path="/signin" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
        <Route exact path="/user/signin" element={<UserSignIn setUsuarioLogueado={setUsuarioLogueado}></UserSignIn>}></Route>        
        <Route
          exact
          path="/signup"
          element={<SignUp titulo="REGISTRARSE" boton="Registrarse"></SignUp>}
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
            <DarAltaProfesional
              editar={false}
              titulo="REGISTRAR UN NUEVO PROFESIONAL"
              boton="REGISTRAR"
            ></DarAltaProfesional>
          }
        ></Route>
        <Route
          exact
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/administrador/editar/:id"
          element={
            <DarAltaProfesional
              editar={true}
              titulo="EDITAR INFORMACIÓN"
              boton="Editar"
            ></DarAltaProfesional>
          }
        ></Route>
        <Route
          exact
          path="/administrador/editar/:id/cambiarCV"
          element={<ChangeCV></ChangeCV>}
        ></Route>
        <Route
          exact
          path="/administrador/editar/:id/cambiarFoto"
          element={<ChangePhoto></ChangePhoto>}
        ></Route>
        <Route exact path="/about" element={<Nosotros></Nosotros>}></Route>
        <Route exact path="/selectRegisterMethod" element={<SelectRegisterMethod></SelectRegisterMethod>}></Route>
        <Route
          exact
          path="/signupUser"
          element={<UserSingUp></UserSingUp>}
        ></Route>
          <Route
          exact
          path="/professionalProfile"
          element={<ProfessionalProfile></ProfessionalProfile>}
        ></Route>
        <Route exact path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
