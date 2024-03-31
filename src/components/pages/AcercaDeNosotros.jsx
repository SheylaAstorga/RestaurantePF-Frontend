import { Card, Col, Container, Row } from "react-bootstrap";

const AcercaDeNostros = () => {
  return (
    <section className="bg-primary">
      <Container>
        <h2>Nuestro equipo</h2>
        <Row className="justify-content-center">
          <Col xs={10} md={6} lg={4} className="py-2">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Nombre</Card.Title>
                <Card.Link href="#">
                  <i className="bi bi-linkedin"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="bi bi-github"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={10} md={6} lg={4} className="py-2">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Nombre</Card.Title>
                <Card.Link href="#">
                  <i className="bi bi-linkedin"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="bi bi-github"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={10} md={6} lg={4} className="py-2">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Nombre</Card.Title>
                <Card.Link href="#">
                  <i className="bi bi-linkedin"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="bi bi-github"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={10} md={6} lg={4} className="py-2">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Nombre</Card.Title>
                <Card.Link href="#">
                  <i className="bi bi-linkedin"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="bi bi-github"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={10} md={6} lg={4} className="py-2">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Nombre</Card.Title>
                <Card.Link href="#">
                  <i className="bi bi-linkedin"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="bi bi-github"></i>
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
