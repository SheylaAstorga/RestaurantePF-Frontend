import { Card, Col, Container, Row } from "react-bootstrap";
import "../../style/acercaDeNosotros.css";

const AcercaDeNostros = () => {
  return (
    <section className="colorFondoAN">
      <Container>
        <h2 className="colorTituloAN text-center pt-5">Nuestro equipo</h2>
        <Row className="justify-content-center py-5">
          <Col xs={10} md={6} lg={4} className="py-2">
            <Card className="text-center colorFondoCardAN colorLetraCardAN p-3">
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" className=""/>
              <Card.Body>
                <Card.Title>Nombre</Card.Title>
                <Card.Link href="#">
                  <i className="bi bi-linkedin colorIconoCardAN"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="bi bi-github colorIconoCardAN"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={10} md={6} lg={4} className="py-2">
            <Card className="text-center colorFondoCardAN colorLetraCardAN p-3">
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" className=""/>
              <Card.Body>
                <Card.Title>Nombre</Card.Title>
                <Card.Link href="#">
                  <i className="bi bi-linkedin colorIconoCardAN"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="bi bi-github colorIconoCardAN"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={10} md={6} lg={4} className="py-2">
            <Card className="text-center colorFondoCardAN colorLetraCardAN p-3">
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" className=""/>
              <Card.Body>
                <Card.Title>Nombre</Card.Title>
                <Card.Link href="#">
                  <i className="bi bi-linkedin colorIconoCardAN"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="bi bi-github colorIconoCardAN"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={10} md={6} lg={4} className="py-2">
            <Card className="text-center colorFondoCardAN colorLetraCardAN p-3">
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" className=""/>
              <Card.Body>
                <Card.Title>Nombre</Card.Title>
                <Card.Link href="#">
                  <i className="bi bi-linkedin colorIconoCardAN"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="bi bi-github colorIconoCardAN"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={10} md={6} lg={4} className="py-2">
            <Card className="text-center colorFondoCardAN colorLetraCardAN p-3">
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" className=""/>
              <Card.Body>
                <Card.Title>Nombre</Card.Title>
                <Card.Link href="#">
                  <i className="bi bi-linkedin colorIconoCardAN"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="bi bi-github colorIconoCardAN"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default AcercaDeNostros;
