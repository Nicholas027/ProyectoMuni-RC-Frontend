import { useState } from "react";

const EstrellasCalificaciones = () => {
  const [calificacion, setCalificacion] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <>
      {[...Array(5)].map((estrella, index) => {
        const calificacionActual = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              className="inputEstrella"
              value={calificacionActual}
              onClick={() => setCalificacion(calificacionActual)}
            />
            <span
              className={`bi bi-star estrella ${
                calificacionActual <= (hover || calificacion)
                  ? "estrella-amarilla"
                  : "estrella-gris"
              }`}
              onMouseEnter={() => setHover(calificacionActual)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </>
  );
};

export default EstrellasCalificaciones;
