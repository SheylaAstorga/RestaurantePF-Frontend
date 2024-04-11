import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Form,
  Carousel,
} from "react-bootstrap";
import "../../style/detalleProducto.css";
import ItemDetalle from "./ItemDetalle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  crearPedidoAPI,
  obtenerProductoAPI,
  productosEstadoAPI,
} from "../../helpers/queris";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Swal from 'sweetalert2';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../style/swiper.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [cantidad, setCantidad] = useState(1);
  const [relacionados, setRelacionados] = useState([]);

  const cargarProducto = async (id) => {
    const respuesta = await obtenerProductoAPI(id);
    const productoEncontrado = await respuesta.json();
    setProducto(productoEncontrado);
  };

  const Relacionados = async (categoria) => {
    const listarRelacionados = await productosEstadoAPI(categoria);
    setRelacionados(listarRelacionados);
  };

  useEffect(() => {
    cargarProducto(id);
  }, []);
  useEffect(() => {
    Relacionados(producto.categoria);
  }, [producto]);

  const handleDecrement = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleIncrement = () => {
    setCantidad(cantidad + 1);
  };

  const crearPedido = async () => {
    try {
      const pedido = {
        producto: producto._id,
        cantidad,
        estado: "Pendiente",
      };
      const { mensaje } = await crearPedidoAPI(pedido);
      Swal.fire({
        title: 'Pedido creado',
        text: mensaje,
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
    } catch (error) {
      console.error("Error al crear el pedido:", error);
      Swal.fire({
        title: 'Error',
        text: 'No se pudo crear el pedido',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  return (
    <>
      <section className="py-4 py-lg-3">
        <Container>
          <Card>
            <Row className="justify-content-center">
              <Col md={10} lg={6}>
                <Card.Img className="" src={producto.imagen} />
              </Col>
              <Col md={10} lg={6}>
                <Card.Body className="px-0">
                  <Card.Title className="colorLetraTitulo">
                    {producto.nombre}
                  </Card.Title>
                  <Card.Text className="h6 mt-lg-3">
                    ${producto.precio}
                  </Card.Text>
                  <Card.Text className="mt-lg-4">{producto.detalle}</Card.Text>
                  <div className="container mt-lg-4">
                    <Form className="row justify-content-between">
                      <Form.Group className="col-3 d-flex px-0">
                        <Button
                          className="bg-white border-0 text-dark rounded-0 py-0 pe-0 ps-1 p-md-2 m-0"
                          onClick={handleDecrement}
                        >
                          -
                        </Button>
                        <Form.Control
                          className="rounded-0 p-0 p-md-2 text-center border border-white"
                          value={cantidad}
                          type="tel"
                          minLength={1}
                          maxLength={2}
                          required
                          readOnly
                        />
                        <Button
                          className="bg-white border-0 text-dark rounded-0 py-0 pe-1 ps-0 p-md-2 m-0"
                          onClick={handleIncrement}
                        >
                          +
                        </Button>
                      </Form.Group>
                      <Button
                        className="rounded-0 col-6 tamanioLetraBoton"
                        onClick={crearPedido}
                      >
                        Agregar al pedido
                      </Button>
                    </Form>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      </section>
      <section>
        <Container className="my-3 my-lg-4">
          <Form>
            <Form.Group>
              <Form.Label className="colorLetraTitulo h5">
                Requisitos especiales
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Agregalos aquí. Haremos lo posible para incluirlos."
                className="txtAreaDesactivado"
              />
            </Form.Group>
          </Form>
        </Container>
      </section>
      <section className="cardsActivas">
        <h3 className="colorLetraTitulo text-center mt-4 mb-3">
          Productos Relacionados
        </h3>
        <Container>
          <Swiper
            spaceBetween={50}
            pagination={{
              type: "progressbar",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {relacionados.map((platoRelacionado) => (
              <SwiperSlide key={platoRelacionado._id}>
                <ItemDetalle plato={platoRelacionado}></ItemDetalle>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <Carousel slide={false} className="carousel carousel-dark slide mb-2">
          <Carousel.Item className="d-flex justify-content-center" >
           {relacionados.map((platoRelacionado)=><ItemDetalle key={platoRelacionado._id} plato={platoRelacionado}></ItemDetalle>)}
           </Carousel.Item>
            
            
          </Carousel> */}
        </Container>
      </section>
    </>
  );
};

export default DetalleProducto;
