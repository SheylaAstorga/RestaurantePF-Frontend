import "../style/pedido.css";
import ListGroup from "react-bootstrap/ListGroup";
import PedidosIndividuales from "./PedidosIndividuales";
import Button from "react-bootstrap/Button";

import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import { crearPedidoAPI } from '../helpers/queris';


const Pedido = () => {
  const navigate = useNavigate();

  const handleComprar = async () => {
    if (!isUserAuthenticated()) {
      // Redirigir al usuario al formulario de login
      navigate('/login');
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const pedido = {
        // Datos del pedido que seran rellenados
      };

      const { mensaje } = await crearPedidoAPI(pedido, config);
      Swal.fire({
        title: 'Pedido creado',
        text: mensaje,
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
    } catch (error) {
      console.error('Error al crear el pedido:', error);
      Swal.fire({
        title: 'Error',
        text: 'No se pudo crear el pedido',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  const isUserAuthenticated = () => {
    const token = localStorage.getItem('authToken');
    return token !== null && token !== undefined;
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
              producto={fila.producto}
              cantidad={fila.cantidad}
            ></PedidosIndividuales>
          ))}
        </ListGroup.Item>
      </ListGroup>
      <article className="d-flex justify-content-between pt-3">
        <h3>Total a pagar</h3>
        <h3>$
          {
            filas.reduce((acumulador, fila) =>{
              let subtotal = cantidadProducto(fila.cantidad) * precioProducto(fila.producto);
              return acumulador + subtotal;
            }, 0)
          }
        </h3>
      </article>
      <article className="group-pagar d-flex justify-content-end mt-2">
        <Link to={"/"}>
          <Button variant="outline-secondary" size="lg" className="btn-Seguir">
            Seguir pidiendo
          </Button>
        </Link>
        <Button type="submit" size="lg" className="btn_pagar" onClick={handleComprar}>
          Pagar
        </Button>
      </article>
    </section>
  );
};

export default Pedido;