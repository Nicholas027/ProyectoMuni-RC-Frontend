import Card from 'react-bootstrap/Card';

const CardProfesional = () => {
    return (
        <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Nombre del profesional</Card.Title>
          <Card.Subtitle>
            Categoría del profesional
          </Card.Subtitle>
          <div className='text-center'>
          <a className='btn btn-outline-dark' href='#detallesProfesional'><i className="bi bi-plus-circle"></i></a>
          </div>
         
        </Card.Body>
      </Card>
    );
};

export default CardProfesional;