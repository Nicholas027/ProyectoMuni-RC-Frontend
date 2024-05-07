import { Route, Routes } from "react-router-dom";
import ProfessionalProfile from "../components/pages/ProfessionalProfile";

const ProfessionalRoutes = ({ usuarioId }) => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProfessionalProfile usuarioId={usuarioId}></ProfessionalProfile>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default ProfessionalRoutes;
