const EstrellasCalificaciones = ({calificacion}) => {

  const estrellasLlenas = Math.floor(calificacion);
  const estrellaMedia = calificacion - estrellasLlenas;
  const estrellasVacias = 5 - estrellasLlenas - (estrellaMedia >= 0.4 ? 1 : 0);

  const renderEstrellas = () => {
    const estrellas = [];
    for (let i = 0; i < estrellasLlenas; i++) {
      estrellas.push(
        <i key={i} className="bi bi-star-fill me-1 estrella-amarilla"></i>
      );
    }

    if (estrellaMedia >= 0.4) {
      estrellas.push(
        <i
          key={estrellas.length}
          className="bi bi-star-half me-1 estrella-amarilla"
        ></i>
      );
    }

    for (let i = 0; i < estrellasVacias; i++) {
      estrellas.push(
        <i
          key={estrellas.length + i}
          className="bi bi-star-fill me-1 estrella-gris"
        ></i>
      );
    }

    return estrellas;
  };

  return (
    <>
      <div className="mt-2 text-warning h4">{renderEstrellas()}</div>
    </>
  );
};

export default EstrellasCalificaciones;
