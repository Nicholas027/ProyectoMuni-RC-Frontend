import { Container } from "react-bootstrap";
import imagenPortada from "../../assets/categoryLogos/albanilLogo.webp";
import "../../styles/ProfessionalDetail.css";

const ProfessionalDetail = () => {
  return (
    <main className="">
      <section className="m-4 p-2 fondoFotos">
        <div className="">
          <img
            src={imagenPortada}
            alt="Foto de portada con la categoria del profesional."
            height={200}
            className="cajaPortada"
          />
        </div>
        <div className="d-flex justify-content-center cajaPerfil">
          <div className="estiloFotoPerfil">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg"
              alt="Foto de perfil del profesional."
              className="w-100 estiloFotoPerfil"
            />
          </div>
        </div>
        <Container className="mt-5 text-center">
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus maxime unde animi cupiditate culpa a? Illum earum
            ratione eligendi vel eum quisquam quae, dolores neque consectetur,
            optio, excepturi maxime facere. Placeat pariatur doloribus maxime
            perspiciatis. Maxime quod consequatur vel odio nemo corporis ipsa
            cumque fuga, labore quas. Vitae iusto dolorum suscipit laboriosam
            consectetur eos rerum delectus nemo, qui explicabo accusamus?
          </p>
        </Container>
      </section>
    </main>
  );
};

export default ProfessionalDetail;
