import { Button, Container } from "react-bootstrap";
import imagenPortada from "../../assets/categoryLogos/albanilLogo.webp";
import "../../styles/ProfessionalDetail.css";

const ProfessionalDetail = () => {
  return (
    <main>
      <section className="m-4 p-2 fondoFotos contenedorPadre">
        <img
          src={imagenPortada}
          alt="Foto de portada con la categoria del profesional."
          height={200}
          className="cajaPortada"
        />
        <div className="d-flex justify-content-center cajaPerfil">
          <div className="estiloFotoPerfil">
            <img
              src="https://allyounews.com/wp-content/uploads/2017/09/smiling-young-woman-looking-at-c-52426522.jpg"
              alt="Foto de perfil del profesional."
              className="estiloFotoPerfil"
            />
          </div>
        </div>
        <Container className="text-center mt-5">
          <h1>
            Marta Maria Vera
            <br />
          </h1>
          <span className="categoria px-1 text-light">Albañil</span>
          <div className="mt-2">⭐⭐⭐⭐⭐</div>
          <Button className="mt-3 py-1 px-5 btnContacto">Contactar</Button>
          <p className="h4 my-3 container">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo iure
            cumque maxime aliquam et doloribus reiciendis itaque vero sunt
            quisquam, nisi veniam corrupti inventore similique facilis eum quod
            impedit rerum.
          </p>
        </Container>
      </section>
      <section className="m-4 p-2 fondoTextos text-center">
        <h3>Curriculum Vitae</h3>
        <img
          src=""
          alt="Curriculum Vitae del profesional."
          className="img-fluid"
        />
      </section>
      <section className="m-4 p-2 fondoTextos text-center">
        <h3>Opiniones</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad placeat
          perspiciatis quaerat aliquid ducimus aut necessitatibus molestiae sint
          provident blanditiis nostrum quae dignissimos architecto, earum
          facilis sed dolorem incidunt? Saepe. Maxime ut deleniti dignissimos
          incidunt nobis accusantium ipsum, sed rerum nesciunt optio, molestiae
          quibusdam illum aspernatur perspiciatis? Enim ipsam animi, nulla non
          corrupti maxime amet, cumque tenetur error voluptates consectetur?
          Cupiditate soluta dolore qui voluptas velit laboriosam distinctio
          maiores eius omnis beatae necessitatibus nulla, eos magni ratione,
          totam temporibus perspiciatis explicabo doloribus officia sint quidem
          vitae labore. Velit, voluptatem rerum!
        </p>
      </section>
    </main>
  );
};

export default ProfessionalDetail;
