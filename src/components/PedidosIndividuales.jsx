import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import hamburguesa  from "../assets/hamburguesa.png";
import DetallePedido from './DetallePedido';
import { Link } from 'react-router-dom';
import Principal from './Principal';

const PedidosIndividuales = () => {

  //funciones para el contador de botones
  const [quantity, setQuantity] = React.useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <section>
      <Row xs={2}>
        <Col className="d-flex">
          <img className='imgHamburguesa' src={hamburguesa} alt="imagen del producto" />
          <article className='d-flex flex-column'>
            <h5>McCombo Mediano Grand Tasty Spicy Doble</h5>
            <Link to={'/'}>Editar</Link>
            <DetallePedido></DetallePedido>
          </article>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <article>
            <p className='m-2'>8.000$</p>
            <ButtonGroup aria-label="Quantity buttons">
              <Button variant="outline-danger" onClick={handleDecrement}>
              <i class="bi bi-trash"></i>
              </Button>
              <Button variant="outline-secondary" disabled>
                {quantity}
              </Button>
              <Button variant="outline-secondary" onClick={handleIncrement}>
              <i class="bi bi-plus"></i>
              </Button>
            </ButtonGroup>
          </article>
        </Col>
      </Row>
    </section>
  );
};

export default PedidosIndividuales;