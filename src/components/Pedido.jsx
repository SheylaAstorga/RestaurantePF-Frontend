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

const Pedido = () => {
  const [filas, setFilas] = useState([]);
  const [consulta, setConsulta] = useState(false)
  
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);
  const carrito = JSON.parse(localStorage.getItem("carritoKey")) || [];


  const isUserAuthenticated = () => {
    const token = localStorage.getItem("usuarioSazonDelAlma");
    return token !== null && token !== undefined;
  };





  const consultarAPI = async () => {
    try {
      const respuesta = await pedidosUsuario();
      if(respuesta !== undefined){
        
        setFilas(respuesta);
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
  
  const precio =()=>{
    if(carrito.length!== -1){
      cambioTotal()
    }
  }

  useEffect(()=>{
    precio();
    consultarAPI();
  },[])

  const guardarEnLocalstorage = () => {
    localStorage.setItem("carritoKey", JSON.stringify(carrito));
    cambioTotal();
  };
  


  const handleComprar = async () => {
    if (!isUserAuthenticated()) {
      navigate("/login");
      return;
    }

    try {
      const { mensaje } = await crearPedidoAPI(carrito);
      carrito.splice(0, carrito.length);
              guardarEnLocalstorage();
      Swal.fire({
        title: "Pedido creado",
        text: mensaje,
        icon: "success",
       
      });
      consultarAPI()
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
const recargarDatoFila = (id)=>{
  console.log(filas);
  let borrar = filas.findIndex((filas)=>{return filas._id = id});
filas.splice(borrar)
setFilas(filas)
}
  const borrarPedido = async(id)=>{
    Swal.fire({
      title: "estas seguro de eliminar el pedido?",
      text: "el pedido se eliminará de forma permanente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "si, estoy seguro"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(filas)
        borrarPedidoAPI(id);
        Swal.fire({
          title: "pedido borrado!",
          icon: "success"
        });
        setTimeout(()=>{
          window.location.reload()
        },1500)
      }
    });
  }
 



  const cargarPedidosUsuario =()=>{
  
      if(filas.length !== 0){
        return filas.map((fila) => (
          <RegistroPedido key={fila._id} fila={fila} producto={fila.producto}   borrarPedidoAPI={borrarPedido}></RegistroPedido>
        ))
      }else {
        return <h4>no hay productos guardados</h4>
      }
  }

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
              {cargarPedidosUsuario()}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </article>
    </section>
  );
};

export default Pedido;
