import { Container, Card, Row, Col, Button, Form } from "react-bootstrap";
import "../../style/detalleProducto.css";

const DetalleProducto = () => {
  return (
    <>
      <section className="py-4 py-lg-3">
        <Container>
          <Card>
            <Row className="justify-content-center">
              <Col md={10} lg={6}>
                <Card.Img
                  className=""
                  src="https://media.istockphoto.com/id/1057832648/es/foto/chuleta-de-ternera-frita-milanesa-con-lim%C3%B3n-y-primer-plano-de-papas-fritas-en-un-plato.jpg?s=1024x1024&w=is&k=20&c=y5ZmvqQpg4EN0SMD4HlaSqwiEGerHxRwsQONgH9VEYM="
                />
              </Col>
              <Col md={10} lg={6}>
                <Card.Body className="px-0">
                  <Card.Title className="colorLetraTitulo">
                    Milanesa con papas
                  </Card.Title>
                  <Card.Text className="h6 mt-lg-3">$1000</Card.Text>
                  <Card.Text className="mt-lg-4">
                    La milanesa dorada y jugosa, envuelta en su crujiente capa
                    de pan rallado, se fusiona perfectamente con las papas
                    fritas, creando un festín irresistible para los sentidos.
                    Cada bocado es un viaje culinario que deja una huella de
                    satisfacción duradera. El equilibrio entre la textura
                    crujiente y la suavidad interior hacen de este plato una
                    experiencia gastronómica inigualable.
                  </Card.Text>
                  <div className="container mt-lg-4">
                    <Form className="row justify-content-between">
                      <Form.Group className="col-3 d-flex px-0">
                        <Button className="bg-white border-0 text-dark rounded-0 py-0 pe-0 ps-1 p-md-2 m-0">
                          -
                        </Button>
                        <Form.Control
                          className="rounded-0 p-0 p-md-2 text-center border border-white"
                          defaultValue={1}
                          type="tel"
                          minLength={1}
                          maxLength={2}
                          required
                        />
                        <Button className="bg-white border-0 text-dark rounded-0 py-0 pe-1 ps-0 p-md-2 m-0">
                          +
                        </Button>
                      </Form.Group>
                      <Button className="rounded-0 col-6 tamanioLetraBoton">
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
    </>
  );
};

export default DetalleProducto;
