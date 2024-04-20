import "../style/pedido.css";
import ListGroup from "react-bootstrap/ListGroup";
import PedidosIndividuales from "./PedidosIndividuales";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { crearPedidoAPI, leerPedidoAPI } from "../helpers/queris.js";

const Pedido = ({ usuarioLogueado }) => {
  const [filas, setFilas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      if (usuarioLogueado.token !== "") {
        const respuesta = await leerPedidoAPI(usuarioLogueado.token);
        if(respuesta[1] === 200){
          setFilas(respuesta[0]);
        }else{
          navigate("/login")
          Swal.fire({
            title: "Ocurrio un error",
            text: respuesta[0].mensaje,
            icon: "error",
          });
        }
      } else {
        navigate("/login");
        Swal.fire({
          title: "Debes iniciar secion primero",
          text: "si no tienes cuenta registrate",
          icon: "info",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const precioProducto = (producto) => {
    if (producto !== undefined && producto !== null) {
      return producto.precio;
    } else {
      return 0;
    }
  };

  const cantidadProducto = (cantidad) => {
    if (cantidad !== undefined && cantidad !== null) {
      return cantidad;
    } else {
      return 0;
    }
  };

  const handleComprar = async () => {
    if (!isUserAuthenticated()) {
      navigate("/login");
      return;
    }

    try {
      const pedido = {
      };

      const { mensaje } = await crearPedidoAPI(pedido, config);
      Swal.fire({
        title: "Pedido creado",
        text: mensaje,
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } catch (error) {
      console.error("Error al crear el pedido:", error);
      Swal.fire({
        title: "Error",
        text: "No se pudo crear el pedido",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const isUserAuthenticated = () => {
    const token = localStorage.getItem("authToken");
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
              id={fila._id}
              producto={fila.producto}
              cantidad={fila.cantidad}
              consultarAPI={consultarAPI}
            />
          ))}
        </ListGroup.Item>
      </ListGroup>
      <article className="d-flex justify-content-between pt-3">
        <h3>Total a pagar</h3>
        <h3>
          $
          {filas.reduce((acumulador, fila) => {
            let subtotal =
              cantidadProducto(fila.cantidad) * precioProducto(fila.producto);
            return acumulador + subtotal;
          }, 0)}
        </h3>
      </article>
      <article className="group-pagar d-flex justify-content-end mt-2">
        <Link to={"/"}>
          <Button variant="outline-secondary" size="lg" className="btn-Seguir">
            Seguir pidiendo
          </Button>
        </Link>
        <Button
          type="submit"
          size="lg"
          className="btn_pagar"
          onClick={handleComprar}
        >
          Pagar
        </Button>
      </article>
    </section>
  );
};

export default Pedido;
