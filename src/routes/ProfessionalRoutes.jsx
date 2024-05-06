import { Route, Routes } from "react-router-dom";
import ProfessionalProfile from "../components/pages/ProfessionalProfile";

const ProfessionalRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<ProfessionalProfile></ProfessionalProfile>}
        ></Route>
      </Routes>
    </>
  );
};

export default ProfessionalRoutes;
