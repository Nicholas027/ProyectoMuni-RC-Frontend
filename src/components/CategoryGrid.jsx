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
import { Link } from "react-router-dom";

const CategoryGrid = () => {
  const [busqueda, setBusqueda] = useState("");

  const handleChangeBusqueda = (event) => {
    setBusqueda(event.target.value);
  };

  const cards = [
    <Link
      to="/categorias/carpintero"
      className="text-decoration-none text-dark"
      categoria={"Carpinteros"}
    >
      <CardCategory
        imagen={carpinteriaLogo}
        nombre={"Carpinteros"}
      ></CardCategory>
    </Link>,
    <Link to="/categorias/gasista" className="text-decoration-none text-dark" categoria={"Gasistas"}>
      <CardCategory imagen={gasistaLogo} nombre={"Gasistas"}></CardCategory>
    </Link>,
    <Link to="/categorias/cerrajero" className="text-decoration-none text-dark" categoria={"Cerrajeros"}>
      <CardCategory imagen={cerrajeroLogo} nombre={"Cerrajeros"}></CardCategory>
    </Link>,
    <Link to="/categorias/mecanico" className="text-decoration-none text-dark" categoria={"Mecanicos"}>
      <CardCategory imagen={mecanicoLogo} nombre={"Mecánicos"}></CardCategory>
    </Link>,
    <Link
      to="/categorias/electricista"
      className="text-decoration-none text-dark"
      categoria={"Electricistas"}
    >
      <CardCategory
        imagen={electricistaLogo}
        nombre={"Electricistas"}
      ></CardCategory>
    </Link>,
    <Link to="/categorias/albañil" className="text-decoration-none text-dark" categoria={"Albañiles"}>
      <CardCategory imagen={albanilLogo} nombre={"Albañiles"}></CardCategory>
    </Link>,
    <Link to="/categorias/plomero" className="text-decoration-none text-dark" categoria={"Plomeros"}>
      <CardCategory imagen={plomeriaLogo} nombre={"Plomeros"}></CardCategory>
    </Link>,
    <Link to="/categorias/pintor" className="text-decoration-none text-dark" categoria={"Pintores"}>
      <CardCategory imagen={pintorLogo} nombre={"Pintores"}></CardCategory>
    </Link>,
    <Link to="/categorias/herrero" className="text-decoration-none text-dark" categoria={"Herreros"}>
      <CardCategory imagen={herreroLogo} nombre={"Herreros"}></CardCategory>
    </Link>,
    <Link to="/categorias/jardinero" className="text-decoration-none text-dark" categoria={"Jardineros"}>
      <CardCategory imagen={jardineroLogo} nombre={"Jardineros"}></CardCategory>
    </Link>,
    <Link to="/categorias/otros" className="text-decoration-none text-dark" categoria={"Otros"}>
      <CardCategory imagen={otrosLogo} nombre={"Otros"}></CardCategory>
    </Link>,
  ];

  const filteredCards = busqueda
  ? cards.filter(
      (card) =>
        card.props &&
        card.props.categoria &&
        card.props.categoria.toLowerCase().includes(busqueda.toLowerCase())
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
