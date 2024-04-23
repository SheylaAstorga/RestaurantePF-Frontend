import "../style/pedido.css";
import ListGroup from "react-bootstrap/ListGroup";
import PedidosIndividuales from "./PedidosIndividuales";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { crearPedidoAPI, borrarPedidoAPI, pedidosUsuario } from "../helpers/queris.js";
import RegistroPedido from "./RegistroPedido.jsx";

const Pedido = ({ usuarioLogueado }) => {
  const [filas, setFilas] = useState([]);
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);
  const carrito = JSON.parse(localStorage.getItem("carritoKey")) || [];


  const isUserAuthenticated = () => {
    const token = localStorage.getItem("usuarioSazonDelAlma");
    return token !== null && token !== undefined;
  };

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

 

  const cambioTotal = () => {
    const total = carrito.reduce((suma, carr) => {
      return suma + carr.precio;
    }, 0);
    setSubtotal(total);
  };

  const guardarEnLocalstorage = () => {
    localStorage.setItem("carritoKey", JSON.stringify(carrito));
    cambioTotal();
  };

  useEffect(() => {
    consultarAPI();
    cambioTotal();
  }, []);


  const handleComprar = async () => {
    if (!isUserAuthenticated()) {
      navigate("/login");
      return;
    }

    try {
      const { mensaje } = await crearPedidoAPI(carrito);
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

  const CargarPedidos = () => {
    if (carrito.length !== 0) {
      return carrito.map((producto) => (
        <PedidosIndividuales
          key={producto.orden}
          orden={producto.orden}
          producto={producto}
          carrito={carrito}
          guardarEnLocalstorage={guardarEnLocalstorage}
        
        />
      ));
    } else {
      return (
        <div className="text-center my-5">
          <h4>
            aún no seleccionaste ningun pedido, preciona{" "}
            <em>"volver a menu"</em> para elegir
          </h4>
          <p>
            te veo de regreso... <i className="bi bi-emoji-wink"></i>{" "}
          </p>
        </div>
      );
    }
  };
  useEffect(() => {
    consultarAPI();
    cambioTotal();
  }, [handleComprar,borrarPedidoAPI ]);

  return (
    <section className="container c-principal mainPage">
      <article className="d-flex justify-content-between pedido-container">
        <h2>Mi pedido</h2>
        <div className="boton-pedido">
          <Button
            variant="primary"
            className="m-3"
            onClick={() => {
              carrito.splice(0, carrito.length);
              guardarEnLocalstorage();
            }}
          >
            Limpiar
          </Button>
        </div>
      </article>
      <ListGroup className="border-bottom-list">
        <ListGroup.Item>{CargarPedidos()}</ListGroup.Item>
      </ListGroup>
      <article className="d-flex justify-content-between pt-3">
        <h3>Total a pagar</h3>
        <h3>${subtotal}</h3>
      </article>
      <article className="group-pagar d-flex justify-content-end mt-2">
        <Link to={"/menu"}>
          <Button variant="outline-secondary" size="lg" className="btn-Seguir">
            volver a menu
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
      <article className="my-5">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Mis Pedidos</Accordion.Header>
            <Accordion.Body>
              {filas.map((fila) => (
                <RegistroPedido key={fila._id} fila={fila} producto={fila.producto}   borrarPedidoAPI={borrarPedidoAPI}></RegistroPedido>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </article>
    </section>
  );
};

export default Pedido;
