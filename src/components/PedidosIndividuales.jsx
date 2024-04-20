import React, { useState} from "react";
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import DetallePedido from "./DetallePedido";
import { borrarPedidoAPI } from "../helpers/queris.js";
import Swal from "sweetalert2";

const PedidosIndividuales = ({ producto, orden,carrito,guardarEnLocalstorage}) => {
  // const nombreProd = () => producto?.nombre ?? "";
  // const precioProd = () => producto?.precio ?? 0;
  // const detalleProd = () =>
  //   producto?.detalle ?? "No se encontró ningún comentario";
  // const imagenProd = () => producto?.imagen;
  const precioUnitario = producto.precio/producto.cantidad;
const [precio,setPrecio]= useState(producto.precio)
const [cantidad,setCantidad]= useState(producto.cantidad)

  const [quantity, setQuantity] = useState(producto.cantidad ?? 0);

  let carroMod = carrito.findIndex(producCarrito => producCarrito.orden === orden);
    
  


  const handleDecrement = () => {
    if (quantity > 1) {
      if(carroMod !== -1){
        setQuantity(quantity - 1);
        carrito[carroMod].cantidad = carrito[carroMod].cantidad - 1;
        carrito[carroMod].precio = carrito[carroMod].precio - precioUnitario;
        guardarEnLocalstorage();
        setPrecio(carrito[carroMod].precio);
        setCantidad(carrito[carroMod].cantidad)
      }

    }
  };

  const handleIncrement = () => {
    
    if(carroMod !== -1){
      setQuantity(quantity + 1);
      carrito[carroMod].cantidad = carrito[carroMod].cantidad + 1;
      carrito[carroMod].precio = carrito[carroMod].precio + precioUnitario;
      guardarEnLocalstorage();
      setPrecio(carrito[carroMod].precio);
      setCantidad(carrito[carroMod].cantidad)
    }
  };

  const eliminarPedido = (id) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar el pedido?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {

        const respuesta = await borrarPedidoAPI(id);
        console.log(respuesta);

        if (respuesta.status === 200) {
          Swal.fire({
            title: "Pedido eliminado",
            text: "El pedido fue eliminado correctamente.",
            icon: "success",
          });
          consultarAPI()
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: "El pedido no fue eliminado correctamente.",
            icon: "error",
          });
        }
      }
    });
    
  };

  return (
    <section className="p-3 fondo-pedidos mb-3">
      <Row>
        <div className="d-flex justify-content-lg-end justify-content-md-end">
          <Button className="mb-lg-3" onClick={() => eliminarPedido(id)}>
            <i className="bi bi-x"></i>
          </Button>
        </div>

        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center card-pedido-individual"
        >
          <img
            className="img-fluid"
            src={producto.imagen}
            alt={producto.nombre}
            style={{ maxWidth: "150px", marginRight: "10px" }}
          />
          <div className="text-center text-lg-start ms-lg-3 mt-1">
            <h5>{producto.nombre}</h5>
            <Link to="/" className="btn btn-primary mt-2 mt-lg-3">
              Editar
            </Link>
            <DetallePedido comentario={producto.detalle} />
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-md-end align-items-center mt-3 mt-md-0 pedido-precio"
        >
          
          <p className="mr-3 my-lg-4 mx-lg-3">cantidad: {cantidad}</p>
          <p className="mr-3 my-lg-4 mx-lg-3">${precio}</p>
          <ButtonGroup>
            <Button variant="outline-danger" onClick={handleDecrement}>
              <i className="bi bi-dash"></i>
            </Button>
            <Button variant="outline-secondary" disabled>
              {quantity}
            </Button>
            <Button variant="outline-success" onClick={handleIncrement}>
              <i className="bi bi-plus"></i>
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </section>
  );
};

export default PedidosIndividuales;
