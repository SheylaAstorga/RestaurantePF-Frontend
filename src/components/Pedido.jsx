import "../style/pedido.css";
import ListGroup from "react-bootstrap/ListGroup";
import PedidosIndividuales from "./PedidosIndividuales";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { leerPedidosAPI } from "../helpers/queris";

const Pedido = () => {
  const [pedidos, setPedidos] = useState([]);
  
  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerPedidosAPI();
      console.log(respuesta);
      setPedidos(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container c-principal mainPage">
      <article className="d-flex justify-content-between">
        <h1>Mi pedido</h1>
        <Button variant="primary" className="m-3">
          Limpiar
        </Button>
      </article>
      <ListGroup className="border-bottom-list">
      <ListGroup.Item>
          {pedidos.map((pedido) => (
            <PedidosIndividuales
              key={pedido._id}
              pedido={pedido}
              setPedidos={setPedidos}
            ></PedidosIndividuales>
          ))}
         </ListGroup.Item>
      </ListGroup>
      <article className="d-flex justify-content-between pt-3">
        <h3>Total a pagar</h3>
        <h3>$8700$</h3>
      </article>
      <article className="group-pagar d-flex justify-content-end mt-2">
        <Link to={"/"}>
          <Button variant="outline-secondary" size="lg" className="btn-Seguir">
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
