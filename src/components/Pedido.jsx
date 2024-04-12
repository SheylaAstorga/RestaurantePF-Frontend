import "../style/pedido.css";
import ListGroup from "react-bootstrap/ListGroup";
import PedidosIndividuales from "./PedidosIndividuales";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { leerPedidoAPI } from "../helpers/queris.js";

const Pedido = () => {
  const [filas, setFilas] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerPedidoAPI();
      console.log(respuesta);
      setFilas(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container c-principal mainPage">
      <article className="d-flex justify-content-between pedido-container">
        <h2>Mi pedido</h2>
        <div className="boton-pedido">
          <Button variant="primary" className="m-3">
            Limpiar
          </Button>
        </div>
      </article>
      <ListGroup className="border-bottom-list">
        <ListGroup.Item>
          {filas.map((fila) => (
            <PedidosIndividuales
              key={fila._id}
              fila={fila.producto}
              cantidad={fila.cantidad}
            ></PedidosIndividuales>
          ))}
        </ListGroup.Item>
      </ListGroup>
      <article className="d-flex justify-content-between pt-3">
        <h3>Total a pagar</h3>
        <h3>$
          {filas.reduce((total, fila) => {
            const subtotal = fila.cantidad * fila.precio;
            total = total + subtotal;
            return total;
          }, 0)}
        </h3>
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