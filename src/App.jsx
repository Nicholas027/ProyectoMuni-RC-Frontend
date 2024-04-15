import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Error404 from "../src/components/pages/Error404.jsx";
import Footer from "../src/components/common/Footer.jsx";
import MenuNav from './components/common/MenuNav';
import Categoria from "./components/pages/Categoria.jsx";
import ProfessionalDetail from "./components/pages/ProfessionalDetail.jsx";


function App() {
  return (
    <>
      <MenuNav/>
      {/* <Error404 /> */}
      {/* <Categoria/> */}
      <ProfessionalDetail></ProfessionalDetail>
      <Footer />
    </>
  );
};


export default App;
