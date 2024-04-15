import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Error404 from "../src/components/pages/Error404.jsx";
import Index from "../src/components/pages/Index.jsx";
import Footer from "../src/components/common/Footer.jsx";
import MenuNav from './components/common/MenuNav';
import ProfesionalDetail from "./components/pages/ProfesionalDetail.jsx";


function App() {
  return (
    <>
      <MenuNav/>
      <ProfesionalDetail />
      <Footer />
    </>
  );
};


export default App;
