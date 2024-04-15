import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Error404 from "../src/components/pages/Error404.jsx";
import Index from "../src/components/pages/Index.jsx";
import Footer from "../src/components/common/Footer.jsx";
import MenuNav from './components/common/MenuNav';
import ProfessionalDetail from "./components/pages/ProfessionalDetail.jsx";


function App() {
  return (
    <>
      <MenuNav/>
      <ProfessionalDetail />
      {/* <Index></Index> */}
      <Footer />
    </>
  );
};


export default App;
