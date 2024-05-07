import { Routes, Route } from "react-router-dom";
import Administrador from "../components/pages/Administrador";
import DarAltaProfesional from "../components/pages/administrador/DarAltaProfesional";
import ChangeCV from "../components/pages/administrador/ChangeCV";
import ChangePhoto from "../components/pages/administrador/ChangePhoto";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador></Administrador>}></Route>
        <Route
          exact
          path="/editar/:id"
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
          path="/editar/:id/cambiarCV"
          element={<ChangeCV></ChangeCV>}
        ></Route>
        <Route
          exact
          path="/editar/:id/cambiarFoto"
          element={<ChangePhoto></ChangePhoto>}
        ></Route>
      </Routes>
    </>
  );
};

export default AdminRoutes;
