import "../styles/index.css";

const CardCategory = ({ imagen, nombre }) => {
  return (
    <div class="mt-5 d-flex border border-secondary-subtle rounded-pill border-1 cardCategory">
      <img src={imagen} alt="" class="rounded-start-pill" />
      <h3 class="titleCard m-auto">{nombre}</h3>
    </div>
  );
};

export default CardCategory;
