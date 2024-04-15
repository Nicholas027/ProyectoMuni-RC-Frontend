import { Button, Container } from "react-bootstrap";
import imagenPortada from "../../assets/categoryLogos/albanilLogo.webp";
import "../../styles/ProfessionalDetail.css";

const ProfessionalDetail = () => {
  return (
    <main className="">
      <section className="m-4 p-2 fondoFotos">
        <img
          src={imagenPortada}
          alt="Foto de portada con la categoria del profesional."
          height={200}
          className="cajaPortada"
        />
        <div className="d-flex justify-content-center cajaPerfil">
          <div className="estiloFotoPerfil">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg"
              alt="Foto de perfil del profesional."
              className="w-100 estiloFotoPerfil"
            />
          </div>
        </div>
        <Container className="text-center">
          <h1>
            Facundo Alejo Herrera <br />
          </h1>
          <span className="categoria my-2 px-1 text-light">Albañil</span>
          <div>⭐⭐⭐⭐⭐</div>
          <Button className="my-3 py-1 px-5 btnContacto">Contactar</Button>
          <p className="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sint
            modi neque libero, sapiente commodi velit perspiciatis facilis
            laborum fugiat, autem aperiam. Vel ipsum doloremque repudiandae
            magnam temporibus reiciendis quam? Sint, consectetur voluptas
            maiores nihil commodi deserunt, dolorum numquam tempora assumenda
            nulla quibusdam soluta illum dolorem. Suscipit impedit aliquid unde
            incidunt similique laboriosam quidem voluptates nemo fugiat. Eos,
            animi doloremque! Quod reiciendis repellendus qui, sequi harum
            aliquam incidunt cumque culpa doloremque perspiciatis iusto nam
            nesciunt quis esse ipsam ea ipsum itaque adipisci doloribus
            consectetur animi asperiores velit ab. Facere, ea.
          </p>
        </Container>
      </section>
    </main>
  );
};

export default ProfessionalDetail;
