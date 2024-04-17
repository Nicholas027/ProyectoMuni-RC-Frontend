import "../../styles/signUp.css"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logoMuni from "../../assets/logo_muni_vertical_AZUL.png"

const SignUp = () => {
  return (
    <>
      <div className="position-relative">
        <div className="backgroundSignUp">
          <img src="https://www.eltucumano.com/fotos/cache/notas/2019/02/15/818x460_190215112544_91694.jpg" alt="imgProducto"/>
        </div>

        <div className="contenidoProducto rounded-4">
          <div className="image-section">
            <img src={logoMuni} alt="imgProducto" className="rounded-start-4" />
          </div>
          <div className="content-section">
            <h6 className="mb-4"></h6>
            <h1 className="display-6"></h1>

            <div className="mt-4">
              <strong>Descripción:</strong>
              <p>asfafs</p>
            </div>

            <div className="btnConteiner">
              <Button className="btnPrincipal">
                REGISTRARSE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
