const CardCategory = ({ imagen }) => {
  return (
    <div className="my-5 d-flex border border-secondary rounded-pill">
      <img src={imagen} alt="" width={84} />
      <div>
        <h3 className="titleCard">Carpinteria</h3>
      </div>
    </div>
  );
};

export default CardCategory;
