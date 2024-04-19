import React from "react";
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
import DarAltaProfesional from './components/pages/administrador/DarAltaProfesional.jsx'

function App() {
  return (
    <BrowserRouter>
      <MenuNav></MenuNav>
      <Routes>
        <Route exact path="/signin" element={<Login></Login>}></Route>
        <Route exact path="/signup" element={<SignUp></SignUp>}></Route>
        <Route exact path="/" element={<Index></Index>}></Route>
        <Route
          exact
          path="/categorias/:categoria"
          element={<Categoria></Categoria>}
        ></Route>
         <Route
          exact
          path="/profesional"
          element={<ProfessionalDetail></ProfessionalDetail>}
        ></Route>
          <Route
          exact
          path="/profesional/crear"
          element={<DarAltaProfesional></DarAltaProfesional>}
        ></Route>
        <Route
          exact
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route exact path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
