import ListGroup from 'react-bootstrap/ListGroup';
import "../style/pedido.css";
import PedidosIndividuales from './PedidosIndividuales';


const Pedido = () => {
    return (
       
        <section className="container">
        <ListGroup className="border-bottom-list">
          <ListGroup.Item>  <PedidosIndividuales></PedidosIndividuales>  </ListGroup.Item>
        </ListGroup>
      </section>
  
    );
};

export default Pedido;