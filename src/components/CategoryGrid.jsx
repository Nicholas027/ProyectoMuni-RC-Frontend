import CardCategory from "./CardCategory";
import carpinteriaLogo from "../assets/categoryLogos/carpinteriaLogo.jpg";
import plomeriaLogo from "../assets/categoryLogos/plomeriaLogo.jpg";
import gasistaLogo from "../assets/categoryLogos/gasistaLogo.png";
import electricistaLogo from "../assets/categoryLogos/electricistaLogo.jpg";
import cerrajeroLogo from "../assets/categoryLogos/cerrajeroLogo.jpg";
import mecanicoLogo from "../assets/categoryLogos/mecanicoLogo.webp";
import albanilLogo from "../assets/categoryLogos/albanilLogo.webp";
import herreroLogo from "../assets/categoryLogos/herreroLogo.webp";
import pintorLogo from "../assets/categoryLogos/pintorLogo.jpeg";
import jardineroLogo from "../assets/categoryLogos/jardineroLogo.jpg";
import otrosLogo from "../assets/categoryLogos/otrosLogo.jpg";
import React, { useState } from "react";

const CategoryGrid = () => {
  const [busqueda, setBusqueda] = useState("");

  const handleChangeBusqueda = (event) => {
    setBusqueda(event.target.value);
  };

  const cards = [
    <CardCategory
      imagen={carpinteriaLogo}
      nombre={"Carpinteros"}
    ></CardCategory>,
    <CardCategory imagen={gasistaLogo} nombre={"Gasistas"}></CardCategory>,
    <CardCategory imagen={cerrajeroLogo} nombre={"Cerrajeros"}></CardCategory>,
    <CardCategory imagen={mecanicoLogo} nombre={"Mecánicos"}></CardCategory>,
    <CardCategory
      imagen={electricistaLogo}
      nombre={"Electricistas"}
    ></CardCategory>,
    <CardCategory imagen={albanilLogo} nombre={"Albañiles"}></CardCategory>,
    <CardCategory imagen={plomeriaLogo} nombre={"Plomeros"}></CardCategory>,
    <CardCategory imagen={pintorLogo} nombre={"Pintores"}></CardCategory>,
    <CardCategory imagen={herreroLogo} nombre={"Herreros"}></CardCategory>,
    <CardCategory imagen={jardineroLogo} nombre={"Jardineros"}></CardCategory>,
    <CardCategory imagen={otrosLogo} nombre={"Otros"}></CardCategory>,
  ];

  const filteredCards = busqueda
    ? cards.filter((card) =>
        card.props.nombre.toLowerCase().startsWith(busqueda.toLowerCase())
      )
    : cards;

  return (
    <div className="d-flex flex-column">
      <div className="d-flex mx-auto mt-3 flex-column">
        <h4>¿Qué profesional está buscando?</h4>
        <input
          type="text"
          value={busqueda}
          onChange={handleChangeBusqueda}
          placeholder="Buscar..."
          className="inputBuscador"
        />
      </div>

      <div className="gridCategory mb-5">
        {filteredCards.map((card, index) => (
          <React.Fragment key={index}>{card}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
