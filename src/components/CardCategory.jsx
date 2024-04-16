import "../styles/index.css";

const CardCategory = ({ imagen, nombre }) => {
  return (
    <div className="border border-secondary-subtle rounded-pill border-1 cardCategory">
      <img src={imagen} alt="" className="rounded-start-pill" />
      <h3 className="titleCard m-auto">{nombre}</h3>
    </div>
  );
};

export default CardCategory;
