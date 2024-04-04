import ListGroup from "react-bootstrap/ListGroup";
import "../style/pedido.css";
import PedidosIndividuales from "./PedidosIndividuales";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

const Pedido = () => {
  return (
    <section className="container">
      <h1>Mi pedido</h1>
      <ListGroup className="border-bottom-list">
        <ListGroup.Item>
          <PedidosIndividuales></PedidosIndividuales>
          <PedidosIndividuales></PedidosIndividuales>
          <PedidosIndividuales></PedidosIndividuales>
          <PedidosIndividuales></PedidosIndividuales>
        </ListGroup.Item>
      </ListGroup>
      <article className="d-flex justify-content-between pt-3">
        <h3>Total a pagar</h3>
        <h3>$8700$</h3>
      </article>
      <article className="d-flex justify-content-end mt-2">
        <Link to={'/'}>
        <Button variant="outline-secondary" size="lg" className="mx-4">
          Seguir pidiendo
        </Button>
        </Link>
        <Button type="submit" size="lg" className="btn_pagar">
          Pagar
        </Button>
      </article>
    </section>
  );
};

export default Pedido;